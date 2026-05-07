import { NextResponse } from "next/server";

/**
 * POST /api/contact
 *
 * Inbound-lead pipe. Dual-write strategy:
 *
 *   1. Airtable (primary, always-on) — appends a row to the "Website Leads"
 *      table in the Hotels CRE base. Authoritative log of every submission.
 *
 *   2. HubSpot (best-effort) — creates a Contact in HubSpot CRM tagged
 *      with `website_lead_source = "Matthews Hotel Team Website"`. Skipped
 *      gracefully if the account hits its tier limit (HubSpot Free caps at
 *      1,000 contacts) — Airtable still receives the lead and we mark
 *      `HubSpot Status` as "Skipped (cap)" or "Error".
 *
 * The user always gets a success response if Airtable accepted the lead.
 * If both sinks fail, we return 502 and the form falls back to mailto.
 *
 * Env vars (set as Sensitive in Vercel):
 *   AIRTABLE_PAT          — Airtable Personal Access Token
 *   AIRTABLE_BASE_ID      — Airtable base id (appXXXX...)
 *   AIRTABLE_LEADS_TABLE  — table name, default "Website Leads"
 *   HUBSPOT_TOKEN         — HubSpot Private App token (optional)
 */

type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  topic: string;
  message: string;
  pageUri?: string;
  pageName?: string;
};

const HUBSPOT_CONTACTS_ENDPOINT =
  "https://api.hubapi.com/crm/v3/objects/contacts";
const LEAD_SOURCE_LABEL = "Matthews Hotel Team Website";

function bad(status: number, error: string, code?: string) {
  return NextResponse.json({ ok: false, error, code }, { status });
}

type HubSpotStatus = "Synced" | "Skipped (cap)" | "Error";

async function sendToHubSpot(
  payload: ContactPayload,
): Promise<HubSpotStatus> {
  const token = process.env.HUBSPOT_TOKEN;
  if (!token) return "Skipped (cap)";

  const messageWithContext = [
    `Topic: ${payload.topic}`,
    payload.pageName || payload.pageUri
      ? `Source: ${payload.pageName ?? payload.pageUri}`
      : null,
    "",
    "Message:",
    payload.message,
  ]
    .filter((line): line is string => line !== null)
    .join("\n");

  const body = {
    properties: {
      email: payload.email,
      firstname: payload.firstName,
      lastname: payload.lastName,
      ...(payload.phone ? { phone: payload.phone } : {}),
      message: messageWithContext,
      topic_of_interest: payload.topic,
      website_lead_source: LEAD_SOURCE_LABEL,
      hs_lead_status: "NEW",
    },
  };

  try {
    const res = await fetch(HUBSPOT_CONTACTS_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (res.status === 409) {
      // Existing contact → patch
      const search = await fetch(`${HUBSPOT_CONTACTS_ENDPOINT}/search`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filterGroups: [
            {
              filters: [
                { propertyName: "email", operator: "EQ", value: payload.email },
              ],
            },
          ],
          limit: 1,
        }),
      });
      const sj = (await search.json()) as { results?: { id: string }[] };
      const id = sj.results?.[0]?.id;
      if (id) {
        await fetch(`${HUBSPOT_CONTACTS_ENDPOINT}/${id}`, {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
      }
      return "Synced";
    }

    if (res.status === 402) return "Skipped (cap)";
    if (!res.ok) {
      console.error("[contact] hubspot non-OK", res.status, await res.text());
      return "Error";
    }
    return "Synced";
  } catch (err) {
    console.error("[contact] hubspot fetch threw", err);
    return "Error";
  }
}

async function sendToAirtable(
  payload: ContactPayload,
  hubspotStatus: HubSpotStatus,
): Promise<{ ok: boolean; error?: string }> {
  const pat = process.env.AIRTABLE_PAT;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_LEADS_TABLE || "Website Leads";

  if (!pat || !baseId) {
    return { ok: false, error: "Airtable not configured." };
  }

  const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(
    tableName,
  )}`;
  const fields: Record<string, string> = {
    Name: `${payload.firstName} ${payload.lastName}`.trim(),
    Email: payload.email,
    Topic: payload.topic,
    Message: payload.message,
    "Submitted At": new Date().toISOString(),
    Source: LEAD_SOURCE_LABEL,
    "HubSpot Status": hubspotStatus,
  };
  if (payload.phone) fields["Phone"] = payload.phone;
  if (payload.pageUri) fields["Page URL"] = payload.pageUri;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${pat}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fields, typecast: true }),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("[contact] airtable non-OK", res.status, text);
      return { ok: false, error: `Airtable returned ${res.status}.` };
    }
    return { ok: true };
  } catch (err) {
    console.error("[contact] airtable fetch threw", err);
    return { ok: false, error: "Could not reach Airtable." };
  }
}

export async function POST(req: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = await req.json();
  } catch {
    return bad(400, "Invalid JSON body.");
  }

  const { firstName, lastName, email, phone, topic, message, pageUri, pageName } =
    (body ?? {}) as Partial<ContactPayload>;

  if (!firstName || !lastName || !email || !topic || !message) {
    return bad(400, "Missing required fields.");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return bad(400, "Invalid email address.");
  }

  const payload: ContactPayload = {
    firstName,
    lastName,
    email,
    phone,
    topic,
    message,
    pageUri,
    pageName,
  };

  // Sequential — HubSpot first so we know its status before Airtable logs it.
  const hubspotStatus = await sendToHubSpot(payload);
  const airtable = await sendToAirtable(payload, hubspotStatus);

  if (!airtable.ok) {
    // Both sinks failed (or Airtable not configured) → tell the client.
    return bad(
      502,
      airtable.error || "Could not save the lead.",
      "SINKS_FAILED",
    );
  }

  return NextResponse.json({
    ok: true,
    sinks: { airtable: "ok", hubspot: hubspotStatus },
  });
}

import { NextResponse } from "next/server";

/**
 * POST /api/contact
 *
 * Accepts the contact-form submission, validates it, and creates a Contact
 * directly in HubSpot CRM via the Private App token. Pushed contacts are
 * tagged with `website_lead_source = "Matthews Hotel Team Website"` and
 * `topic_of_interest = <user choice>` so they can be segmented from the
 * existing acquisitions pipeline.
 *
 * Set in Vercel → Project → Settings → Environment Variables:
 *   HUBSPOT_TOKEN — HubSpot Private App access token (sensitive)
 *
 * If the token is not set, the route returns 503 with a clear code so the
 * client can fall back to mailto.
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

  const token = process.env.HUBSPOT_TOKEN;
  if (!token) {
    return bad(
      503,
      "HubSpot is not configured on this deployment.",
      "HUBSPOT_NOT_CONFIGURED",
    );
  }

  // Build the message field with full context so HubSpot users see the
  // page the lead came from, the chosen topic, and the user's note.
  const messageWithContext = [
    `Topic: ${topic}`,
    pageName || pageUri ? `Source: ${pageName ?? pageUri}` : null,
    "",
    "Message:",
    message,
  ]
    .filter((line): line is string => line !== null)
    .join("\n");

  const payload = {
    properties: {
      email,
      firstname: firstName,
      lastname: lastName,
      ...(phone ? { phone } : {}),
      message: messageWithContext,
      topic_of_interest: topic,
      website_lead_source: LEAD_SOURCE_LABEL,
      hs_lead_status: "NEW",
    },
  };

  let res: Response;
  try {
    res = await fetch(HUBSPOT_CONTACTS_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error("[contact] HubSpot fetch failed", err);
    return bad(502, "Could not reach HubSpot.");
  }

  if (res.status === 409) {
    // Contact already exists by email → patch instead so existing leads
    // don't dead-end. Match by email via search, then update.
    try {
      const searchRes = await fetch(
        `${HUBSPOT_CONTACTS_ENDPOINT}/search`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            filterGroups: [
              {
                filters: [
                  { propertyName: "email", operator: "EQ", value: email },
                ],
              },
            ],
            limit: 1,
          }),
        },
      );
      const searchJson = (await searchRes.json()) as {
        results?: { id: string }[];
      };
      const existingId = searchJson.results?.[0]?.id;
      if (existingId) {
        await fetch(`${HUBSPOT_CONTACTS_ENDPOINT}/${existingId}`, {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        return NextResponse.json({ ok: true, updated: true });
      }
    } catch (err) {
      console.error("[contact] HubSpot 409 patch path failed", err);
    }
    return NextResponse.json({ ok: true, duplicate: true });
  }

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    console.error("[contact] HubSpot rejected the submission", res.status, text);
    return NextResponse.json(
      { ok: false, error: `HubSpot returned ${res.status}.` },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

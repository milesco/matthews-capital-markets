"use client";

import * as React from "react";
import { ChevronRight, Check } from "lucide-react";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";

// TODO: Replace mailto with API route + Resend/Postmark for production.
// (Server route should validate, send transactional email, and write to CRM.)

type Topic =
  | ""
  | "Selling a hotel"
  | "Acquiring a hotel"
  | "Market intelligence / research"
  | "Other";

const TOPICS: Exclude<Topic, "">[] = [
  "Selling a hotel",
  "Acquiring a hotel",
  "Market intelligence / research",
  "Other",
];

const labelClass =
  "block text-[12px] uppercase tracking-[0.01em] text-[#6e6e73] mb-2";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [topic, setTopic] = React.useState<Topic>("");
  const [message, setMessage] = React.useState("");
  const [state, setState] = React.useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);

  /**
   * Build a mailto fallback URL, used when HubSpot is not configured on
   * the deployment, or when the API route returns an error.
   */
  const mailtoFallback = React.useCallback(() => {
    const subject = `Hotel Team inquiry, ${topic}`;
    const lines = [
      `Name: ${firstName} ${lastName}`.trim(),
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `Topic: ${topic}`,
      "",
      "Message:",
      message,
    ].filter((line) => line !== null);
    const body = lines.join("\n");
    return `mailto:hotelteam@matthews.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }, [firstName, lastName, email, phone, topic, message]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state === "submitting") return;

    setState("submitting");
    setErrorMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          topic,
          message,
          pageUri:
            typeof window !== "undefined" ? window.location.href : undefined,
          pageName:
            typeof document !== "undefined" ? document.title : undefined,
        }),
      });

      if (res.ok) {
        setState("success");
        return;
      }

      // 503 with code "HUBSPOT_NOT_CONFIGURED" → fall through to mailto so
      // the user still has a working path while ENV is being wired.
      const data = (await res.json().catch(() => ({}))) as {
        code?: string;
        error?: string;
      };
      if (res.status === 503 && data.code === "HUBSPOT_NOT_CONFIGURED") {
        window.location.href = mailtoFallback();
        setState("success");
        return;
      }

      setState("error");
      setErrorMsg(
        data.error ||
          "Something went wrong. Email hotelteam@matthews.com directly.",
      );
    } catch {
      // Network failure, open mailto as a hard fallback.
      window.location.href = mailtoFallback();
      setState("success");
    }
  };

  const submitted = state === "success";
  const submitting = state === "submitting";

  return (
    <Reveal delay={0.05}>
      <form
        onSubmit={handleSubmit}
        className="rounded-[18px] bg-white p-6 md:p-8 shadow-[var(--shadow-card)]"
        noValidate
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="firstName" className={labelClass}>
              First name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="form-input"
            />
          </div>
          <div>
            <label htmlFor="lastName" className={labelClass}>
              Last name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="form-input"
            />
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-input"
            />
          </div>
        </div>

        <div className="mt-5">
          <label htmlFor="topic" className={labelClass}>
            How can we help?
          </label>
          <select
            id="topic"
            name="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value as Topic)}
            required
            className="form-input appearance-none bg-[length:16px_16px] bg-no-repeat bg-[right_16px_center] pr-12"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2386868b' stroke-width='1.75' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>\")",
            }}
          >
            <option value="" disabled>
              Select a topic…
            </option>
            {TOPICS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-5">
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-input resize-y"
          />
        </div>

        {state === "error" && errorMsg && (
          <div
            role="alert"
            className="mt-5 rounded-2xl bg-[#ff3b30]/8 p-4 text-[14px] leading-[1.5] tracking-[-0.014em] text-[#c8261d]"
          >
            {errorMsg}
          </div>
        )}

        <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] tracking-[-0.01em] text-[color:var(--text-secondary)]">
            {submitted
              ? "Thanks. We respond within 24 hours."
              : "We’ll never share your contact info."}
          </p>
          {submitted ? (
            <Pill
              variant="primary"
              type="button"
              className="cursor-default opacity-80"
              ariaLabel="Sent"
            >
              <span className="inline-flex items-center gap-1.5">
                Sent
                <Check className="h-[14px] w-[14px]" strokeWidth={1.75} aria-hidden="true" />
              </span>
            </Pill>
          ) : (
            <Pill
              variant="primary"
              type="submit"
              ariaLabel={submitting ? "Sending" : "Send message"}
              className={submitting ? "opacity-70" : undefined}
            >
              <span className="inline-flex items-center gap-1.5">
                {submitting ? "Sending…" : "Send message"}
                <ChevronRight className="h-[14px] w-[14px]" strokeWidth={1.75} aria-hidden="true" />
              </span>
            </Pill>
          )}
        </div>
      </form>
    </Reveal>
  );
}

export default ContactForm;

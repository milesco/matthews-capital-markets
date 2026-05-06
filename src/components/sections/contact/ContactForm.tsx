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
  "block text-[12px] uppercase tracking-[0.01em] text-[#86868b] mb-2";

export function ContactForm() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [topic, setTopic] = React.useState<Topic>("");
  const [message, setMessage] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = `Hotel Team inquiry — ${topic}`;
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
    const href = `mailto:hotelteam@matthews.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    window.location.href = href;
  };

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

        <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] tracking-[-0.01em] text-[color:var(--text-secondary)]">
            We&rsquo;ll never share your contact info.
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
            <Pill variant="primary" type="submit" ariaLabel="Send message">
              <span className="inline-flex items-center gap-1.5">
                Send message
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

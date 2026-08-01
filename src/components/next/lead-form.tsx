"use client";

import { useState } from "react";
import type { QuotePageContent } from "../../lib/wordpress/types";

export function LeadForm({
  fields,
  endpoint = "/api/rfq",
  submitLabel = "Submit requirement",
}: {
  fields: QuotePageContent["fields"];
  endpoint?: string;
  submitLabel?: string;
}) {
  const [status, setStatus] = useState<string>("");
  const [fallbackHref, setFallbackHref] = useState<string>("");
  const [busy, setBusy] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setStatus("");
    setFallbackHref("");
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        message?: string;
        error?: string;
        fallbackUrl?: string;
      };
      setStatus(
        result.message ??
          result.error ??
          (response.ok ? "Your requirement has been received." : "We could not submit this form."),
      );
      setFallbackHref(result.fallbackUrl ?? "");
      if (response.ok) event.currentTarget.reset();
    } catch {
      setStatus("The form could not connect. Use the email draft or WhatsApp +92-334-0007744.");
      setFallbackHref(
        endpoint === "/api/rfq"
          ? "mailto:info@thorneberry.com.pk?subject=Thorneberry%20RFQ%20request"
          : "mailto:info@thorneberry.com.pk?subject=Thorneberry%20healthcare%20inquiry",
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <form
      onSubmit={submit}
      className="space-y-4 rounded-[28px] border border-white/10 bg-white/[0.045] p-6 md:p-8"
    >
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((field) =>
          field.type === "textarea" ? (
            <label key={field.name} className="sm:col-span-2">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                {field.label}
                {field.required ? " *" : ""}
              </span>
              <textarea
                name={field.name}
                required={field.required}
                rows={5}
                className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-[color:var(--teal)]"
                placeholder={field.label}
              />
            </label>
          ) : field.type === "select" ? (
            <label key={field.name}>
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                {field.label}
                {field.required ? " *" : ""}
              </span>
              <select
                name={field.name}
                required={field.required}
                defaultValue=""
                className="w-full rounded-xl border border-white/10 bg-[color:var(--navy)] px-4 py-3 text-sm text-white outline-none focus:border-[color:var(--teal)]"
              >
                <option value="" disabled>
                  Select one
                </option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          ) : (
            <label key={field.name}>
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                {field.label}
                {field.required ? " *" : ""}
              </span>
              <input
                name={field.name}
                type={field.type}
                required={field.required}
                className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-[color:var(--teal)]"
                placeholder={field.label}
              />
            </label>
          ),
        )}
      </div>
      <button
        type="submit"
        disabled={busy}
        className="premium-button inline-flex w-full items-center justify-center rounded-full brand-gradient px-5 py-3.5 text-sm font-semibold text-[color:var(--navy-deep)] disabled:cursor-wait disabled:opacity-70"
      >
        {busy ? "Sending..." : submitLabel}
      </button>
      <p role="status" aria-live="polite" className="min-h-5 text-center text-xs text-white/55">
        {status}
        {fallbackHref ? (
          <a className="ml-2 font-semibold text-[color:var(--teal)] underline" href={fallbackHref}>
            Open email draft
          </a>
        ) : null}
      </p>
    </form>
  );
}

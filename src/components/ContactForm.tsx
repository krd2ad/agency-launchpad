import { useState, type FormEvent } from "react";

const EMAIL = "lanternhilladvisory@gmail.com";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const organization = String(data.get("organization") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = `Inquiry from ${name || "website visitor"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Organization: ${organization}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-md border border-border bg-card p-8">
        <p className="font-serif text-lg text-foreground">
          Thank you. Your message has been received, and Lantern Hill Advisory
          will follow up shortly.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          If your email client did not open, please write us directly at{" "}
          <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">
            {EMAIL}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <Field id="name" label="Name" required />
      <Field id="email" label="Email" type="email" required />
      <Field id="organization" label="Organization" />
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-medium uppercase tracking-widest text-muted-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="mt-2 block w-full rounded-md border border-input bg-background px-4 py-3 text-[15px] text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-accent"
      >
        Send Message
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-medium uppercase tracking-widest text-muted-foreground"
      >
        {label}
        {required && <span aria-hidden> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="mt-2 block w-full rounded-md border border-input bg-background px-4 py-3 text-[15px] text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      />
    </div>
  );
}

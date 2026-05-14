import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lantern Hill Advisory LLC" },
      {
        name: "description",
        content:
          "Reach out to Lantern Hill Advisory for consulting inquiries, project scoping, or an introductory conversation.",
      },
      { property: "og:title", content: "Contact — Lantern Hill Advisory LLC" },
      {
        property: "og:description",
        content:
          "Get in touch with Lantern Hill Advisory for consulting inquiries and project scoping.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-widest text-primary">
              Contact
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-[1.15] text-foreground md:text-5xl">
              Start a Conversation
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              For consulting inquiries, project scoping, or an introductory
              conversation, reach out using the form below.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Or write us directly at{" "}
              <a
                href="mailto:sales@lanternhilladvisory.com"
                className="text-primary hover:underline"
              >
                sales@lanternhilladvisory.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-2xl px-6 py-16 md:py-20">
          <ContactForm />
        </div>
      </section>
    </SiteLayout>
  );
}

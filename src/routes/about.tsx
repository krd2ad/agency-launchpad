import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Lantern Hill Advisory LLC" },
      {
        name: "description",
        content:
          "Lantern Hill Advisory is an independent advisory practice focused on helping organizations make practical progress with AI, technology, and operational transformation.",
      },
      { property: "og:title", content: "About — Lantern Hill Advisory LLC" },
      {
        property: "og:description",
        content:
          "Independent advisory practice helping organizations make practical progress with AI, technology, and operations.",
      },
    ],
  }),
  component: AboutPage,
});

const helpAreas = [
  {
    title: "Clarify the Opportunity",
    body: "Identify where AI, automation, or improved systems can create meaningful value and where simpler process improvements may be the better answer.",
  },
  {
    title: "Structure the Work",
    body: "Translate broad goals into project phases, decision points, stakeholder responsibilities, and realistic implementation steps.",
  },
  {
    title: "Support Adoption",
    body: "Help teams prepare for change through training, documentation, acceptable use guidance, vendor selection, and workflow design.",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-widest text-primary">
              About
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-[1.15] text-foreground md:text-5xl">
              About Lantern Hill Advisory
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Lantern Hill Advisory is an independent advisory practice focused
              on helping organizations make practical progress with AI,
              technology, and operational transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Firm description */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-24">
          <p className="text-lg leading-relaxed text-foreground/85">
            Lantern Hill Advisory works with small and mid-sized organizations
            that want to improve how they operate, adopt emerging technology
            responsibly, and turn strategic goals into usable systems. The firm
            is built around a practical belief: better tools only create value
            when they are paired with clear workflows, thoughtful governance,
            and teams that know how to use them.
          </p>
        </div>
      </section>

      {/* What We Help With */}
      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
          <h2 className="font-serif text-3xl text-foreground md:text-4xl">
            What We Help With
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {helpAreas.map((a) => (
              <article
                key={a.title}
                className="rounded-md border border-border bg-card p-8 transition-colors hover:border-primary/50"
              >
                <h3 className="font-serif text-xl text-foreground">{a.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                  {a.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <p className="text-xs font-medium uppercase tracking-widest text-primary">
            Principal
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground md:text-4xl">
            Led by practical implementation experience.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Lantern Hill Advisory was founded by Kiernan DiMeglio, a project
            manager and operator with experience leading complex healthcare
            technology implementations, executive stakeholder relationships,
            and cross-functional workflow design. The practice brings a
            pragmatic implementation lens to AI and technology advisory work,
            with an emphasis on clarity, adoption, and measurable operational
            progress.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}

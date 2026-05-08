import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { FocusCard } from "@/components/FocusCard";
import mark from "@/assets/lantern-mark.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lantern Hill Advisory LLC | AI, Technology, and Operations Advisory" },
      {
        name: "description",
        content:
          "Practical AI and technology advisory for organizations ready to make progress. Lantern Hill Advisory turns broad goals into clear priorities and implementation plans.",
      },
      { property: "og:title", content: "Lantern Hill Advisory LLC" },
      {
        property: "og:description",
        content:
          "Practical AI and technology advisory for organizations ready to make progress.",
      },
    ],
  }),
  component: HomePage,
});

const focusAreas = [
  {
    title: "AI Readiness & Strategy",
    body: "Understand where AI can be useful, where it is not yet ready, and what foundational decisions need to be made before implementation.",
  },
  {
    title: "Workflow & Process Design",
    body: "Map current processes, identify bottlenecks, and design more reliable operating workflows supported by practical technology.",
  },
  {
    title: "Implementation Planning",
    body: "Turn ideas into sequenced project plans, vendor decisions, training approaches, governance standards, and rollout steps.",
  },
];

const principles = [
  "Start with the workflow",
  "Keep the first version simple",
  "Build for adoption, not novelty",
];

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-20 md:grid-cols-[1fr_auto] md:items-center md:py-32">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl leading-[1.15] text-foreground md:text-5xl lg:text-[3.25rem]">
              Practical AI and technology advisory for organizations ready to
              make progress.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Lantern Hill Advisory helps teams turn broad technology goals into
              clear priorities, usable workflows, and implementation plans that
              can actually be executed.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-accent"
              >
                Start a Conversation
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium tracking-wide text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src={mark}
              alt="Lantern Hill Advisory lantern mark"
              className="h-56 w-auto opacity-90"
            />
          </div>
        </div>
      </section>

      {/* Positioning */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">
            Advisory for the messy middle between strategy and implementation.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Many organizations know they should be doing more with AI,
            automation, and modern technology, but struggle to translate that
            ambition into practical next steps. Lantern Hill Advisory works with
            leaders to clarify priorities, assess current workflows, identify
            realistic use cases, and build implementation plans that fit the way
            their teams actually operate.
          </p>
        </div>
      </Section>

      {/* Focus Areas */}
      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-medium uppercase tracking-widest text-primary">
              What we do
            </p>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">
              Focus Areas
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {focusAreas.map((f) => (
              <FocusCard key={f.title} title={f.title} body={f.body} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <Section>
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-primary">
              Philosophy
            </p>
            <h2 className="mt-2 font-serif text-3xl leading-tight text-foreground md:text-4xl">
              Clear thinking before complex tools.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Technology projects succeed when they are grounded in real
              workflows, clear ownership, and disciplined implementation.
              Lantern Hill Advisory focuses on building the foundation first:
              the process, the documentation, the operating model, and the
              change management required for new tools to create lasting value.
            </p>
          </div>
          <ul className="space-y-4 md:pt-12">
            {principles.map((p, i) => (
              <li
                key={p}
                className="flex items-start gap-4 border-l-2 border-primary/60 pl-5"
              >
                <span className="font-serif text-sm text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-lg text-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Closing CTA */}
      <section className="border-t border-border bg-accent text-accent-foreground">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-24">
          <h2 className="font-serif text-3xl leading-tight md:text-4xl">
            Have an AI or technology initiative that needs structure?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-accent-foreground/80">
            Lantern Hill Advisory can help clarify the opportunity, define the
            first phase, and create a practical path forward.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-background px-6 py-3 text-sm font-medium tracking-wide text-foreground transition-colors hover:bg-muted"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">{children}</div>
    </section>
  );
}

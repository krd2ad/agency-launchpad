import { Link } from "@tanstack/react-router";
import mark from "@/assets/lantern-mark.svg";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="flex items-start gap-4">
            <img
              src={mark}
              alt="Lantern Hill Advisory lantern mark"
              className="h-12 w-auto"
            />
            <div>
              <p className="font-serif text-base text-foreground">
                Lantern Hill Advisory LLC
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                AI, technology, and operations advisory
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Contact
            </p>
            <a
              href="mailto:lanternhilladvisory@gmail.com"
              className="mt-3 inline-block text-sm text-foreground/85 hover:text-primary"
            >
              lanternhilladvisory@gmail.com
            </a>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Navigate
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link to="/" className="text-foreground/85 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/85 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 Lantern Hill Advisory LLC. All rights reserved.</p>
          <p className="italic">Built for practical progress.</p>
        </div>
      </div>
    </footer>
  );
}

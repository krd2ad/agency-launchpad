import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/lantern-header.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 md:h-20">
        <Link
          to="/"
          className="flex items-center"
          aria-label="Lantern Hill Advisory LLC — home"
          onClick={() => setOpen(false)}
        >
          <img
            src={logo}
            alt="Lantern Hill Advisory LLC"
            className="h-9 w-auto md:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm tracking-wide text-foreground/80 transition-colors hover:text-primary"
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-primary font-medium" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-border bg-background md:hidden"
          aria-label="Primary mobile"
        >
          <ul className="mx-auto flex max-w-[1200px] flex-col px-6 py-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block py-3 text-base text-foreground/85 hover:text-primary"
                  activeOptions={{ exact: true }}
                  activeProps={{ className: "text-primary font-medium" }}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

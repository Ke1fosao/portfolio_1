"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

type IconName = "home" | "about" | "work" | "blog" | "gallery";

type NavigationItem = {
  href: string;
  label: string;
  icon: IconName;
  iconOnly?: boolean;
};

const navigationItems: NavigationItem[] = [
  { href: "/", label: "Home", icon: "home", iconOnly: true },
  { href: "/about", label: "About", icon: "about" },
  { href: "/work", label: "Work", icon: "work" }
];

const comingSoonItems: Array<Omit<NavigationItem, "href">> = [
  { label: "Blog", icon: "blog" },
  { label: "Gallery", icon: "gallery" }
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavIcon({ name }: { name: IconName }) {
  const commonProps = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true
  };

  if (name === "home") {
    return (
      <svg {...commonProps}>
        <path d="m3 10 9-7 9 7" />
        <path d="M5 9.5V21h14V9.5" />
        <path d="M9 21v-7h6v7" />
      </svg>
    );
  }

  if (name === "about") {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="9" r="2.2" />
        <path d="M8 17.5c.8-2.1 2.1-3.1 4-3.1s3.2 1 4 3.1" />
      </svg>
    );
  }

  if (name === "work") {
    return (
      <svg {...commonProps}>
        <rect x="4" y="4" width="16" height="16" rx="1" />
        <path d="M4 10h16M10 4v16" />
      </svg>
    );
  }

  if (name === "blog") {
    return (
      <svg {...commonProps}>
        <path d="M6 3.5h11.5V20H6a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2Z" />
        <path d="M8 8h6.5M8 12h6.5M8 16h4" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <circle cx="8" cy="10" r="1.4" />
      <path d="m4 17 5-4 3 2 3-3 5 5" />
    </svg>
  );
}

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="main-nav" aria-label="Головна навігація">
      <div className="nav-links">
        {navigationItems.map((item) => {
          const active = isActivePath(pathname, item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-item${item.iconOnly ? " nav-item-icon-only" : ""}${active ? " nav-item-active" : ""}`}
              aria-current={active ? "page" : undefined}
              aria-label={item.iconOnly ? item.label : undefined}
              style={{ flex: "0 0 auto", textAlign: "left" }}
            >
              <NavIcon name={item.icon} />
              <span className={item.iconOnly ? "visually-hidden" : "nav-label"}>{item.label}</span>
            </Link>
          );
        })}

        {comingSoonItems.map((item) => (
          <span
            key={item.label}
            className="nav-item nav-item-disabled"
            aria-disabled="true"
            aria-label={`${item.label} — скоро`}
            data-tooltip="Скоро"
          >
            <NavIcon name={item.icon} />
            <span className="nav-label">{item.label}</span>
          </span>
        ))}
      </div>

      <span className="nav-divider" aria-hidden="true" />
      <ThemeToggle />
    </nav>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

type IconName = "home" | "about" | "work" | "blog" | "gallery";

type NavigationItem = {
  href: string;
  label: string;
  icon: IconName;
};

const navigationItems: NavigationItem[] = [
  { href: "/", label: "Home", icon: "home" },
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
    width: 17,
    height: 17,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
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
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="9" r="2.4" />
        <path d="M7.8 18c.8-2.4 2.2-3.6 4.2-3.6s3.4 1.2 4.2 3.6" />
      </svg>
    );
  }

  if (name === "work") {
    return (
      <svg {...commonProps}>
        <rect x="4" y="4" width="16" height="16" rx="1.5" />
        <path d="M4 10h16M10 4v16" />
      </svg>
    );
  }

  if (name === "blog") {
    return (
      <svg {...commonProps}>
        <path d="M5 4h11a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2V4Z" />
        <path d="M8 8h7M8 12h7M8 16h4" />
        <path d="M18 8h2v12h-2" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <circle cx="8" cy="10" r="1.5" />
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
              className={`nav-item${active ? " nav-item-active" : ""}`}
              aria-current={active ? "page" : undefined}
            >
              <NavIcon name={item.icon} />
              <span className="nav-label">{item.label}</span>
            </Link>
          );
        })}

        {comingSoonItems.map((item) => (
          <span
            key={item.label}
            className="nav-item nav-item-disabled"
            aria-disabled="true"
            title={`${item.label} — скоро`}
          >
            <NavIcon name={item.icon} />
            <span className="nav-label">{item.label}</span>
            <span className="nav-soon">Скоро</span>
          </span>
        ))}
      </div>

      <span className="nav-divider" aria-hidden="true" />
      <ThemeToggle />
    </nav>
  );
}

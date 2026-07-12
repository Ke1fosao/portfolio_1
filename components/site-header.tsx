import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/", label: "Головна" },
  { href: "/work", label: "Роботи" },
  { href: "/about", label: "Про мене" }
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="На головну">
          <span className="brand-mark">DK</span>
          <span className="brand-name">Дмитро Ковтунович</span>
        </Link>

        <nav className="main-nav" aria-label="Головна навігація">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-contact" href="https://t.me/Ke1fosao" target="_blank" rel="noreferrer">Зв’язатися</a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

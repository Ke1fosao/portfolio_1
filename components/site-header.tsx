import Link from "next/link";
import { LocalTime } from "@/components/local-time";
import { SiteNav } from "@/components/site-nav";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="На головну">
          <span className="brand-name">Дмитро Ковтунович</span>
        </Link>

        <SiteNav />
        <LocalTime />
      </div>
    </header>
  );
}

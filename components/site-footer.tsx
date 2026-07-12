import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>Дмитро Ковтунович</strong>
        <p>Full-stack developer · Рівне, Україна</p>
      </div>
      <div className="footer-links">
        <a href="mailto:dima.kovtunovych@gmail.com">Email</a>
        <a href="https://t.me/Ke1fosao" target="_blank" rel="noreferrer">Telegram</a>
        <a href="https://github.com/Ke1fosao" target="_blank" rel="noreferrer">GitHub</a>
        <Link href="/work">Роботи</Link>
      </div>
      <span className="footer-copy">© {new Date().getFullYear()}</span>
    </footer>
  );
}

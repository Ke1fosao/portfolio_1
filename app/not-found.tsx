import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-shell inner-page not-found">
      <span>404</span>
      <h1>Сторінку не знайдено.</h1>
      <p>Можливо, посилання застаріло або сторінку було переміщено.</p>
      <Link className="button button-primary" href="/">На головну</Link>
    </div>
  );
}

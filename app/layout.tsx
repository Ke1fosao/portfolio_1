import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";
import "./header.css";
import "./header-refinements.css";
import "./digital-workshop.css";
import "./digital-workshop-hero-fit.css";
import "./about-story.css";
import "./about-portrait-hero.css";
import "./about-portrait-content.css";
import "./work-cinema.css";
import "./work-cinema-refinements.css";
import "./babyland-documentary.css";
import "./case-section-navigation.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const themeInitializationScript = `
(function () {
  try {
    var storedTheme = window.localStorage.getItem("theme");
    var hasStoredTheme = storedTheme === "light" || storedTheme === "dark";
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = hasStoredTheme ? storedTheme : (prefersDark ? "dark" : "light");

    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch (error) {
    document.documentElement.dataset.theme = "light";
    document.documentElement.style.colorScheme = "light";
  }
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Дмитро Ковтунович — Full-stack developer",
    template: "%s — Дмитро Ковтунович"
  },
  description: "Портфоліо Дмитра Ковтуновича: сучасні сайти, вебсистеми, автоматизація бізнесу та інтеграція штучного інтелекту.",
  keywords: [
    "Дмитро Ковтунович",
    "full-stack developer",
    "розробка сайтів Рівне",
    "Next.js",
    "Django",
    "React",
    "автоматизація бізнесу"
  ],
  openGraph: {
    title: "Дмитро Ковтунович — Full-stack developer",
    description: "Сайти та цифрові продукти, які працюють на бізнес.",
    type: "website",
    locale: "uk_UA",
    url: siteUrl
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <script dangerouslySetInnerHTML={{ __html: themeInitializationScript }} />
      </head>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

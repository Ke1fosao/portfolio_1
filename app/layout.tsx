import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

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
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

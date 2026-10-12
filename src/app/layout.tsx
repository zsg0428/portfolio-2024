import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { profile, siteUrl } from "@/content/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const description =
  "Full stack AI product engineer in Toronto. Voice agents, retrieval agents and text to SQL in production, guided by evals.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.shortName}, ${profile.title}`,
  description,
  authors: [{ name: profile.name, url: siteUrl }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: siteUrl,
    title: `${profile.shortName}, ${profile.title}`,
    description,
    siteName: profile.shortName,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f6f3" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1524" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={bricolage.variable}>
      <body>{children}</body>
    </html>
  );
}

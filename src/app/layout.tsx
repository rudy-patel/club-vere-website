import type { Metadata, Viewport } from "next";
import {
  Barlow_Condensed,
  Cormorant_Garamond,
  DM_Sans,
  Manrope,
} from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-manrope",
});

const editorial = Cormorant_Garamond({
  display: "swap",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-editorial",
  weight: ["400", "500", "600"],
});

const condensed = Barlow_Condensed({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-condensed",
  weight: ["500", "600", "700", "800"],
});

const pop = DM_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-pop",
  weight: ["400", "500", "600", "700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://club-vere-website.vercel.app");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Club Vere | Community events in Vancouver",
  description:
    "Thoughtful Vancouver events for moving, making, lingering, and meeting people who get it.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Club Vere | Meet your new plans",
    description:
      "The antidote to no fun city. Discover community events in Vancouver.",
    images: [
      {
        alt: "Friends gathering in a Vancouver park",
        height: 1024,
        url: "/images/club-vere-park.webp",
        width: 1536,
      },
    ],
    locale: "en_CA",
    siteName: "Club Vere",
    type: "website",
    url: "/",
  },
  robots: { follow: true, index: true },
  twitter: {
    card: "summary_large_image",
    title: "Club Vere | Meet your new plans",
    description: "Community events in Vancouver, made with care.",
    images: ["/images/club-vere-park.webp"],
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { color: "#eef2e5", media: "(prefers-color-scheme: light)" },
    { color: "#101811", media: "(prefers-color-scheme: dark)" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${editorial.variable} ${condensed.variable} ${pop.variable}`}
      >
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

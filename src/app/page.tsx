import { DesignShell } from "@/components/design-shell";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://club-vere-website.vercel.app");

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  areaServed: {
    "@type": "City",
    name: "Vancouver",
  },
  description: "Community events in Vancouver, made with care.",
  name: "Club Vere",
  sameAs: ["https://www.instagram.com/club.vere/"],
  url: siteUrl,
};

export default function Home() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        type="application/ld+json"
      />
      <DesignShell />
    </>
  );
}

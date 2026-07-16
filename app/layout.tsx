import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  "@id": "https://www.10pillarssolutions.com/#organization",
  name: "10 Pillars Solutions",
  url: "https://www.10pillarssolutions.com",
  logo: "https://www.10pillarssolutions.com/logo.png",
  image: "https://www.10pillarssolutions.com/logo.png",
  description:
    "Human-led staffing and workforce solutions firm delivering qualified IT, STEM, finance, construction management, and sales talent across California. CA Certified Small Business (SB #2038866).",
  founder: { "@type": "Person", name: "Michael Byrne", jobTitle: "Founder" },
  address: {
    "@type": "PostalAddress",
    postOfficeBoxNumber: "122",
    addressLocality: "Carmichael",
    addressRegion: "CA",
    postalCode: "95608",
    addressCountry: "US",
  },
  telephone: "+1-916-420-7006",
  email: "michael@10pillarssolutions.com",
  areaServed: { "@type": "State", name: "California" },
  knowsAbout: [
    "IT staffing",
    "STEM staffing",
    "contract staffing",
    "direct hire recruiting",
    "contract-to-hire",
    "accounting and finance staffing",
    "construction management staffing",
    "sales recruiting",
    "workforce solutions",
    "talent sourcing",
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "certification",
    name: "California Certified Small Business",
    recognizedBy: {
      "@type": "GovernmentOrganization",
      name: "California Department of General Services",
    },
    identifier: "SB #2038866",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.10pillarssolutions.com"),
  title: "10 Pillars Solutions — Human-Led Staffing & Workforce Solutions",
  description:
    "10 Pillars Solutions combines broad sourcing reach with expert human recruiters to deliver qualified IT, STEM, finance, and professional talent — faster and without sacrificing quality.",
  keywords:
    "IT staffing, STEM recruiting, talent solutions, Sacramento staffing, contract staffing, direct hire, California small business, public sector staffing",
  openGraph: {
    title: "10 Pillars Solutions",
    description:
      "Modern talent delivery built on expertise and integrity. 25+ years of workforce experience.",
    siteName: "10 Pillars Solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ background: "#080814", minHeight: "100vh" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
        />
        <Navbar />
        <main style={{ paddingTop: 68 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

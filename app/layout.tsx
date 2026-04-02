import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
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
        <Navbar />
        <main style={{ paddingTop: 68 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

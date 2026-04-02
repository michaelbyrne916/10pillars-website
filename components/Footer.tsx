import Link from "next/link";
import { CONTACT_INFO } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#040410",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "64px 1.5rem 32px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 48,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 8,
                  background: "linear-gradient(135deg, #63B3ED, #3182CE)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: 13,
                  color: "#fff",
                }}
              >
                10P
              </div>
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#F7FAFC",
                }}
              >
                10 Pillars <span style={{ color: "#63B3ED" }}>Solutions</span>
              </span>
            </div>
            <p style={{ color: "#4A5568", fontSize: 13, lineHeight: 1.7, maxWidth: 240 }}>
              AI-enabled, human-led staffing and workforce solutions for IT, STEM, and
              professional talent.
            </p>
          </div>

          {/* Company */}
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#718096",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Company
            </div>
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "10 Pillars", href: "/pillars" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  display: "block",
                  color: "#4A5568",
                  fontSize: 14,
                  padding: "4px 0",
                  textDecoration: "none",
                  textTransform: "capitalize",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Work With Us */}
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#718096",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Work With Us
            </div>
            {[
              { label: "Employers", href: "/employers" },
              { label: "Candidates", href: "/candidates" },
              { label: "Jobs", href: "/jobs" },
              { label: "Submit Resume", href: "/resume" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  display: "block",
                  color: "#4A5568",
                  fontSize: 14,
                  padding: "4px 0",
                  textDecoration: "none",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#718096",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Contact
            </div>
            <div style={{ color: "#4A5568", fontSize: 13, lineHeight: 1.8 }}>
              <div>{CONTACT_INFO.email}</div>
              <div>{CONTACT_INFO.phone}</div>
              <div>{CONTACT_INFO.location}</div>
              <div style={{ marginTop: 16 }}>
                <Link
                  href="/contact"
                  style={{
                    background: "linear-gradient(135deg, #3182CE, #63B3ED)",
                    color: "#fff",
                    padding: "9px 18px",
                    borderRadius: 8,
                    fontSize: 13,
                    fontWeight: 600,
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ fontSize: 12, color: "#2D3748" }}>
            © 2025 10 Pillars Solutions. All rights reserved.
          </div>
          <div style={{ fontSize: 12, color: "#2D3748" }}>
            AI-Enabled · Human-Led · 25+ Years Experience
          </div>
        </div>
      </div>
    </footer>
  );
}

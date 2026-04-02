import Reveal from "@/components/Reveal";
import BtnLink from "@/components/BtnLink";
import Section from "@/components/Section";
import SectionTag from "@/components/SectionTag";
import { SERVICES } from "@/lib/data";

export const metadata = {
  title: "Services — 10 Pillars Solutions",
  description: "IT staffing, contract, direct hire, and workforce strategy solutions for technical, professional, and operational roles.",
};

export default function ServicesPage() {
  return (
    <div>
      <div style={{ padding: "120px 1.5rem 80px", background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(49,130,206,0.12) 0%, transparent 70%)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <Reveal><SectionTag>Our Services</SectionTag></Reveal>
          <Reveal delay={0.1}>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.4rem, 6vw, 4rem)", fontWeight: 800, color: "#F7FAFC", lineHeight: 1.15, marginBottom: 24 }}>
              Premium Workforce Solutions<br />Across Every Engagement Model
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ color: "#A0AEC0", fontSize: 17, lineHeight: 1.8 }}>
              From contract staffing to direct hire and workforce strategy, every 10 Pillars service is built on the same foundation: speed, quality, and human accountability.
            </p>
          </Reveal>
        </div>
      </div>

      {SERVICES.map((cat, ci) => (
        <div
          key={ci}
          style={{
            padding: "72px 1.5rem",
            background: ci % 2 === 1 ? "rgba(255,255,255,0.015)" : "transparent",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <Reveal><SectionTag>{cat.category}</SectionTag></Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, marginTop: 32 }}>
              {cat.items.map((s, si) => (
                <Reveal key={si} delay={si * 0.1}>
                  <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 18, padding: "32px 28px", height: "100%", display: "flex", flexDirection: "column" }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", color: "#F7FAFC", marginBottom: 12 }}>{s.title}</h3>
                    <p style={{ color: "#A0AEC0", fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
                      <strong style={{ color: "#CBD5E0" }}>What it is:</strong> {s.what}
                    </p>
                    <p style={{ color: "#A0AEC0", fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
                      <strong style={{ color: "#CBD5E0" }}>Who it's for:</strong> {s.who}
                    </p>
                    <ul style={{ listStyle: "none", marginBottom: 24, flex: 1 }}>
                      {s.benefits.map((b, bi) => (
                        <li key={bi} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 6, fontSize: 13, color: "#718096" }}>
                          <span style={{ color: "#63B3ED", marginTop: 2 }}>✓</span>{b}
                        </li>
                      ))}
                    </ul>
                    <BtnLink href="/contact" variant="ghost" style={{ textAlign: "center", display: "block" }}>Learn More →</BtnLink>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      ))}

      <Section>
        <Reveal>
          <div style={{ background: "linear-gradient(135deg, rgba(49,130,206,0.15), rgba(49,130,206,0.04))", border: "1px solid rgba(99,179,237,0.2)", borderRadius: 24, padding: "56px 48px", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 4vw, 2.3rem)", color: "#F7FAFC", marginBottom: 16 }}>Not Sure Which Service Fits?</h2>
            <p style={{ color: "#A0AEC0", fontSize: 15, lineHeight: 1.7, maxWidth: 500, margin: "0 auto 32px" }}>Our team will assess your specific needs and recommend the right engagement model. No pressure. Just insight.</p>
            <BtnLink href="/contact">Talk to Our Team →</BtnLink>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}

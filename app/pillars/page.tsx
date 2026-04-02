import Reveal from "@/components/Reveal";
import BtnLink from "@/components/BtnLink";
import Section from "@/components/Section";
import SectionTag from "@/components/SectionTag";
import { PILLARS } from "@/lib/data";

export const metadata = {
  title: "The 10 Pillars — 10 Pillars Solutions",
  description: "Our proprietary staffing framework: 10 principles that guide every search, placement, and partnership.",
};

export default function PillarsPage() {
  return (
    <div>
      <div style={{ padding: "120px 1.5rem 80px", background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(49,130,206,0.12) 0%, transparent 70%)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <Reveal><SectionTag>Our Framework</SectionTag></Reveal>
          <Reveal delay={0.1}>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.4rem, 6vw, 4rem)", fontWeight: 800, color: "#F7FAFC", lineHeight: 1.15, marginBottom: 24 }}>
              The 10 Pillars of<br />Exceptional Staffing
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ color: "#A0AEC0", fontSize: 17, lineHeight: 1.8 }}>
              A proprietary framework that has guided every search, every placement, and every partnership since our founding. Not a checklist — a standard.
            </p>
          </Reveal>
        </div>
      </div>

      <Section>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {PILLARS.map((p, i) => (
            <Reveal key={i} delay={0.05}>
              <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 18, padding: "32px 36px", display: "grid", gridTemplateColumns: "48px 1fr", gap: 28, alignItems: "start" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: "#3182CE", letterSpacing: "0.1em", fontFamily: "'Syne', sans-serif", paddingTop: 4 }}>{p.n}</div>
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", color: "#F7FAFC", marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ color: "#A0AEC0", fontSize: 15, lineHeight: 1.75 }}>{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section style={{ paddingTop: 0 }}>
        <Reveal>
          <div style={{ background: "linear-gradient(135deg, rgba(49,130,206,0.15), rgba(49,130,206,0.04))", border: "1px solid rgba(99,179,237,0.2)", borderRadius: 24, padding: "56px 48px", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 4vw, 2.3rem)", color: "#F7FAFC", marginBottom: 16 }}>See the Framework in Action</h2>
            <p style={{ color: "#A0AEC0", fontSize: 15, maxWidth: 500, margin: "0 auto 32px", lineHeight: 1.7 }}>Every 10 Pillars engagement applies this framework from the first discovery call to final placement. Let's show you what it looks like for your role.</p>
            <BtnLink href="/contact">Start a Conversation →</BtnLink>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}

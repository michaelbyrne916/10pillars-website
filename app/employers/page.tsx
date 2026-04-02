import Reveal from "@/components/Reveal";
import BtnLink from "@/components/BtnLink";
import Section from "@/components/Section";
import SectionTag from "@/components/SectionTag";
import H2 from "@/components/H2";

export const metadata = {
  title: "For Employers — 10 Pillars Solutions",
  description: "IT, STEM, and professional talent sourcing with human vetting. Get qualified candidates faster.",
};

export default function EmployersPage() {
  return (
    <div>
      <div style={{ padding: "120px 1.5rem 80px", background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(49,130,206,0.15) 0%, transparent 70%)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <Reveal><SectionTag>For Employers</SectionTag></Reveal>
          <Reveal delay={0.1}>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.4rem, 6vw, 4rem)", fontWeight: 800, color: "#F7FAFC", lineHeight: 1.15, marginBottom: 24 }}>
              You Don't Need More Résumés.<br />You Need Qualified People.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ color: "#A0AEC0", fontSize: 17, lineHeight: 1.8, marginBottom: 36 }}>
              Our team combines broad sourcing reach with rigorous human vetting. The result is a shorter list of better candidates — delivered faster, with complete documentation and full accountability.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <BtnLink href="/contact" style={{ padding: "15px 36px", fontSize: 15 }}>Request Talent →</BtnLink>
          </Reveal>
        </div>
      </div>

      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64 }}>
          <div>
            <Reveal><H2>Why Companies<br />Partner with Us</H2></Reveal>
            {[
              "Shorter time-to-submit without sacrificing vetting quality",
              "Candidates reviewed and qualified by an experienced human recruiter — not just algorithmic matching",
              "Structured screening and technical coordination included",
              "Complete submission documentation with recruiter notes",
              "Transparent pipeline visibility throughout the search",
              "Flexible engagement models: contract, contract-to-hire, and direct hire",
              "Specialized expertise in IT, STEM, and professional staffing",
              "A team that communicates proactively — not just when they have something to send",
            ].map((b, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div style={{ display: "flex", gap: 12, marginBottom: 14 }}>
                  <span style={{ color: "#63B3ED", fontSize: 16, marginTop: 2 }}>✓</span>
                  <span style={{ color: "#A0AEC0", fontSize: 15, lineHeight: 1.65 }}>{b}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <div>
            <Reveal delay={0.1}><SectionTag>Our Vetting Process</SectionTag></Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { step: "01", title: "Multi-Channel Sourcing", desc: "Our sourcing process identifies qualified candidates across platforms, databases, and passive networks — delivering broader reach and faster results." },
                { step: "02", title: "Human Review & Screening", desc: "Every candidate is reviewed by a recruiter who reads between the lines — work history, trajectory, communication, and role alignment." },
                { step: "03", title: "Technical Screening Coordination", desc: "For IT and STEM roles, we coordinate structured technical screening before submission to confirm skill alignment." },
                { step: "04", title: "Behavioral Assessment", desc: "Competency and behavioral evaluation methods provide hiring managers with insight beyond the résumé." },
                { step: "05", title: "Quality Assurance & Submission", desc: "Final human QA sign-off before submission. You receive documented, qualified candidates — not a stack of profiles." },
              ].map((s, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "20px 18px", display: "flex", gap: 16 }}>
                    <div style={{ fontSize: 12, fontWeight: 800, color: "#3182CE", fontFamily: "'Syne', sans-serif", minWidth: 24, paddingTop: 2 }}>{s.step}</div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14, color: "#E2E8F0", marginBottom: 4 }}>{s.title}</div>
                      <div style={{ fontSize: 13, color: "#718096", lineHeight: 1.6 }}>{s.desc}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <div style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "96px 1.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal><H2 style={{ textAlign: "center" }}>Talent Categories We Support</H2></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14, marginTop: 40 }}>
            {[
              "Software Engineering", "Cloud & DevOps", "Data Science & Analytics",
              "Cybersecurity", "Project & Program Management", "Business Analysis",
              "IT Infrastructure", "Quality Assurance", "UX/UI Design",
              "Finance / Accounting", "Construction Management", "Sales Talent",
              "STEM Research", "Professional & Administrative",
            ].map((t, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div style={{ background: "rgba(99,179,237,0.06)", border: "1px solid rgba(99,179,237,0.15)", borderRadius: 10, padding: "12px 16px", textAlign: "center", fontSize: 13, color: "#A0C4F0", fontWeight: 500 }}>{t}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Section>
        <Reveal>
          <div style={{ background: "linear-gradient(135deg, rgba(49,130,206,0.15), rgba(49,130,206,0.04))", border: "1px solid rgba(99,179,237,0.2)", borderRadius: 24, padding: "56px 48px", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 4vw, 2.3rem)", color: "#F7FAFC", marginBottom: 16 }}>Ready to Build a Better<br />Hiring Pipeline?</h2>
            <p style={{ color: "#A0AEC0", fontSize: 15, maxWidth: 500, margin: "0 auto 32px", lineHeight: 1.7 }}>Tell us about your open role. We'll respond within one business day with a strategy and an honest assessment of your market.</p>
            <BtnLink href="/contact" style={{ padding: "14px 32px", fontSize: 15 }}>Request Talent Today →</BtnLink>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}

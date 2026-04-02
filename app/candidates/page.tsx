import Reveal from "@/components/Reveal";
import BtnLink from "@/components/BtnLink";
import Section from "@/components/Section";
import SectionTag from "@/components/SectionTag";
import H2 from "@/components/H2";

export const metadata = {
  title: "For Candidates — 10 Pillars Solutions",
  description: "Work with recruiters who actually show up. Real guidance, real communication, real opportunities.",
};

export default function CandidatesPage() {
  return (
    <div>
      <div style={{ padding: "120px 1.5rem 80px", background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(72,187,120,0.1) 0%, transparent 70%)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <Reveal><SectionTag>For Candidates</SectionTag></Reveal>
          <Reveal delay={0.1}>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.4rem, 6vw, 4rem)", fontWeight: 800, color: "#F7FAFC", lineHeight: 1.15, marginBottom: 24 }}>
              A Staffing Partner<br />That Actually Shows Up
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ color: "#A0AEC0", fontSize: 17, lineHeight: 1.8, marginBottom: 36 }}>
              We know what it's like to submit your résumé into a void. We work differently. Real recruiter access, honest feedback, and genuine career guidance — not automated follow-ups and silence.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <BtnLink href="/resume" style={{ padding: "15px 32px", fontSize: 15 }}>Submit Your Resume →</BtnLink>
              <BtnLink href="/jobs" variant="outline" style={{ padding: "15px 32px", fontSize: 15 }}>View Open Jobs</BtnLink>
            </div>
          </Reveal>
        </div>
      </div>

      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48 }}>
          <div>
            <Reveal><H2>Why Candidates<br />Work With Us</H2></Reveal>
            <Reveal delay={0.1}>
              <p style={{ color: "#A0AEC0", lineHeight: 1.8, fontSize: 16, marginBottom: 20 }}>
                When you work with 10 Pillars Solutions, you're not a keyword match or a fill. You're a person making an important career decision — and we treat that accordingly.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p style={{ color: "#A0AEC0", lineHeight: 1.8, fontSize: 16, marginBottom: 32 }}>
                Our broad sourcing reach means we can surface the right roles faster. Every conversation, every submission, and every moment that matters is handled by a real human being who understands your field.
              </p>
            </Reveal>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { title: "Real Recruiter Relationships", desc: "You'll have a named recruiter who knows your background, understands your goals, and advocates for you." },
              { title: "Roles That Actually Fit", desc: "We don't submit you everywhere. We match you carefully to roles where you're a genuinely strong fit." },
              { title: "Honest, Timely Communication", desc: "We'll tell you where you stand — even when it's not what you hoped to hear. Respect means transparency." },
              { title: "Career Guidance, Not Just Placement", desc: "Our team provides real market perspective, résumé input, and interview prep — not just job forwards." },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "20px 18px" }}>
                  <div style={{ fontWeight: 600, fontSize: 14, color: "#E2E8F0", marginBottom: 5 }}>{c.title}</div>
                  <div style={{ fontSize: 13, color: "#718096", lineHeight: 1.6 }}>{c.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <div style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "96px 1.5rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <Reveal><H2 style={{ textAlign: "center" }}>What to Expect<br />When You Work With Us</H2></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginTop: 48 }}>
            {[
              { n: "01", title: "Initial Contact", desc: "A recruiter reviews your background and reaches out to learn more about your goals, preferences, and timeline." },
              { n: "02", title: "Profile & Role Matching", desc: "We discuss open roles and upcoming opportunities that genuinely match your skills and career direction." },
              { n: "03", title: "Submission & Preparation", desc: "With your approval, we submit your profile to qualified opportunities and prepare you for interviews." },
              { n: "04", title: "Ongoing Support", desc: "We stay with you through offers, negotiations, and onboarding — and maintain the relationship afterward." },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "28px 22px" }}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: "#68D391", marginBottom: 10, fontFamily: "'Syne', sans-serif" }}>{s.n}</div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: "#E2E8F0", marginBottom: 8 }}>{s.title}</div>
                  <div style={{ fontSize: 13, color: "#718096", lineHeight: 1.65 }}>{s.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Section>
        <Reveal>
          <div style={{ background: "linear-gradient(135deg, rgba(72,187,120,0.1), rgba(72,187,120,0.03))", border: "1px solid rgba(72,187,120,0.2)", borderRadius: 24, padding: "56px 48px", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 4vw, 2.3rem)", color: "#F7FAFC", marginBottom: 16 }}>Ready to Take the Next Step?</h2>
            <p style={{ color: "#A0AEC0", fontSize: 15, maxWidth: 500, margin: "0 auto 32px", lineHeight: 1.7 }}>Submit your résumé and let us get to work finding the right opportunity for you.</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <BtnLink href="/resume" style={{ padding: "14px 32px", fontSize: 15, background: "linear-gradient(135deg, #38A169, #68D391)" }}>Submit Your Resume →</BtnLink>
              <BtnLink href="/jobs" variant="outline" style={{ padding: "14px 32px", fontSize: 15, borderColor: "rgba(72,187,120,0.4)", color: "#68D391" }}>View Open Jobs</BtnLink>
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}

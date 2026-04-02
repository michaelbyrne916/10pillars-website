import Reveal from "@/components/Reveal";
import BtnLink from "@/components/BtnLink";
import Section from "@/components/Section";
import SectionTag from "@/components/SectionTag";
import H2 from "@/components/H2";
import Lead from "@/components/Lead";
import { PILLARS, STATS, PROCESS_STEPS } from "@/lib/data";

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          padding: "120px 1.5rem 80px",
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(49,130,206,0.18) 0%, transparent 70%), #080814",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage:
              "linear-gradient(rgba(99,179,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(49,130,206,0.12), transparent 70%)",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 900, textAlign: "center", position: "relative", zIndex: 1 }}>
          <Reveal>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(49,130,206,0.12)",
                border: "1px solid rgba(99,179,237,0.25)",
                borderRadius: 100,
                padding: "7px 18px",
                marginBottom: 28,
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  color: "#63B3ED",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Human-Led · 25+ Years Experience · California
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.6rem, 7vw, 5rem)",
                fontWeight: 800,
                color: "#F7FAFC",
                lineHeight: 1.1,
                marginBottom: 28,
                letterSpacing: "-1px",
              }}
            >
              Modern Talent Delivery,
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #63B3ED, #90CDF4, #BEE3F8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Built on Expertise and Integrity
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                color: "#A0AEC0",
                lineHeight: 1.75,
                maxWidth: 680,
                margin: "0 auto 42px",
              }}
            >
              10 Pillars Solutions combines broad sourcing reach with experienced workforce
              professionals to deliver qualified talent across IT, STEM, finance, construction
              management, and sales — faster, with less friction, and without sacrificing quality.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <BtnLink href="/employers" style={{ padding: "15px 34px", fontSize: 15 }}>
                Hire Talent →
              </BtnLink>
              <BtnLink href="/resume" variant="outline" style={{ padding: "15px 34px", fontSize: 15 }}>
                Submit Your Resume
              </BtnLink>
              <BtnLink href="/jobs" variant="ghost" style={{ padding: "15px 34px", fontSize: 15 }}>
                View Open Jobs
              </BtnLink>
            </div>
          </Reveal>
        </div>
      </div>

      {/* STATS STRIP */}
      <div
        style={{
          background: "rgba(255,255,255,0.02)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          padding: "36px 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 24,
            textAlign: "center",
          }}
        >
          {STATS.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
                    fontWeight: 800,
                    color: "#63B3ED",
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: 13, color: "#718096", marginTop: 4, fontWeight: 500 }}>
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* PUBLIC SECTOR / CERTIFICATION */}
      <div style={{ padding: "32px 1.5rem", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap", textAlign: "center" }}>
          <div style={{ background: "rgba(49,130,206,0.08)", border: "1px solid rgba(99,179,237,0.2)", borderRadius: 8, padding: "10px 20px", display: "inline-flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#63B3ED", letterSpacing: "0.08em", textTransform: "uppercase" }}>CA Certified Small Business</span>
            <span style={{ color: "rgba(99,179,237,0.4)", fontSize: 12 }}>|</span>
            <span style={{ fontSize: 13, color: "#A0AEC0" }}>10 Pillars Solutions is a Certified Small Business with the California Department of General Services <span style={{ color: "#718096" }}>(SB#2038866)</span> — tailored to support public sector agencies throughout the State of California.</span>
          </div>
        </div>
      </div>

      {/* VALUE PROP */}
      <Section>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 48,
            alignItems: "center",
          }}
        >
          <div>
            <Reveal><SectionTag>Our Difference</SectionTag></Reveal>
            <Reveal delay={0.1}>
              <H2>Broad Sourcing.<br />Human Vetting.<br />Better Outcomes.</H2>
            </Reveal>
            <Reveal delay={0.2}>
              <p style={{ color: "#A0AEC0", lineHeight: 1.8, fontSize: 16, marginBottom: 20 }}>
                Most staffing firms send you résumés. We send you qualified people. The difference
                is our process — broad multi-channel sourcing combined with rigorous human review,
                behavioral evaluation, and technical screening coordination.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p style={{ color: "#A0AEC0", lineHeight: 1.8, fontSize: 16, marginBottom: 32 }}>
                You don't need more noise in your hiring pipeline. You need fewer, better candidates
                — people who actually fit the role, the team, and the moment.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <BtnLink href="/about">Learn Our Story →</BtnLink>
            </Reveal>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { title: "Faster Time-to-Submit", desc: "Efficient workflows reduce sourcing and outreach time without compromising candidate quality." },
              { title: "Better Candidate Matching", desc: "Precision beyond keywords — contextual fit, not just skill alignment." },
              { title: "Human Quality Assurance", desc: "Every submission has been reviewed, qualified, and approved by our team." },
              { title: "Pipeline Transparency", desc: "You always know where your search stands and what's coming next." },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "20px 18px" }}>
                  <div style={{ fontWeight: 600, fontSize: 14, color: "#E2E8F0", marginBottom: 6 }}>{c.title}</div>
                  <div style={{ fontSize: 13, color: "#718096", lineHeight: 1.6 }}>{c.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* DUAL CTA */}
      <div style={{ padding: "0 1.5rem 96px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          <Reveal>
            <div style={{ background: "linear-gradient(135deg, rgba(49,130,206,0.2), rgba(49,130,206,0.05))", border: "1px solid rgba(99,179,237,0.25)", borderRadius: 20, padding: "48px 40px" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.7rem", color: "#F7FAFC", marginBottom: 12 }}>For Employers</h3>
              <p style={{ color: "#A0AEC0", fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
                You don't need more résumés. You need qualified people, delivered faster. Partner with a team that combines broad sourcing reach with human-led vetting to cut hiring friction and raise hiring quality.
              </p>
              <BtnLink href="/employers" style={{ display: "block", textAlign: "center" }}>Hire Talent →</BtnLink>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div style={{ background: "linear-gradient(135deg, rgba(72,187,120,0.12), rgba(72,187,120,0.03))", border: "1px solid rgba(72,187,120,0.2)", borderRadius: 20, padding: "48px 40px" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.7rem", color: "#F7FAFC", marginBottom: 12 }}>For Candidates</h3>
              <p style={{ color: "#A0AEC0", fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
                You deserve to work with recruiters who actually know your field. Our team provides real guidance, real communication, and real opportunities — not automated follow-ups and radio silence.
              </p>
              <BtnLink href="/candidates" variant="ghost" style={{ display: "block", textAlign: "center", border: "1.5px solid rgba(72,187,120,0.4)", color: "#68D391" }}>Explore Opportunities →</BtnLink>
            </div>
          </Reveal>
        </div>
      </div>

      {/* INDUSTRY FOCUS */}
      <div style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "96px 1.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal><SectionTag>Industry Focus</SectionTag></Reveal>
          <Reveal delay={0.1}>
            <H2>Talent Solutions Across<br />Technical and Professional Disciplines</H2>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ color: "#A0AEC0", fontSize: 17, lineHeight: 1.8, maxWidth: 720, marginTop: 24, marginBottom: 48 }}>
              We deliver talent solutions across technical, professional, and operational disciplines, supporting organizations in areas such as IT, engineering, accounting and finance, sales, and construction management.
            </p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14, marginBottom: 48 }}>
            {[
              "Information Technology", "Engineering & STEM", "Accounting & Finance",
              "Sales Talent", "Construction Management", "Project & Program Management",
              "Business Analysis", "Cloud & DevOps", "Data & Analytics",
              "Cybersecurity", "Quality Assurance", "Professional & Administrative",
            ].map((t, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div style={{ background: "rgba(99,179,237,0.06)", border: "1px solid rgba(99,179,237,0.15)", borderRadius: 10, padding: "12px 16px", textAlign: "center", fontSize: 13, color: "#A0C4F0", fontWeight: 500 }}>{t}</div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div style={{ textAlign: "center" }}>
              <BtnLink href="/services">View Our Services →</BtnLink>
            </div>
          </Reveal>
        </div>
      </div>

      {/* PILLARS TEASER */}
      <Section>
        <Reveal><SectionTag>Our Framework</SectionTag></Reveal>
        <Reveal delay={0.1}><H2>The 10 Pillars of<br />Exceptional Staffing</H2></Reveal>
        <Reveal delay={0.15}>
          <Lead>A proprietary framework that guides how we source, qualify, place, and partner. Every engagement is built on all ten.</Lead>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14, marginBottom: 40 }}>
          {PILLARS.slice(0, 5).map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "20px 16px", textAlign: "center" }}>
                <div style={{ fontSize: 11, color: "#63B3ED", fontWeight: 700, letterSpacing: "0.08em", marginBottom: 4 }}>{p.n}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#E2E8F0" }}>{p.title}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.5}>
          <BtnLink href="/pillars">Explore All 10 Pillars →</BtnLink>
        </Reveal>
      </Section>

      {/* PROCESS */}
      <div style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "96px 1.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal><SectionTag>How It Works</SectionTag></Reveal>
          <Reveal delay={0.1}><H2>A Process Designed for<br />Speed and Quality</H2></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginTop: 48 }}>
            {PROCESS_STEPS.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{ display: "flex", gap: 18 }}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: "#3182CE", fontFamily: "'Syne', sans-serif", minWidth: 32, paddingTop: 3 }}>{s.n}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 15, color: "#E2E8F0", marginBottom: 6 }}>{s.title}</div>
                    <div style={{ fontSize: 14, color: "#718096", lineHeight: 1.65 }}>{s.desc}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <Section>
        <Reveal>
          <div style={{ background: "linear-gradient(135deg, rgba(49,130,206,0.2), rgba(49,130,206,0.06), rgba(99,179,237,0.08))", border: "1px solid rgba(99,179,237,0.2)", borderRadius: 24, padding: "64px 48px", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: "#F7FAFC", marginBottom: 16 }}>Ready to Experience a Better Hiring Process?</h2>
            <p style={{ color: "#A0AEC0", fontSize: 16, lineHeight: 1.7, maxWidth: 560, margin: "0 auto 36px" }}>Whether you're looking to hire or looking for your next opportunity — let's talk.</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <BtnLink href="/contact" style={{ padding: "14px 32px", fontSize: 15 }}>Let's Talk Talent →</BtnLink>
              <BtnLink href="/resume" variant="outline" style={{ padding: "14px 32px", fontSize: 15 }}>Submit Your Resume</BtnLink>
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}

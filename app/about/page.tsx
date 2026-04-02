import Reveal from "@/components/Reveal";
import BtnLink from "@/components/BtnLink";
import Section from "@/components/Section";
import SectionTag from "@/components/SectionTag";
import H2 from "@/components/H2";

export const metadata = {
  title: "About — 10 Pillars Solutions",
  description: "25+ years of workforce management experience delivering qualified talent across IT, STEM, finance, construction management, and sales.",
};

export default function AboutPage() {
  return (
    <div>
      <div style={{ padding: "120px 1.5rem 80px", background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(49,130,206,0.12) 0%, transparent 70%)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <Reveal><SectionTag>About Us</SectionTag></Reveal>
          <Reveal delay={0.1}>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.4rem, 6vw, 4rem)", fontWeight: 800, color: "#F7FAFC", lineHeight: 1.15, marginBottom: 24 }}>
              Workforce Solutions Built for<br />Speed, Quality, and Trust
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ color: "#A0AEC0", fontSize: 17, lineHeight: 1.8 }}>
              10 Pillars Solutions is a modern staffing and workforce solutions firm that combines broad sourcing reach with experienced human recruiters to deliver better talent outcomes — for employers and candidates alike.
            </p>
          </Reveal>
        </div>
      </div>

      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64 }}>
          <div>
            <Reveal><SectionTag>Our Mission</SectionTag></Reveal>
            <Reveal delay={0.1}><H2>Why We Built<br />10 Pillars Solutions</H2></Reveal>
            <Reveal delay={0.2}>
              <p style={{ color: "#A0AEC0", lineHeight: 1.8, fontSize: 16, marginBottom: 20 }}>
                After more than 25 years in the workforce management industry, we saw a consistent pattern: companies receiving too many unqualified candidates, while great talent went undiscovered. The problem wasn't a lack of résumés. It was a lack of quality and precision in the staffing process.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p style={{ color: "#A0AEC0", lineHeight: 1.8, fontSize: 16, marginBottom: 20 }}>
                We built 10 Pillars Solutions to do something different — to use the best available technology to source faster and wider, while ensuring that every candidate reaching a client has been genuinely qualified by an experienced human being.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <p style={{ color: "#A0AEC0", lineHeight: 1.8, fontSize: 16 }}>
                Our mission is simple: deliver workforce solutions that are built on expertise, powered by intelligence, and driven by integrity.
              </p>
            </Reveal>
          </div>
          <div>
            <Reveal delay={0.1}>
              <div style={{ background: "linear-gradient(135deg, rgba(49,130,206,0.15), rgba(49,130,206,0.05))", border: "1px solid rgba(99,179,237,0.2)", borderRadius: 20, padding: "40px 36px" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "#F7FAFC", marginBottom: 16 }}>A Message from Our Founder</h3>
                <div style={{ color: "#A0AEC0", lineHeight: 1.8, fontSize: 15, fontStyle: "italic", marginBottom: 16 }}>
                  <p style={{ marginBottom: 14 }}>"10 Pillars Solutions was built on a simple belief: better hiring happens when innovation and human expertise work together.</p>
                  <p style={{ marginBottom: 14 }}>In a market where speed and competition continue to increase, companies need more than volume. They need qualified, reliable talent delivered with precision and confidence. That is why we have created a staffing model that combines advanced sourcing capabilities with experienced human recruiters who bring judgment, industry knowledge, and a commitment to quality at every stage of the process.</p>
                  <p style={{ marginBottom: 14 }}>Our team's foundation is built on more than 20 years of workforce management experience, and that experience has taught us something important: the best hiring outcomes come from understanding people, not just resumes. Technology helps us identify patterns, expand reach, and accelerate delivery. Human expertise ensures every candidate is properly qualified, vetted, and aligned before moving forward.</p>
                  <p style={{ marginBottom: 14 }}>The 10 Pillars in our name represent the values that guide our work and define our partnerships. They are the standards we hold ourselves to every day as we help clients build stronger teams and help candidates find meaningful opportunities.</p>
                  <p>At 10 Pillars Solutions, we are proud to deliver a smarter, more responsive, and more human approach to staffing."</p>
                </div>
                <div style={{ color: "#63B3ED", fontWeight: 600, fontSize: 14 }}>— Michael Byrne, Founder, 10 Pillars Solutions</div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <div style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "96px 1.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal><H2 style={{ textAlign: "center" }}>What Makes Us Different</H2></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginTop: 48 }}>
            {[
              { title: "Broad Reach. Human Judgment.", desc: "Our sourcing capabilities increase speed, precision, and reach. Our people provide judgment, relationships, nuance, and final evaluation." },
              { title: "Specialized Across Key Disciplines", desc: "We focus on IT, STEM, finance, construction management, and sales — delivering more effective results in the disciplines that matter most to our clients." },
              { title: "The 10 Pillars Framework", desc: "Every engagement follows our proprietary framework — a 10-step process that ensures quality from initial search to long-term partnership." },
              { title: "Candidates are People, Not Profiles", desc: "We invest in real relationships with candidates because that's what produces better outcomes for clients and better experiences for talent." },
              { title: "Speed Without Sacrifice", desc: "Faster time-to-submit without cutting corners on vetting. Efficient workflows remove friction while human QA maintains the standard." },
              { title: "Long-Term Partnership Model", desc: "We measure our success by the quality of our placements over time — not just by volume or fill rate." },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "28px 24px" }}>
                  <div style={{ fontWeight: 600, fontSize: 15, color: "#E2E8F0", marginBottom: 8 }}>{c.title}</div>
                  <div style={{ fontSize: 14, color: "#718096", lineHeight: 1.65 }}>{c.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: "48px 1.5rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal>
            <div style={{ background: "rgba(49,130,206,0.08)", border: "1px solid rgba(99,179,237,0.18)", borderRadius: 14, padding: "28px 36px" }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#63B3ED", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Public Sector & Certification</div>
              <p style={{ color: "#A0AEC0", fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                10 Pillars Solutions is tailored to support public sector agencies within the State of California. We are a <strong style={{ color: "#CBD5E0" }}>Certified Small Business with the California Department of General Services</strong> (CA SB#2038866), and we understand the requirements, timelines, and standards that public sector organizations need in a staffing partner.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <Section>
        <Reveal>
          <div style={{ textAlign: "center" }}>
            <H2 style={{ textAlign: "center" }}>Ready to Partner with a<br />Staffing Team That Gets It?</H2>
            <p style={{ color: "#A0AEC0", fontSize: 16, maxWidth: 500, margin: "0 auto 36px" }}>Whether you need talent or are looking for your next opportunity, we're ready to help.</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <BtnLink href="/contact">Let's Talk Talent →</BtnLink>
              <BtnLink href="/pillars" variant="outline">Explore Our Framework</BtnLink>
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}

import Reveal from "@/components/Reveal";
import BtnLink from "@/components/BtnLink";
import Section from "@/components/Section";
import SectionTag from "@/components/SectionTag";
import { getJobs, type Job } from "@/lib/notion";

export const metadata = {
  title: "Open Jobs — 10 Pillars Solutions",
  description: "Current IT, STEM, and professional staffing opportunities.",
};

// Revalidate every 60 seconds so new Notion jobs appear promptly
export const revalidate = 60;

const FILTERS = ["All", "IT", "STEM", "Engineering", "Data", "Contract", "Direct Hire"];

export default async function JobsPage() {
  const jobs: Job[] = await getJobs();

  return (
    <div>
      <div style={{ padding: "120px 1.5rem 80px", background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(49,130,206,0.1) 0%, transparent 70%)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <Reveal><SectionTag>Open Opportunities</SectionTag></Reveal>
          <Reveal delay={0.1}>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.4rem, 6vw, 4rem)", fontWeight: 800, color: "#F7FAFC", lineHeight: 1.15, marginBottom: 24 }}>
              Current Openings
            </h1>
          </Reveal>
        </div>
      </div>

      <Section>
        <Reveal>
          <div style={{ display: "flex", gap: 12, marginBottom: 40, flexWrap: "wrap" }}>
            {FILTERS.map((f, i) => (
              <span
                key={i}
                style={{
                  background: i === 0 ? "#3182CE" : "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: i === 0 ? "#fff" : "#718096",
                  padding: "7px 16px",
                  borderRadius: 8,
                  fontSize: 13,
                }}
              >
                {f}
              </span>
            ))}
          </div>
        </Reveal>

        {jobs.length > 0 ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {jobs.map((job, i) => (
              <Reveal key={job.id} delay={i * 0.05}>
                <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "28px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: "#F7FAFC", marginBottom: 8 }}>{job.title}</h3>
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: job.description ? 12 : 0 }}>
                      {job.location && (
                        <span style={{ fontSize: 13, color: "#718096" }}>📍 {job.location}</span>
                      )}
                      {job.type && (
                        <span style={{ fontSize: 13, color: "#63B3ED", background: "rgba(99,179,237,0.1)", padding: "2px 10px", borderRadius: 6 }}>{job.type}</span>
                      )}
                      {job.category && (
                        <span style={{ fontSize: 13, color: "#718096", background: "rgba(255,255,255,0.04)", padding: "2px 10px", borderRadius: 6 }}>{job.category}</span>
                      )}
                    </div>
                    {job.description && (
                      <p style={{ fontSize: 14, color: "#718096", lineHeight: 1.65, maxWidth: 600 }}>{job.description}</p>
                    )}
                  </div>
                  <BtnLink href="/resume" style={{ padding: "10px 20px", fontSize: 13, whiteSpace: "nowrap" }}>Apply Now →</BtnLink>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={0.1}>
            <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 24, padding: "80px 48px", textAlign: "center" }}>
              <div style={{ fontSize: 56, marginBottom: 20 }}>🔭</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", color: "#F7FAFC", marginBottom: 16 }}>New Opportunities Coming Soon</h2>
              <p style={{ color: "#A0AEC0", fontSize: 16, lineHeight: 1.75, maxWidth: 520, margin: "0 auto 16px" }}>
                We're actively building opportunities across IT, STEM, and professional staffing. Roles will be posted here as they become available.
              </p>
              <p style={{ color: "#718096", fontSize: 14, lineHeight: 1.7, maxWidth: 480, margin: "0 auto 36px" }}>
                Submit your résumé now to be among the first considered for upcoming opportunities in software engineering, cloud, data science, cybersecurity, project management, and more.
              </p>
              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                <BtnLink href="/resume">Submit Your Resume Now →</BtnLink>
                <BtnLink href="/contact" variant="outline">Talk to a Recruiter</BtnLink>
              </div>
            </div>
          </Reveal>
        )}

        <Reveal delay={0.2}>
          <div style={{ marginTop: 48, padding: "28px", background: "rgba(99,179,237,0.06)", border: "1px solid rgba(99,179,237,0.15)", borderRadius: 14, textAlign: "center" }}>
            <p style={{ color: "#A0C4F0", fontSize: 14 }}>
              💬 Want to be notified when new roles are posted?{" "}
              <BtnLink href="/contact" style={{ display: "inline", padding: 0, background: "none", boxShadow: "none", color: "#63B3ED", textDecoration: "underline", fontSize: 14 }}>
                Get in touch
              </BtnLink>{" "}
              and we'll add you to our talent network.
            </p>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}

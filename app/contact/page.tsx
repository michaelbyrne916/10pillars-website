"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import Btn from "@/components/Btn";
import Section from "@/components/Section";
import SectionTag from "@/components/SectionTag";
import H2 from "@/components/H2";
import { CONTACT_INFO } from "@/lib/data";

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 10,
  padding: "12px 16px",
  color: "#E2E8F0",
  fontSize: 15,
  fontFamily: "'Inter', sans-serif",
  outline: "none",
};

interface FormState {
  name: string;
  email: string;
  company: string;
  type: "employer" | "candidate";
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    type: "employer",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
        <div style={{ textAlign: "center", maxWidth: 500 }}>
          <div style={{ fontSize: 60, marginBottom: 20 }}>💬</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "#F7FAFC", marginBottom: 16 }}>Message Received</h2>
          <p style={{ color: "#A0AEC0", fontSize: 16, lineHeight: 1.75 }}>
            Thank you for reaching out. A member of our team will be in touch within one business day.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ padding: "120px 1.5rem 80px", background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(49,130,206,0.12) 0%, transparent 70%)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <Reveal><SectionTag>Contact</SectionTag></Reveal>
          <Reveal delay={0.1}>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.4rem, 6vw, 4rem)", fontWeight: 800, color: "#F7FAFC", lineHeight: 1.15, marginBottom: 24 }}>
              Let's Talk Talent
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ color: "#A0AEC0", fontSize: 17, lineHeight: 1.8 }}>
              Whether you're an employer looking to hire or a candidate exploring opportunities — we're ready to help. Tell us what you need.
            </p>
          </Reveal>
        </div>
      </div>

      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 64 }}>
          <div>
            <Reveal><H2>Get in Touch</H2></Reveal>
            <Reveal delay={0.1}>
              {[
                { icon: "📧", label: "Email Us", value: CONTACT_INFO.email },
                { icon: "📞", label: "Call Us", value: CONTACT_INFO.phone },
                { icon: "📍", label: "Location", value: CONTACT_INFO.location },
                { icon: "⏱️", label: "Response Time", value: CONTACT_INFO.responseTime },
              ].map((c, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
                    <div style={{ width: 40, height: 40, background: "rgba(49,130,206,0.1)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{c.icon}</div>
                    <div>
                      <div style={{ fontSize: 12, color: "#718096", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 3 }}>{c.label}</div>
                      <div style={{ fontSize: 15, color: "#E2E8F0" }}>{c.value}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: "36px 32px" }}>
              <div style={{ display: "grid", gap: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 13, color: "#A0AEC0", marginBottom: 6, fontWeight: 500 }}>Full Name *</label>
                    <input type="text" placeholder="Your name" value={form.name} onChange={set("name")} style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 13, color: "#A0AEC0", marginBottom: 6, fontWeight: 500 }}>Email *</label>
                    <input type="email" placeholder="you@company.com" value={form.email} onChange={set("email")} style={inputStyle} />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 13, color: "#A0AEC0", marginBottom: 6, fontWeight: 500 }}>Company / Organization</label>
                  <input type="text" placeholder="Your company name" value={form.company} onChange={set("company")} style={inputStyle} />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 13, color: "#A0AEC0", marginBottom: 8, fontWeight: 500 }}>I am a...</label>
                  <div style={{ display: "flex", gap: 10 }}>
                    {(["employer", "candidate"] as const).map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, type: t }))}
                        style={{
                          flex: 1,
                          padding: "10px",
                          borderRadius: 8,
                          cursor: "pointer",
                          border: "1px solid",
                          borderColor: form.type === t ? "#3182CE" : "rgba(255,255,255,0.1)",
                          background: form.type === t ? "rgba(49,130,206,0.15)" : "rgba(255,255,255,0.03)",
                          color: form.type === t ? "#63B3ED" : "#718096",
                          fontSize: 13,
                          fontWeight: 600,
                          textTransform: "capitalize",
                        }}
                      >
                        {t === "employer" ? "🏢 Employer" : "👤 Candidate"}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 13, color: "#A0AEC0", marginBottom: 6, fontWeight: 500 }}>How Can We Help? *</label>
                  <textarea
                    rows={4}
                    placeholder={
                      form.type === "employer"
                        ? "Tell us about your hiring needs — role, team, timeline, and any specific requirements."
                        : "Tell us about your background and what you're looking for in your next opportunity."
                    }
                    value={form.message}
                    onChange={set("message")}
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>

                {error && (
                  <p style={{ color: "#FC8181", fontSize: 13, textAlign: "center" }}>{error}</p>
                )}

                <Btn
                  onClick={handleSubmit}
                  disabled={submitting}
                  style={{ width: "100%", padding: "14px" }}
                >
                  {submitting ? "Sending..." : "Send Message →"}
                </Btn>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}

"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import Btn from "@/components/Btn";
import Section from "@/components/Section";
import SectionTag from "@/components/SectionTag";
import H2 from "@/components/H2";

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
  phone: string;
  linkedin: string;
  role: string;
  notes: string;
}

export default function ResumePage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    role: "",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email) {
      setError("Please provide your name and email.");
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/resume", {
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
          <div style={{ fontSize: 60, marginBottom: 20 }}>✅</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "#F7FAFC", marginBottom: 16 }}>Resume Received</h2>
          <p style={{ color: "#A0AEC0", fontSize: 16, lineHeight: 1.75 }}>
            Thank you, {form.name}. A member of our team will review your background and reach out within 1–2 business days. We appreciate your interest in working with 10 Pillars Solutions.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ padding: "120px 1.5rem 80px", background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(72,187,120,0.08) 0%, transparent 70%)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <Reveal><SectionTag>Candidates</SectionTag></Reveal>
          <Reveal delay={0.1}>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.4rem, 6vw, 3.5rem)", fontWeight: 800, color: "#F7FAFC", lineHeight: 1.15, marginBottom: 24 }}>
              Submit Your Resume
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ color: "#A0AEC0", fontSize: 17, lineHeight: 1.8 }}>
              Share your background and we'll get to work. A real recruiter will review your résumé and reach out to discuss opportunities aligned with your goals.
            </p>
          </Reveal>
        </div>
      </div>

      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64 }}>
          <div>
            <Reveal><H2>We Review Every Submission</H2></Reveal>
            <Reveal delay={0.1}>
              <p style={{ color: "#A0AEC0", lineHeight: 1.8, fontSize: 16, marginBottom: 32 }}>
                Your résumé won't disappear into a database. Our recruiting team reviews every submission and follows up personally within 1–2 business days.
              </p>
            </Reveal>
            {[
              "Your information is kept strictly confidential",
              "We never share your résumé without your explicit approval",
              "You'll receive honest, timely feedback from a real recruiter",
              "Our team actively advocates for candidates within our client network",
            ].map((b, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                  <span style={{ color: "#68D391" }}>✓</span>
                  <span style={{ color: "#A0AEC0", fontSize: 14 }}>{b}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: "36px 32px" }}>
              <div style={{ display: "grid", gap: 16 }}>
                {[
                  { label: "Full Name *", key: "name" as const, type: "text", placeholder: "Jane Smith" },
                  { label: "Email Address *", key: "email" as const, type: "email", placeholder: "jane@example.com" },
                  { label: "Phone Number", key: "phone" as const, type: "tel", placeholder: "+1 (555) 000-0000" },
                  { label: "LinkedIn Profile URL", key: "linkedin" as const, type: "url", placeholder: "https://linkedin.com/in/..." },
                  { label: "Desired Role / Job Title", key: "role" as const, type: "text", placeholder: "e.g. Senior Software Engineer, Data Analyst" },
                ].map((f) => (
                  <div key={f.key}>
                    <label style={{ display: "block", fontSize: 13, color: "#A0AEC0", marginBottom: 6, fontWeight: 500 }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} value={form[f.key]} onChange={set(f.key)} style={inputStyle} />
                  </div>
                ))}

                <div>
                  <label style={{ display: "block", fontSize: 13, color: "#A0AEC0", marginBottom: 6, fontWeight: 500 }}>Additional Notes (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Anything else you'd like us to know — work authorization, location preference, availability, etc."
                    value={form.notes}
                    onChange={set("notes")}
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
                  {submitting ? "Sending..." : "Submit My Resume →"}
                </Btn>

                <p style={{ fontSize: 11, color: "#4A5568", textAlign: "center", lineHeight: 1.6 }}>
                  Your information is kept strictly confidential and never shared without your consent.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}

import SectionTag from "@/components/SectionTag";

export function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div
        style={{
          padding: "120px 1.5rem 60px",
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(49,130,206,0.12) 0%, transparent 70%)",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <SectionTag>Legal</SectionTag>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
              fontWeight: 800,
              color: "#F7FAFC",
              lineHeight: 1.15,
              marginBottom: 12,
            }}
          >
            {title}
          </h1>
          <p style={{ color: "#718096", fontSize: 13 }}>Last updated: {updated}</p>
        </div>
      </div>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "24px 1.5rem 96px" }}>
        {children}
      </div>
    </div>
  );
}

export function LegalH(props: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "1.3rem",
        fontWeight: 700,
        color: "#F7FAFC",
        margin: "34px 0 10px",
      }}
    >
      {props.children}
    </h2>
  );
}

export function LegalP(props: { children: React.ReactNode }) {
  return (
    <p style={{ color: "#A0AEC0", fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>
      {props.children}
    </p>
  );
}

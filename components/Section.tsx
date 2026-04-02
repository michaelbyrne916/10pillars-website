import React from "react";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
}

export default function Section({ children, id, style = {} }: SectionProps) {
  return (
    <section
      id={id}
      style={{ padding: "96px 1.5rem", maxWidth: 1200, margin: "0 auto", ...style }}
    >
      {children}
    </section>
  );
}

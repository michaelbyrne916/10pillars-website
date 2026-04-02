import React from "react";

interface H2Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function H2({ children, style = {} }: H2Props) {
  return (
    <h2
      style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(2rem, 5vw, 2.9rem)",
        fontWeight: 700,
        color: "#F7FAFC",
        lineHeight: 1.18,
        marginBottom: "1rem",
        ...style,
      }}
    >
      {children}
    </h2>
  );
}

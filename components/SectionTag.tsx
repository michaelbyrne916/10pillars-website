import React from "react";

export default function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: "rgba(49,130,206,0.1)",
        border: "1px solid rgba(99,179,237,0.2)",
        borderRadius: 100,
        padding: "5px 14px",
        marginBottom: 18,
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#63B3ED",
          display: "inline-block",
        }}
      />
      <span
        style={{
          color: "#63B3ED",
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        {children}
      </span>
    </div>
  );
}

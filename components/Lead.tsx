import React from "react";

export default function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: 17,
        color: "#A0AEC0",
        lineHeight: 1.75,
        maxWidth: 640,
        marginBottom: "2.5rem",
      }}
    >
      {children}
    </p>
  );
}

"use client";

import React from "react";

type BtnVariant = "primary" | "outline" | "ghost";

interface BtnProps {
  children: React.ReactNode;
  variant?: BtnVariant;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  disabled?: boolean;
}

const base: React.CSSProperties = {
  border: "none",
  cursor: "pointer",
  fontFamily: "'Inter', sans-serif",
  fontWeight: 600,
  borderRadius: 9,
  transition: "all 0.2s",
  fontSize: 14,
  padding: "13px 26px",
};

const variants: Record<BtnVariant, React.CSSProperties> = {
  primary: {
    background: "linear-gradient(135deg, #3182CE, #63B3ED)",
    color: "#fff",
    boxShadow: "0 4px 20px rgba(49,130,206,0.35)",
  },
  outline: {
    background: "transparent",
    color: "#63B3ED",
    border: "1.5px solid rgba(99,179,237,0.5)",
  },
  ghost: {
    background: "rgba(99,179,237,0.08)",
    color: "#A0C4F0",
    border: "1px solid rgba(99,179,237,0.15)",
  },
};

export default function Btn({
  children,
  variant = "primary",
  onClick,
  type = "button",
  style = {},
  disabled = false,
}: BtnProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{ ...base, ...variants[variant], ...style, ...(disabled ? { opacity: 0.6, cursor: "not-allowed" } : {}) }}
    >
      {children}
    </button>
  );
}

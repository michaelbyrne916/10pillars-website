import Link from "next/link";
import React from "react";

type BtnVariant = "primary" | "outline" | "ghost";

interface BtnLinkProps {
  children: React.ReactNode;
  href: string;
  variant?: BtnVariant;
  style?: React.CSSProperties;
  className?: string;
}

const base: React.CSSProperties = {
  display: "inline-block",
  textDecoration: "none",
  fontFamily: "'Inter', sans-serif",
  fontWeight: 600,
  borderRadius: 9,
  transition: "all 0.2s",
  fontSize: 14,
  padding: "13px 26px",
  cursor: "pointer",
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

export default function BtnLink({
  children,
  href,
  variant = "primary",
  style = {},
  className,
}: BtnLinkProps) {
  return (
    <Link href={href} style={{ ...base, ...variants[variant], ...style }} className={className}>
      {children}
    </Link>
  );
}

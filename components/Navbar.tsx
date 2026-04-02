"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setMenuOpen(false);
    router.push(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(8,8,20,0.97)" : "rgba(8,8,20,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid rgba(99,179,237,0.12)"
          : "1px solid transparent",
        transition: "all 0.3s ease",
        padding: "0 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: "linear-gradient(135deg, #63B3ED, #4299E1, #3182CE)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 14,
              color: "#fff",
            }}
          >
            10P
          </div>
          <span
            style={{
              color: "#F7FAFC",
              fontFamily: "'Playfair Display', serif",
              fontSize: 17,
              fontWeight: 700,
              letterSpacing: "-0.3px",
            }}
          >
            10 Pillars{" "}
            <span style={{ color: "#63B3ED" }}>Solutions</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div
          className="desktop-nav"
          style={{ display: "flex", gap: 4, alignItems: "center" }}
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                textDecoration: "none",
                color: isActive(l.href) ? "#63B3ED" : "#CBD5E0",
                fontSize: 13,
                fontWeight: 500,
                padding: "6px 10px",
                borderRadius: 6,
                transition: "color 0.2s",
              }}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => go("/contact")}
            style={{
              marginLeft: 8,
              background: "linear-gradient(135deg, #3182CE, #63B3ED)",
              border: "none",
              color: "#fff",
              padding: "9px 18px",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Hire Talent
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "#CBD5E0",
            cursor: "pointer",
            fontSize: 22,
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(8,8,20,0.99)",
            borderTop: "1px solid rgba(99,179,237,0.1)",
            padding: "1rem 1.5rem 1.5rem",
          }}
        >
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                color: isActive(l.href) ? "#63B3ED" : "#E2E8F0",
                fontSize: 16,
                padding: "10px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                cursor: "pointer",
              }}
            >
              {l.label}
            </button>
          ))}
          <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
            <button
              onClick={() => go("/contact")}
              style={{
                flex: 1,
                background: "linear-gradient(135deg, #3182CE, #63B3ED)",
                border: "none",
                color: "#fff",
                padding: "12px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Hire Talent
            </button>
            <button
              onClick={() => go("/resume")}
              style={{
                flex: 1,
                background: "rgba(99,179,237,0.1)",
                border: "1px solid rgba(99,179,237,0.3)",
                color: "#63B3ED",
                padding: "12px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Submit Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

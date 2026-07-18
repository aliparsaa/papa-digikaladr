'use client'; // چون از هوک استفاده می‌کنیم
import "./globals.css";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/"; // صفحه اصلی

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
          background: "#0b1020",
          color: "#f5f7fb",
        }}
      >
        {/* فقط در صفحات غیر اصلی هدر انگلیسی نمایش داده شود */}
        {!isHomePage && (
          <header
            style={{
              position: "sticky",
              top: 0,
              zIndex: 50,
              backdropFilter: "blur(14px)",
              background: "rgba(11,16,32,0.75)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              style={{
                maxWidth: 1200,
                margin: "0 auto",
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 20,
              }}
            >
              <Link href="/articles" style={{ textDecoration: "none", color: "#ffffff", fontSize: 22, fontWeight: 700 }}>Articles</Link>

            
              <nav style={{ display: "flex", alignItems: "center", gap: 18 }}>
                <Link href="/" style={{ color: "#d9e2f2", textDecoration: "none", fontSize: 15 }}>Home</Link>
                <Link href="/threadlift" style={{ color: "#d9e2f2", textDecoration: "none", fontSize: 15 }}>Threadlift</Link>
                <Link href="/rejuvenation" style={{ color: "#d9e2f2", textDecoration: "none", fontSize: 15 }}>Rejuvenation</Link>
              </nav>
            </div>
          </header>
        )}

        <main>{children}</main>

        {/* فوتر انگلیسی فقط در صفحات غیر اصلی */}
        {!isHomePage && (
          <footer style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: 60, background: "#0a0f1d" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 20px 40px", color: "#a9b4c8", fontSize: 14, display: "flex", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
              <div>© {new Date().getFullYear()} Steigen.ir</div>
              <div>Threadlift • Rejuvenation • Aesthetic Innovation</div>
            </div>
          </footer>
        )}
      </body>
    </html>
  );
}
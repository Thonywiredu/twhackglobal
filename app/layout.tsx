import "./globals.css";
import type { Metadata } from "next";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "TWHack Cyber Defense | Cyber Defense, Proven by Penetration",
  description:
    "Independent cyber defense consultancy based in Accra, Ghana. Authorized penetration testing, vulnerability assessment, and defense hardening support.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
        <TopNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

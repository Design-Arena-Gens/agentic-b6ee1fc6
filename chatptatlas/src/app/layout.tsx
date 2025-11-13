import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ChatPT Atlas – AI Collaboration Navigator",
  description:
    "Discover the evolving landscape of AI-native collaboration products, compare feature sets, and track maturity signals across the ecosystem.",
  metadataBase: new URL("https://agentic-b6ee1fc6.vercel.app"),
  openGraph: {
    title: "ChatPT Atlas",
    description:
      "Curated intelligence on AI-first collaboration tools with benchmarks, maturity signals, and adoption heatmaps.",
    url: "https://agentic-b6ee1fc6.vercel.app",
    siteName: "ChatPT Atlas",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatPT Atlas",
    description:
      "Interactive atlas for AI collaboration platforms featuring filters, benchmarks, and market insights.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

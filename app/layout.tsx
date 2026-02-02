import type { Metadata } from "next";
import { Sora, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeScript } from "@/components/ThemeScript";
import { SiteHeader } from "@/components/SiteHeader";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "600"]
});

export const metadata: Metadata = {
  title: "Yasmine Khaled | Laravel Backend Developer",
  description:
    "Portfolio of Yasmine Khaled, a Laravel Backend Developer specializing in APIs, databases, and scalable systems.",
  keywords: [
    "Laravel",
    "PHP",
    "Backend Developer",
    "REST API",
    "Database Design",
    "Cairo"
  ],
  openGraph: {
    title: "Yasmine Khaled | Laravel Backend Developer",
    description:
      "Detail-oriented backend developer with experience in Laravel, PHP, and scalable RESTful APIs.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sora.variable} ${plex.variable} bg-bg text-fg`}>
        <ThemeScript />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
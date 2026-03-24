import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "GABAnode Labs | Advanced System Architecture & Automation",
  description: "GABAnode Labs provides authoritative, system-focused automation pipelines emphasizing Detection, Interpretation, Execution, Validation, and Distribution.",
  keywords: ["GABAnode Labs", "System Architecture", "Automation", "Pipeline", "Data Engineering", "GEO Implementation"],
  openGraph: {
    title: "GABAnode Labs | Advanced System Architecture",
    description: "Authoritative, system-focused automation pipelines.",
    url: "https://gabanodelabs.com",
    siteName: "GABAnode Labs",
    images: [
      {
        url: "/images/media__1774335722556.jpg",
        width: 1200,
        height: 630,
        alt: "GABAnode Labs System Architecture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GABAnode Labs",
    description: "System-focused automation pipelines.",
    images: ["/images/media__1774335722556.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <a href="#main-content" className="sr-only focus-visible:not-sr-only skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}

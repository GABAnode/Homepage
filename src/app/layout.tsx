import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AxeProvider from "@/components/AxeProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gabanodelabs.com"),
  title: "GABAnode Labs | Infrastructure for Accessibility & Compliance",
  description: "GABAnode Labs is a systems-focused lab building infrastructure for accessibility, compliance, and intelligent automation across digital environments to bring structure to complexity.",
  keywords: ["GABAnode Labs", "System Architecture", "Automation", "Pipeline", "Data Engineering", "GEO Implementation"],
  openGraph: {
    title: "GABAnode Labs | Systems-Focused Infrastructure",
    description: "GABAnode Labs is a systems-focused lab building infrastructure for accessibility, compliance, and intelligent automation.",
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
        <AxeProvider>
          <a href="#main-content" className="sr-only skip-link">
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </AxeProvider>
      </body>
    </html>
  );
}

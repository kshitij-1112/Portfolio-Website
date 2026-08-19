import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kshitij Tiwari-Software Engineer",
  description:
    "Portfolio of Kshitij Tiwari — Software Engineer specializing in full-stack web development, cybersecurity, and applied machine learning.",
  keywords: [
    "Kshitij Tiwari",
    "Software Engineer",
    "Full-Stack Developer",
    "Portfolio",
    "React Developer",
    "Bengaluru",
  ],
  openGraph: {
    title: "Kshitij Tiwari — Software Engineer",
    description:
      "Full-stack development, cybersecurity, and applied machine learning.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- intentional: single global font load in the root layout */}
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

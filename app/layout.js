import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BrightSoftLabs | Innovative Web Solutions & Development",
  description:
    "BrightSoftLabs specializes in building modern web applications, blockchain solutions, and digital products to drive business growth.",
  keywords:
    "BrightSoftLabs, web development, blockchain solutions, front-end development, React, Next.js, crypto payment systems, UI/UX design",
  authors: [{ name: "BrightSoftLabs Team", url: "https://brightsoftlab.vercel.app/" }],
  openGraph: {
    title: "BrightSoftLabs | Innovative Web Solutions",
    description:
      "Expert web development and blockchain integration services tailored for modern businesses.",
    url: "https://brightsoftlab.vercel.app/",
    siteName: "BrightSoftLabs",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "BrightSoftLabs - Innovative Web Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrightSoftLabs | Innovative Web Solutions",
    description:
      "Expert web development and blockchain integration services tailored for modern businesses.",
    creator: "@BrightSoftLabs",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",             // Favicon (32x32 or 48x48)
    shortcut: "/logo.png",         // Shortcut icon
    apple: "/logo.png",   // Apple touch icon (180x180)
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <ThemeModeScript />
        {/* Favicon and Apple Touch Icon */}
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

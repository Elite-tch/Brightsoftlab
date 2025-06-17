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
  title: "JBTech Solutions | Innovative Web Solutions & Development",
  description:
    "JBTech Solutions specializes in building modern web applications, blockchain solutions, and digital products to drive business growth.",
  keywords:
    "JBTech Solutions, web development, blockchain solutions, front-end development, React, Next.js, crypto payment systems, UI/UX design",
  authors: [{ name: "JBTech Solutions", url: "https://jbtsolutions.vercel.app/" }],
  openGraph: {
    title: "JBTech Solutions | Innovative Web Solutions",
    description:
      "Expert web development and blockchain integration services tailored for modern businesses.",
    url: "https://jbtsolutions.vercel.app/",
    siteName: "JBTech Solutions",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "JBTech Solutions - Innovative Web Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JBTech Solutions | Innovative Web Solutions",
    description:
      "Expert web development and blockchain integration services tailored for modern businesses.",
    creator: "@JBTech Solutions",
    images: ["/logo1.png"],
  },
  icons: {
    icon: "/logo1.png",             // Favicon (32x32 or 48x48)
    shortcut: "/logo1.png",         // Shortcut icon
    apple: "/logo1.png",   // Apple touch icon (180x180)
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <ThemeModeScript />
        {/* Favicon and Apple Touch Icon */}
        <link rel="icon" href="/logo1.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo1.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

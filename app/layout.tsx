import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GTM, GTMNoScript } from "@/components/GTM";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Verduurzaam Nederland",
    template: "%s | Verduurzaam Nederland",
  },
  description: "Vraag direct een vrijblijvende offerte aan en bel met een vakspecialist.",
  metadataBase: new URL("https://www.verduurzaam-nederland.nl"),
  openGraph: {
    type: "website",
    siteName: "Verduurzaam Nederland",
    locale: "nl_NL",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <GTM />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-neutral-900`}>        
        <GTMNoScript />
        <div className="min-h-dvh max-w-screen-sm mx-auto pb-20">{children}</div>
      </body>
    </html>
  );
}

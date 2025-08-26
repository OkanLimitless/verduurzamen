import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { GTM, GTMNoScript } from "@/components/GTM";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Verduurzaam Nederland", template: "%s | Verduurzaam Nederland" },
  description: "Duurzaam advies en installatie: zonnepanelen, isolatie, warmtepompen en laadoplossingen. Deskundig, snel en transparant.",
  metadataBase: new URL("https://www.verduurzaam-nederland.nl"),
  openGraph: { type: "website", siteName: "Verduurzaam Nederland", locale: "nl_NL" },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <GTM />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased bg-[var(--bg)] text-[var(--ink)]`}>        
        <GTMNoScript />
        <div className="min-h-dvh max-w-screen-md mx-auto pb-[calc(env(safe-area-inset-bottom)+88px)]">{children}</div>
      </body>
    </html>
  );
}

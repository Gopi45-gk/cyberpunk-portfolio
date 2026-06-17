import type { Metadata } from "next";
import { Fira_Code, Space_Grotesk } from "next/font/google";
import "./globals.css";
import GsapProvider from "@/components/shared/GsapProvider";
import CursorTrail from "@/components/shared/CursorTrail";
import NoiseOverlay from "@/components/shared/NoiseOverlay";

const firaCode = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gopikrishna | OS",
  description: "Sentient Terminal Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${firaCode.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground relative">
        <GsapProvider>
          <NoiseOverlay />
          <CursorTrail />
          {children}
        </GsapProvider>
      </body>
    </html>
  );
}

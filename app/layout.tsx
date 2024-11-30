import { SiteHeader } from "@/components/annonce";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Caetano",
  description: "the best credito app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SiteHeader />
        {children}
        <SiteFooter/>

        <footer className="fixed bottom-0 left-0 right-0 bg-black text-white text-center py-2 px-4">
          <p className="text-sm">
            Os cookies garantem o bom funcionamento dos nossos serviços. Ao
            utilizar nossos serviços, você concorda com o uso de cookies.{" "}
            <button className="text-green-400 underline">Compreendo</button>
          </p>
        </footer>
      </body>
    </html>
  );
}

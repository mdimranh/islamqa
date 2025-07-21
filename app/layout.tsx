import { Header } from "@/components/header"
import type { Metadata } from "next"
import { Amiri, Inter } from "next/font/google"
import type React from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
})

export const metadata: Metadata = {
  title: "IslamicQ&A - Authentic Islamic Knowledge Platform",
  description:
    "Connect with verified Islamic scholars, ask questions, and explore authentic Islamic knowledge backed by Quran and Hadith references.",
  keywords: "Islam, Islamic questions, scholars, Quran, Hadith, Islamic knowledge, fatwa",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${amiri.variable}`}>
      <body className="bg-slate-100">
        <Header />
        <div className="mt-12">{children}</div>
      </body>
    </html>
  );
}

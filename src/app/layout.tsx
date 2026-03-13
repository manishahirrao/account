import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/layout/Header";
import { TawkToChat } from "@/components/TawkToChat";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "IN Accountancy | Award-Winning Austin Accountants & Tax Advisors",
  description:
    "Qualified Austin Accountants helping LLCs, S-Corps, C-Corps, Sole Proprietors and Individuals with high quality proactive Accounting & Tax Services. Sage Partner.",
  keywords: [
    "Austin accountants",
    "Texas accountants",
    "tax advisors",
    "bookkeeping",
    "sales tax returns",
    "payroll",
    "Sage Partner",
    "IN Accountancy",
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="16x16 32x32" />
        <link rel="icon" href="/icon-192.png" sizes="192x192" type="image/png" />
        <link rel="icon" href="/icon-512.png" sizes="512x512" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>
       
        <Header />
        <main>{children}</main>
        <TawkToChat />
      </body>
    </html>
  );
}

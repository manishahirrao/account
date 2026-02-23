import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/layout/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "IN Accountancy | Award-Winning Stockport Accountants & Tax Advisors",
  description:
    "Qualified Stockport Accountants helping Limited Companies, Sole Traders and Individuals with high quality proactive Accounting & Tax Services. Xero Gold Partner.",
  keywords: [
    "Stockport accountants",
    "tax advisors",
    "bookkeeping",
    "VAT returns",
    "payroll",
    "Xero Gold Partner",
    "IN Accountancy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
       
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

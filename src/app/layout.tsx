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
  title: "IN Accountancy | Award-Winning Austin Accountants & Tax Advisors",
  description:
    "Qualified Austin Accountants helping LLCs, S-Corps, C-Corps, Sole Proprietors and Individuals with high quality proactive Accounting & Tax Services. QuickBooks ProAdvisor.",
  keywords: [
    "Austin accountants",
    "Texas accountants",
    "tax advisors",
    "bookkeeping",
    "sales tax returns",
    "payroll",
    "QuickBooks ProAdvisor",
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

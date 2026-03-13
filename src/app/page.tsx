import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { AwardSection } from "@/components/home/AwardSection";
import { SolutionsGrid } from "@/components/home/SolutionsGrid";
import { ServicesListing } from "@/components/home/ServicesListing";

import { GoogleReviews } from "@/components/home/GoogleReviews";

import { ValuesSection } from "@/components/home/ValuesSection";
import { CTABanner } from "@/components/shared/CTABanner";
import { Footer } from "@/components/layout/Footer";

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
    "business accounting",
    "personal tax",
    "Sage 300",
    "Sage 50",
    "Sage X3",
    "Sage Intacct",
    "Sage CRM"
  ],
  openGraph: {
    title: "IN Accountancy | Award-Winning Austin Accountants & Tax Advisors",
    description: "Qualified Austin Accountants helping LLCs, S-Corps, C-Corps, Sole Proprietors and Individuals with high quality proactive Accounting & Tax Services.",
    type: "website",
    locale: "en_US",
    url: "https://sagex.pro",
    siteName: "IN Accountancy",
  },
  twitter: {
    card: "summary_large_image",
    title: "IN Accountancy | Award-Winning Austin Accountants & Tax Advisors",
    description: "Qualified Austin Accountants helping LLCs, S-Corps, C-Corps, Sole Proprietors and Individuals with high quality proactive Accounting & Tax Services.",
  },
  alternates: {
    canonical: "https://sagex.pro",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <AwardSection />
      <SolutionsGrid />
      <ServicesListing />
   
      <GoogleReviews />
      <ValuesSection />
     
      <CTABanner />
      <Footer />
    </>
  );
}

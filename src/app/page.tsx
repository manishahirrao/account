import { Hero } from "@/components/home/Hero";
import { AwardSection } from "@/components/home/AwardSection";
import { SolutionsGrid } from "@/components/home/SolutionsGrid";
import { ServicesListing } from "@/components/home/ServicesListing";

import { GoogleReviews } from "@/components/home/GoogleReviews";

import { ValuesSection } from "@/components/home/ValuesSection";
import { CTABanner } from "@/components/shared/CTABanner";
import { Footer } from "@/components/layout/Footer";

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

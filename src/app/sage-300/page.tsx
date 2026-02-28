import type { Metadata } from "next";
import { ProductHero } from "@/components/products/ProductHero";
import { FeatureGrid } from "@/components/products/FeatureGrid";
import { BenefitsSection } from "@/components/products/BenefitsSection";
import { TestimonialSection } from "@/components/products/TestimonialSection";
import { IntegrationSection } from "@/components/products/IntegrationSection";
import { IndustryGrid } from "@/components/products/IndustryGrid";
import { CTASection } from "@/components/products/CTASection";
import { Footer } from "@/components/layout/Footer";
import { sage300Data } from "@/data/products/sage-300";

export const metadata: Metadata = {
  title: sage300Data.metadata.title,
  description: sage300Data.metadata.description,
};

export default function Sage300Page() {
  return (
    <>
      <ProductHero data={sage300Data.hero} />
      <FeatureGrid data={sage300Data.features} />
      <BenefitsSection data={sage300Data.benefits} />
      {sage300Data.testimonials && (
        <TestimonialSection data={sage300Data.testimonials} />
      )}
      {sage300Data.integrations && (
        <IntegrationSection data={sage300Data.integrations} />
      )}
      {sage300Data.industries && (
        <IndustryGrid data={sage300Data.industries} />
      )}
      {sage300Data.ctas.map((cta, index) => (
        <CTASection key={index} data={cta} />
      ))}
      <Footer />
    </>
  );
}


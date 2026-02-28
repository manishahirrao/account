import type { Metadata } from "next";
import { ProductHero } from "@/components/products/ProductHero";
import { FeatureGrid } from "@/components/products/FeatureGrid";
import { BenefitsSection } from "@/components/products/BenefitsSection";
import { TestimonialSection } from "@/components/products/TestimonialSection";
import { IndustryGrid } from "@/components/products/IndustryGrid";
import { CTASection } from "@/components/products/CTASection";
import { Footer } from "@/components/layout/Footer";
import { sage50Data } from "@/data/products/sage-50";

export const metadata: Metadata = {
  title: sage50Data.metadata.title,
  description: sage50Data.metadata.description,
};

export default function Sage50Page() {
  return (
    <>
      <ProductHero data={sage50Data.hero} />
      <FeatureGrid data={sage50Data.features} />
      <BenefitsSection data={sage50Data.benefits} />
      {sage50Data.testimonials && (
        <TestimonialSection data={sage50Data.testimonials} />
      )}
      {sage50Data.industries && (
        <IndustryGrid data={sage50Data.industries} />
      )}
      {sage50Data.ctas.map((cta, index) => (
        <CTASection key={index} data={cta} />
      ))}
      <Footer />
    </>
  );
}

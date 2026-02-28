import type { Metadata } from "next";
import { ProductHero } from "@/components/products/ProductHero";
import { FeatureGrid } from "@/components/products/FeatureGrid";
import { BenefitsSection } from "@/components/products/BenefitsSection";
import { TestimonialSection } from "@/components/products/TestimonialSection";
import { IntegrationSection } from "@/components/products/IntegrationSection";
import { IndustryGrid } from "@/components/products/IndustryGrid";
import { CTASection } from "@/components/products/CTASection";
import { Footer } from "@/components/layout/Footer";
import { sageSupportData } from "@/data/products/sage-support";

export const metadata: Metadata = {
  title: sageSupportData.metadata.title,
  description: sageSupportData.metadata.description,
};

export default function SageSupportPage() {
  return (
    <>
      <ProductHero data={sageSupportData.hero} />
      <FeatureGrid data={sageSupportData.features} />
      <BenefitsSection data={sageSupportData.benefits} />
      {sageSupportData.testimonials && (
        <TestimonialSection data={sageSupportData.testimonials} />
      )}
      {sageSupportData.integrations && (
        <IntegrationSection data={sageSupportData.integrations} />
      )}
      {sageSupportData.industries && (
        <IndustryGrid data={sageSupportData.industries} />
      )}
      {sageSupportData.ctas.map((cta, index) => (
        <CTASection key={index} data={cta} />
      ))}
      <Footer />
    </>
  );
}

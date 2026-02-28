import type { Metadata } from "next";
import { ProductHero } from "@/components/products/ProductHero";
import { FeatureGrid } from "@/components/products/FeatureGrid";
import { BenefitsSection } from "@/components/products/BenefitsSection";
import { TestimonialSection } from "@/components/products/TestimonialSection";
import { IntegrationSection } from "@/components/products/IntegrationSection";
import { IndustryGrid } from "@/components/products/IndustryGrid";
import { CTASection } from "@/components/products/CTASection";
import { Footer } from "@/components/layout/Footer";
import { sageCRMData } from "@/data/products/sage-crm";

export const metadata: Metadata = {
  title: sageCRMData.metadata.title,
  description: sageCRMData.metadata.description,
};

export default function SageCRMPage() {
  return (
    <>
      <ProductHero data={sageCRMData.hero} />
      <FeatureGrid data={sageCRMData.features} />
      <BenefitsSection data={sageCRMData.benefits} />
      {sageCRMData.testimonials && (
        <TestimonialSection data={sageCRMData.testimonials} />
      )}
      {sageCRMData.integrations && (
        <IntegrationSection data={sageCRMData.integrations} />
      )}
      {sageCRMData.industries && (
        <IndustryGrid data={sageCRMData.industries} />
      )}
      {sageCRMData.ctas.map((cta, index) => (
        <CTASection key={index} data={cta} />
      ))}
      <Footer />
    </>
  );
}

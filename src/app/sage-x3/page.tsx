import type { Metadata } from "next";
import { ProductHero } from "@/components/products/ProductHero";
import { FeatureGrid } from "@/components/products/FeatureGrid";
import { BenefitsSection } from "@/components/products/BenefitsSection";
import { TestimonialSection } from "@/components/products/TestimonialSection";
import { IntegrationSection } from "@/components/products/IntegrationSection";
import { IndustryGrid } from "@/components/products/IndustryGrid";
import { CTASection } from "@/components/products/CTASection";
import { Footer } from "@/components/layout/Footer";
import { sageX3Data } from "@/data/products/sage-x3";

export const metadata: Metadata = {
  title: sageX3Data.metadata.title,
  description: sageX3Data.metadata.description,
};

export default function SageX3Page() {
  return (
    <>
      <ProductHero data={sageX3Data.hero} />
      <FeatureGrid data={sageX3Data.features} />
      <BenefitsSection data={sageX3Data.benefits} />
      {sageX3Data.testimonials && (
        <TestimonialSection data={sageX3Data.testimonials} />
      )}
      {sageX3Data.integrations && (
        <IntegrationSection data={sageX3Data.integrations} />
      )}
      {sageX3Data.industries && (
        <IndustryGrid data={sageX3Data.industries} />
      )}
      {sageX3Data.ctas.map((cta, index) => (
        <CTASection key={index} data={cta} />
      ))}
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { ProductHero } from "@/components/products/ProductHero";
import { FeatureGrid } from "@/components/products/FeatureGrid";
import { BenefitsSection } from "@/components/products/BenefitsSection";
import { TestimonialSection } from "@/components/products/TestimonialSection";
import { IntegrationSection } from "@/components/products/IntegrationSection";
import { IndustryGrid } from "@/components/products/IndustryGrid";
import { CTASection } from "@/components/products/CTASection";
import { Footer } from "@/components/layout/Footer";
import { sageIntacctData } from "@/data/products/sage-intacct";

export const metadata: Metadata = {
  title: sageIntacctData.metadata.title,
  description: sageIntacctData.metadata.description,
};

export default function SageIntacctPage() {
  return (
    <>
      <ProductHero data={sageIntacctData.hero} />
      <FeatureGrid data={sageIntacctData.features} />
      <BenefitsSection data={sageIntacctData.benefits} />
      {sageIntacctData.testimonials && (
        <TestimonialSection data={sageIntacctData.testimonials} />
      )}
      {sageIntacctData.integrations && (
        <IntegrationSection data={sageIntacctData.integrations} />
      )}
      {sageIntacctData.industries && (
        <IndustryGrid data={sageIntacctData.industries} />
      )}
      {sageIntacctData.ctas.map((cta, index) => (
        <CTASection key={index} data={cta} />
      ))}
      <Footer />
    </>
  );
}

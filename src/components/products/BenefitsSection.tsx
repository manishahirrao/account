import Link from "next/link";
import { BenefitsSectionData } from "@/data/products/types";
import { Check } from "lucide-react";

interface BenefitsSectionProps {
  data: BenefitsSectionData;
}

export function BenefitsSection({ data }: BenefitsSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Benefits List */}
            <div className="space-y-6">
              <div>
                <div className="inline-block px-4 py-1 bg-sage-forest/10 text-sage-forest rounded-full text-sm font-medium mb-4">
                  {data.sectionTag}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {data.heading}
                </h2>
              </div>
              <ul className="space-y-4">
                {data.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-sage-forest rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Content Panel */}
            {data.visualContent && (
              <div className="bg-gradient-to-br from-sage-forest to-sage-dark text-white rounded-lg p-8 md:p-12">
                <div className="space-y-6">
                  {data.visualContent.icon && (
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                      <data.visualContent.icon className="w-8 h-8" />
                    </div>
                  )}
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {data.visualContent.title}
                  </h3>
                  <p className="text-lg text-white/90 leading-relaxed">
                    {data.visualContent.description}
                  </p>
                  {data.visualContent.ctaText && data.visualContent.ctaHref && (
                    <Link
                      href={data.visualContent.ctaHref}
                      className="inline-flex items-center justify-center h-11 px-8 bg-white text-sage-forest hover:bg-gray-100 rounded-md text-sm font-medium transition-colors"
                    >
                      {data.visualContent.ctaText}
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

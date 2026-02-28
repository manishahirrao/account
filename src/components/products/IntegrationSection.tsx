import Link from "next/link";
import { IntegrationSectionData } from "@/data/products/types";

interface IntegrationSectionProps {
  data: IntegrationSectionData;
}

export function IntegrationSection({ data }: IntegrationSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-4 py-1 bg-sage-forest/10 text-sage-forest rounded-full text-sm font-medium mb-4">
            {data.sectionTag}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {data.heading}
          </h2>
          <p className="text-lg text-gray-600">{data.subheading}</p>
        </div>

        {/* Integrations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.integrations.map((integration, index) => {
            const Icon = integration.icon;
            const content = (
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-sage-forest hover:shadow-md transition-all duration-300 h-full">
                <div className="flex items-start gap-4">
                  {Icon && (
                    <div className="w-12 h-12 bg-sage-forest/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-sage-forest" />
                    </div>
                  )}
                  {integration.logo && (
                    <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <img
                        src={integration.logo}
                        alt={integration.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {integration.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {integration.description}
                    </p>
                  </div>
                </div>
              </div>
            );

            return integration.href ? (
              <Link key={index} href={integration.href} className="block">
                {content}
              </Link>
            ) : (
              <div key={index}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

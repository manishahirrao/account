import { FeatureGridData } from "@/data/products/types";

interface FeatureGridProps {
  data: FeatureGridData;
}

export function FeatureGrid({ data }: FeatureGridProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
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

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-sage-forest/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-sage-forest" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

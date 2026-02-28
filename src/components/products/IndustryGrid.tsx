import { IndustryGridData } from "@/data/products/types";

interface IndustryGridProps {
  data: IndustryGridData;
}

export function IndustryGrid({ data }: IndustryGridProps) {
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

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {data.industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-sage-forest/5 transition-colors duration-300 group"
              >
                <div className="w-16 h-16 bg-sage-forest/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-sage-forest group-hover:text-white transition-colors duration-300">
                  <Icon className="w-8 h-8 text-sage-forest group-hover:text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">{industry.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { DashboardVisualData } from "@/data/products/types";
import { Check } from "lucide-react";

interface DashboardVisualProps {
  data: DashboardVisualData;
}

export function DashboardVisual({ data }: DashboardVisualProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {data.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {data.description}
              </p>
              {data.features && data.features.length > 0 && (
                <ul className="space-y-3">
                  {data.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sage-forest flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Visual */}
            <div className="relative">
              {data.imageSrc ? (
                <div className="relative rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src={data.imageSrc}
                    alt={data.imageAlt || data.title}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="bg-gradient-to-br from-sage-forest to-sage-dark rounded-lg p-12 text-white shadow-2xl">
                  <div className="space-y-4">
                    <div className="h-8 bg-white/20 rounded w-3/4"></div>
                    <div className="h-4 bg-white/10 rounded w-full"></div>
                    <div className="h-4 bg-white/10 rounded w-5/6"></div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      <div className="h-24 bg-white/20 rounded"></div>
                      <div className="h-24 bg-white/20 rounded"></div>
                      <div className="h-24 bg-white/20 rounded"></div>
                      <div className="h-24 bg-white/20 rounded"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

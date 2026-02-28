import Link from "next/link";
import { ProductHeroData } from "@/data/products/types";

interface ProductHeroProps {
  data: ProductHeroData;
}

export function ProductHero({ data }: ProductHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-sage-forest to-sage-dark text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm font-medium">
              {data.tagline}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {data.title}
            </h1>
            <div className="space-y-4 text-lg md:text-xl text-white/90">
              {data.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href={data.primaryCTA.href}
                className="inline-flex items-center justify-center h-11 px-8 bg-white text-sage-forest hover:bg-gray-100 rounded-md text-sm font-medium transition-colors"
              >
                {data.primaryCTA.text}
              </Link>
              <Link
                href={data.secondaryCTA.href}
                className="inline-flex items-center justify-center h-11 px-8 border border-white text-white hover:bg-white/10 rounded-md text-sm font-medium transition-colors"
              >
                {data.secondaryCTA.text}
              </Link>
            </div>
          </div>

          {/* Statistics */}
          {data.stats.length > 0 && (
            <div className="grid grid-cols-2 gap-6">
              {data.stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
                  >
                    {Icon && (
                      <div className="flex justify-center mb-3">
                        <Icon className="w-8 h-8" />
                      </div>
                    )}
                    <div className="text-3xl md:text-4xl font-bold mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

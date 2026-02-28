import Link from "next/link";
import { CTASectionData } from "@/data/products/types";

interface CTASectionProps {
  data: CTASectionData;
}

export function CTASection({ data }: CTASectionProps) {
  const variantStyles = {
    default: "bg-sage-forest text-white",
    dark: "bg-gray-900 text-white",
    light: "bg-gray-50 text-gray-900",
  };

  const variant = data.variant || "default";
  const bgClass = variantStyles[variant];

  return (
    <section className={`py-16 md:py-20 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2
            className={`text-3xl md:text-4xl font-bold ${
              variant === "light" ? "text-gray-900" : "text-white"
            }`}
          >
            {data.title}
          </h2>
          {data.description && (
            <p
              className={`text-lg md:text-xl ${
                variant === "light" ? "text-gray-600" : "text-white/90"
              }`}
            >
              {data.description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href={data.primaryCTA.href}
              className={`inline-flex items-center justify-center h-11 px-8 rounded-md text-sm font-medium transition-colors ${
                variant === "light"
                  ? "bg-sage-forest text-white hover:bg-sage-dark"
                  : "bg-white text-sage-forest hover:bg-gray-100"
              }`}
            >
              {data.primaryCTA.text}
            </Link>
            {data.secondaryCTA && (
              <Link
                href={data.secondaryCTA.href}
                className={`inline-flex items-center justify-center h-11 px-8 border rounded-md text-sm font-medium transition-colors ${
                  variant === "light"
                    ? "border-sage-forest text-sage-forest hover:bg-sage-forest/10"
                    : "border-white text-white hover:bg-white/10"
                }`}
              >
                {data.secondaryCTA.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

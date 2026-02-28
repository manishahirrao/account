import Link from "next/link";
import { TestimonialSectionData } from "@/data/products/types";
import { Quote } from "lucide-react";

interface TestimonialSectionProps {
  data: TestimonialSectionData;
}

export function TestimonialSection({ data }: TestimonialSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-sage-forest text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {data.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20"
              >
                <Quote className="w-10 h-10 mb-4 text-white/60" />
                <blockquote className="text-lg italic mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                {testimonial.metric && (
                  <div className="text-sage-light font-semibold mb-4">
                    {testimonial.metric}
                  </div>
                )}
                <div className="border-t border-white/20 pt-4">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-white/80">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {data.ctaText && data.ctaHref && (
            <div className="text-center mt-12">
              <Link
                href={data.ctaHref}
                className="inline-flex items-center justify-center h-11 px-8 bg-white text-sage-forest hover:bg-gray-100 rounded-md text-sm font-medium transition-colors"
              >
                {data.ctaText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

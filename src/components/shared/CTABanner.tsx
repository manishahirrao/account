import Link from "next/link";
import { Phone, Mail, ArrowRight } from "lucide-react";

interface CTABannerProps {
    title?: string;
    phone?: string;
    email?: string;
    ctaText?: string;
    ctaLink?: string;
}

export function CTABanner({
    title = "Ready to take the stress out of your accounting?",
   
    email = "askus@in-accountancy.com",
    ctaText = "Book a FREE consultation call",
    ctaLink = "/contact",
}: CTABannerProps) {
    return (
        <section className="bg-[var(--sage-green)] py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                            {title}
                        </h2>
                        <div className="flex flex-col sm:flex-row items-center gap-4 mt-3 text-white/90">
                            
                            <a
                                href={`mailto:${email}`}
                                className="flex items-center gap-2 hover:text-white transition-colors"
                            >
                                <Mail className="h-4 w-4" />
                                <span className="text-sm">{email}</span>
                            </a>
                        </div>
                    </div>
                    <Link
                        href={ctaLink}
                        className="inline-flex items-center gap-2 bg-white text-[var(--sage-forest)] px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] shrink-0"
                    >
                        {ctaText}
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

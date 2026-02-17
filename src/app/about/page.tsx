import type { Metadata } from "next";
import { ServiceHero } from "@/components/shared/ServiceHero";
import { ValuesSection } from "@/components/home/ValuesSection";
import { CTABanner } from "@/components/shared/CTABanner";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "About IN Accountancy | Accountancy & Tax Services in Stockport",
    description:
        "IN Accountancy provide efficient, jargon free, cost-effective Accounting and Tax Services for businesses and individuals in Stockport and Greater Manchester.",
};

export default function AboutPage() {
    return (
        <>
            <ServiceHero
                title="About IN"
                breadcrumbs={[{ label: "About Us" }]}
            />

            {/* Intro Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    Stockport Accountants With a Difference
                                </h2>
                                <div className="space-y-4 text-gray-600 leading-relaxed">
                                    <p>
                                        IN Accountancy is a local owner managed business, looking
                                        after other owner managed businesses and individuals. We are
                                        a dynamic, proactive and forward-thinking team without the
                                        unnecessary, high city-centre fees.
                                    </p>
                                    <p>
                                        Our team are based in Hazel Grove, and service clients
                                        primarily in the surrounding areas of Hazel Grove, Bramhall,
                                        Cheadle, Cheadle Hulme, Stockport, Hyde.
                                    </p>
                                    <p>
                                        IN Accountancy are digital accounting experts and are cloud
                                        accounting specialists in software such as Xero, QuickBooks,
                                        FreeAgent and Sage.
                                    </p>
                                </div>
                            </div>
                            <div className="relative aspect-square bg-gradient-to-br from-[var(--sage-forest)] to-[var(--sage-emerald)] rounded-2xl flex items-center justify-center shadow-xl">
                                <span className="text-white/60 font-medium">
                                    Team Photo
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cloud Software */}
            <section className="py-12 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-gray-400">
                        {["Xero", "QuickBooks", "FreeAgent", "Sage"].map((name) => (
                            <div
                                key={name}
                                className="text-lg font-bold tracking-wider uppercase opacity-50"
                            >
                                {name}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Environmental */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="w-16 h-16 rounded-full bg-[var(--sage-green-light)] flex items-center justify-center mx-auto mb-6">
                            <span className="text-2xl">🌍</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Our Commitment to the Environment
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            IN Accountancy is a proud Planet Mark member. We are committed to
                            carbon measuring, continuous improvement, and compliance
                            reporting. They enable meaningful CHANGE that creates a more
                            sustainable, equitable world. We believe that businesses have a
                            responsibility to protect the environment and contribute to a
                            better future.
                        </p>
                    </div>
                </div>
            </section>

            <ValuesSection />
            <CTABanner />
            <Footer />
        </>
    );
}

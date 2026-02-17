"use client";

import Link from "next/link";
import { ServiceHero } from "@/components/shared/ServiceHero";
import { CTABanner } from "@/components/shared/CTABanner";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";
import { sectors } from "@/data/sectors";
import { motion } from "framer-motion";

export default function SectorsPage() {
    return (
        <>
            <ServiceHero
                title="Sectors"
                breadcrumbs={[{ label: "Sectors" }]}
            />

            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Specialist Accounting for Your Industry
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            IN Accountancy offers high-quality accounting solutions tailored
                            to different business sectors with different needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {sectors.map((sector, index) => (
                            <motion.div
                                key={sector.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.06 }}
                            >
                                <Link
                                    href={`/sectors/${sector.slug}`}
                                    className="group block h-full"
                                >
                                    <div className="relative h-full overflow-hidden rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                                        {/* Card background */}
                                        <div className="aspect-[4/3] bg-gradient-to-br from-[var(--sage-forest)] to-[var(--sage-emerald)] relative">
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                                                <h3 className="text-white font-semibold text-base">
                                                    {sector.title}
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                                {sector.description}
                                            </p>
                                            <span className="inline-flex items-center text-sm font-medium text-[var(--sage-green)] group-hover:text-[var(--sage-green-dark)] transition-colors">
                                                Learn more
                                                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner />
            <Footer />
        </>
    );
}

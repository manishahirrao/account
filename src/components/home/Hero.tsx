"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-[var(--sage-forest)] min-h-[85vh] flex items-center">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--sage-forest)] via-[var(--sage-forest)]/95 to-[#0d2a23]" />

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[var(--sage-green)]" />
                <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-[var(--sage-green)]" />
            </div>

            <div className="relative container mx-auto px-4 md:px-6 py-16 md:py-24">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center rounded-full bg-[var(--sage-green)]/15 border border-[var(--sage-green)]/30 px-4 py-1.5 text-sm font-medium text-[var(--sage-green)] mb-6">
                            ⭐ Award-Winning Local Accountants
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight"
                    >
                        Straight-talking accounting and tax advice for businesses across{" "}
                        <span className="text-[var(--sage-green)]">
                            Stockport, Cheshire & Greater Manchester
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl"
                    >
                        IN Accountancy are award-winning accountants based in Stockport.
                        We&apos;re local qualified accountants serving small &amp; medium
                        sized businesses, entrepreneurs and individuals in Greater
                        Manchester, Hazel Grove, Bramhall, Poynton, Cheadle Hulme, Cheshire
                        and across the UK.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-8 flex flex-col sm:flex-row gap-4"
                    >
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center bg-[var(--sage-green)] text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-[var(--sage-green-dark)] transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
                        >
                            Book a FREE consultation call
                        </Link>
                        <Link
                            href="/services/business-accounting"
                            className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-white/10 transition-all"
                        >
                            View Our Services
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-8 flex flex-wrap gap-6 text-sm text-gray-300"
                    >
                        {[
                            "Xero Gold Partner",
                            "Fixed Fees",
                            "Proactive Advice",
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-[var(--sage-green)]" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

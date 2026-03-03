"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-[var(--sage-forest)] min-h-[90vh] flex items-center">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--sage-forest)] via-[var(--sage-forest)]/95 to-[#0d2a23]" />

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[var(--sage-green)]" />
                <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-[var(--sage-green)]" />
            </div>

            <div className="relative container mx-auto px-4 md:px-6 py-8 md:py-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center rounded-full bg-[var(--sage-green)]/15 border border-[var(--sage-green)]/30 px-4 py-1.5 text-sm font-medium text-[var(--sage-green)] mb-4">
                                ⭐ Award-Winning Local Accountants
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight"
                        >
                            Straight-talking accounting and tax advice for businesses across{" "}
                            <span className="text-[var(--sage-green)]">
                                Austin, Texas
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-4 text-base text-gray-300 leading-relaxed max-w-2xl"
                        >
                            Award-winning accountants based in Austin. Local qualified CPAs serving small &amp; medium
                            sized businesses, entrepreneurs and individuals across Texas.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-6 flex flex-col sm:flex-row gap-3"
                        >
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center bg-[var(--sage-green)] text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-[var(--sage-green-dark)] transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
                            >
                                Book a FREE consultation call
                            </Link>
                            <Link
                                href="/services/business-accounting"
                                className="inline-flex items-center justify-center border-2 border-white/30 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-white/10 transition-all"
                            >
                                View Our Services
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-6 flex flex-wrap gap-4 text-sm text-gray-300"
                        >
                            {[
                                "Certified Sage Partner",
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

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative rounded-lg overflow-hidden shadow-2xl">
                            <Image
                                src="/home-hero.webp"
                                alt="IN Accountancy - Award-Winning Accountants in Austin, Texas"
                                width={1200}
                                height={800}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

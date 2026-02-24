"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function AwardSection() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Award Winning Austin Accountancy Services
                    </h2>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                        IN Accountancy helps entrepreneurs and individuals pay as little
                        tax as legally possible. All whilst staying firmly on the right
                        side of both the law, and the tax man. Most importantly our
                        clients view us as an extension of their team. We work proactively
                        in partnership with you to help you really understand the numbers
                        that matter in your business and the stories those numbers tell.
                        Above all we&apos;ll ensure you never miss an accounting deadline.
                    </p>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-12 flex justify-center"
                >
                    <div className="flex flex-col items-center gap-3 px-6 py-4 rounded-xl bg-gray-50 border border-gray-100">
                        <div className="w-12 h-12 rounded-full bg-[var(--sage-green-light)] flex items-center justify-center">
                            <Star className="h-6 w-6 text-[var(--sage-emerald)]" />
                        </div>
                        <span className="text-sm font-semibold text-gray-700">
                            5★ Google Reviews
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { solutionCards } from "@/data/services";

export function SolutionsGrid() {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        IN Accountancy Solutions
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        IN-Accountancy is a team of Stockport accountants with a
                        difference… Saving you money. Giving you great value. Making your
                        life easier.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {solutionCards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                        >
                            <Link href={card.href} className="group block h-full">
                                <div className="relative h-full bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:border-[var(--sage-green)]/30 transition-all duration-300 group-hover:-translate-y-1">
                                    <div className="w-12 h-12 rounded-lg bg-[var(--sage-green-light)] flex items-center justify-center mb-4 group-hover:bg-[var(--sage-green)] transition-colors">
                                        <card.icon className="h-6 w-6 text-[var(--sage-emerald)] group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                        {card.title}
                                    </h3>
                                    <p className="text-sm text-gray-500">{card.subtitle}</p>
                                    <div className="mt-4 flex items-center text-sm font-medium text-[var(--sage-green)] opacity-0 group-hover:opacity-100 transition-opacity">
                                        Learn more{" "}
                                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

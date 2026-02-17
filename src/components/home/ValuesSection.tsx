"use client";

import { motion } from "framer-motion";
import { companyValues } from "@/data/values";

export function ValuesSection() {
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
                        Our Values
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        We define ourselves by our values. We&apos;re not your typical
                        stuffy accountants.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {companyValues.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="w-10 h-10 rounded-lg bg-[var(--sage-green-light)] flex items-center justify-center mb-4">
                                <value.icon className="h-5 w-5 text-[var(--sage-emerald)]" />
                            </div>
                            <h3 className="text-base font-semibold text-gray-900 mb-2">
                                {value.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

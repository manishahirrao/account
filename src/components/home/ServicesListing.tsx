"use client";

import { motion } from "framer-motion";
import { serviceColumns } from "@/data/services";

export function ServicesListing() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {serviceColumns.map((column) => (
                            <div key={column.title}>
                                <h3 className="text-lg font-bold text-[var(--sage-forest)] border-b-2 border-[var(--sage-green)] pb-2 mb-4">
                                    {column.title}
                                </h3>
                                <ul className="space-y-2.5">
                                    {column.items.map((item) => (
                                        <li key={item.name}>
                                            <span className="text-sm text-gray-600">
                                                {item.name}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

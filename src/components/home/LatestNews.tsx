"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { latestNews } from "@/data/news";

export function LatestNews() {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-between mb-12"
                >
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Latest News
                        </h2>
                        <p className="mt-2 text-gray-600">
                            Stay up to date with the latest accountancy news and advice.
                        </p>
                    </div>
                    <Link
                        href="/news"
                        className="hidden md:inline-flex items-center text-sm font-semibold text-[var(--sage-green)] hover:text-[var(--sage-green-dark)] transition-colors"
                    >
                        View all news <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {latestNews.map((article, index) => (
                        <motion.div
                            key={article.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <Link href={`/news/${article.slug}`} className="group block h-full">
                                <article className="h-full bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                                    {/* Placeholder image */}
                                    <div className="aspect-video bg-gradient-to-br from-[var(--sage-forest)] to-[var(--sage-emerald)] flex items-center justify-center">
                                        <span className="text-white/60 text-sm">News Image</span>
                                    </div>
                                    <div className="p-5">
                                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                                            <Calendar className="h-3.5 w-3.5" />
                                            <span>
                                                {new Date(article.date).toLocaleDateString("en-GB", {
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric",
                                                })}
                                            </span>
                                        </div>
                                        <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-[var(--sage-green)] transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 line-clamp-3">
                                            {article.excerpt}
                                        </p>
                                        <div className="mt-4 flex items-center text-sm font-medium text-[var(--sage-green)]">
                                            Read Article{" "}
                                            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link
                        href="/news"
                        className="inline-flex items-center text-sm font-semibold text-[var(--sage-green)] hover:text-[var(--sage-green-dark)] transition-colors"
                    >
                        View all news <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { reviews } from "@/data/reviews";
import { useState, useEffect } from "react";

export function GoogleReviews() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Show 3 reviews at a time on desktop
    const getVisibleReviews = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            visible.push(reviews[(activeIndex + i) % reviews.length]);
        }
        return visible;
    };

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="h-5 w-5 text-yellow-400 fill-yellow-400"
                                />
                            ))}
                        </div>
                        <span className="text-sm font-medium text-gray-600">
                            Rated 5/5 on Google
                        </span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        What Our Clients Say
                    </h2>
                </motion.div>

                {/* Review Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {getVisibleReviews().map((review, index) => (
                        <motion.div
                            key={`${review.name}-${activeIndex}-${index}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-gray-50 rounded-xl p-6 border border-gray-100 relative"
                        >
                            <Quote className="h-8 w-8 text-[var(--sage-green)]/20 absolute top-4 right-4" />
                            <div className="flex mb-3">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="h-4 w-4 text-yellow-400 fill-yellow-400"
                                    />
                                ))}
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-4">
                                &ldquo;{review.text}&rdquo;
                            </p>
                            <div className="border-t border-gray-200 pt-3">
                                <p className="text-sm font-semibold text-gray-900">
                                    {review.name}
                                </p>
                                <p className="text-xs text-gray-500">{review.date}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {reviews.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${i === activeIndex
                                    ? "bg-[var(--sage-green)] w-6"
                                    : "bg-gray-300 hover:bg-gray-400"
                                }`}
                            aria-label={`Go to review ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

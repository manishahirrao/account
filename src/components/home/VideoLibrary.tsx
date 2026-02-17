"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
    { title: "Do You Really Lose Money by Earning More? (UK Tax Explained)", id: "1" },
    { title: "Why Britain's Tax Year Makes No Sense", id: "2" },
    { title: "Can I put my daughters wedding through as a business expense?", id: "3" },
    { title: "I've made my 16 year old a shareholder in my biz", id: "4" },
    { title: "Do You Really Trust Your Accounts?", id: "5" },
    { title: "10 ways to reduce your Inheritance Tax Bill", id: "6" },
];

export function VideoLibrary() {
    return (
        <section className="py-16 md:py-24 bg-[var(--sage-forest)]">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Video Library
                    </h2>
                    <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                        Watch our latest videos covering tax tips, business advice, and
                        accounting guidance for UK business owners.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {videos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-video bg-black/30 rounded-xl overflow-hidden border border-white/10 group-hover:border-[var(--sage-green)]/50 transition-all">
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                                    <div className="w-14 h-14 rounded-full bg-[var(--sage-green)] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                                        <Play className="h-6 w-6 text-white ml-0.5" />
                                    </div>
                                </div>
                            </div>
                            <h3 className="mt-3 text-sm font-medium text-gray-200 group-hover:text-[var(--sage-green)] transition-colors line-clamp-2">
                                {video.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

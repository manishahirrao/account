"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Users } from "lucide-react";

export function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-slate-50 py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col justify-center space-y-4"
                    >
                        <div className="inline-flex items-center rounded-lg bg-sky-100 px-3 py-1 text-sm font-medium text-sky-800">
                            Award-Winning Accountants
                        </div>
                        <h1 className="text-3xl font-bold tracking-tighter text-slate-900 sm:text-5xl xl:text-6xl/none">
                            Stockport Accountants & Business Advisors
                        </h1>
                        <p className="max-w-[600px] text-slate-500 md:text-xl dark:text-slate-400">
                            Helping you save money, make money, and make life easier. We are more than just number crunchers.
                        </p>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button size="lg" className="bg-sky-600 hover:bg-sky-700">
                                Book a Free Consultation
                            </Button>
                            <Button size="lg" variant="outline">
                                View Our Services
                            </Button>
                        </div>
                        <div className="flex gap-4 pt-4 text-sm text-slate-500">
                            <div className="flex items-center gap-1">
                                <CheckCircle2 className="h-4 w-4 text-sky-600" />
                                <span>Proactive Advice</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <CheckCircle2 className="h-4 w-4 text-sky-600" />
                                <span>Fixed Fees</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <CheckCircle2 className="h-4 w-4 text-sky-600" />
                                <span>Xero Experts</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last bg-slate-200 flex items-center justify-center shadow-xl"
                    >
                        {/* Placeholder for Hero Image */}
                        <div className="text-center p-8">
                            <Users className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                            <p className="text-slate-500 font-medium">Meet the IN Accountancy Team</p>
                            <p className="text-xs text-slate-400 mt-2">(Image Placeholder)</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -z-10 h-full w-1/3 bg-slate-100/50 skew-x-12 origin-top-right" />
        </section>
    );
}

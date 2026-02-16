"use client";

import { Check } from "lucide-react";

const values = [
    "We Care: About you, your business, your team, and our community.",
    "Continuous Improvement: Always striving to be better for our clients.",
    "Honesty & Integrity: Transparent advice you can trust.",
    "No Jargon: We speak your language, not just accounting terms.",
    "Proactive & Responsive: We contact you before issues arise.",
];

export function Philosophy() {
    return (
        <section className="py-16 md:py-24 bg-slate-50">
            <div className="container px-4 md:px-6">
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                            Why Choose IN Accountancy?
                        </h2>
                        <p className="text-slate-500 text-lg">
                            We define ourselves by our values. We&apos;re not your typical stuffy accountants. We are a dynamic team dedicated to your success.
                        </p>
                        <ul className="space-y-4 pt-4">
                            {values.map((value, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1 bg-sky-100 rounded-full p-1">
                                        <Check className="h-4 w-4 text-sky-600" />
                                    </div>
                                    <span className="text-slate-700">{value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-[400px] bg-slate-200 rounded-2xl overflow-hidden shadow-xl">
                        {/* Placeholder for Philosophy / Team Image */}
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-300">
                            <span className="text-slate-500 font-medium">Team Approach Image Placeholder</span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6 text-white">
                            <p className="font-semibold text-lg">&quot;Making life easier for business owners.&quot;</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

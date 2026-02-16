"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Calculator, LineChart, Laptop, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        title: "Business Accounting",
        description: "Comprehensive accounting including bookkeeping, payroll, VAT, and Corporation Tax. We handle the numbers so you can focus on growth.",
        icon: Calculator,
        href: "#accounting",
    },
    {
        title: "Business Advisory",
        description: "Strategic advice to help you grow profits, manage cashflow, and plan for the future. We are your partners in business success.",
        icon: LineChart,
        href: "#advisory",
    },
    {
        title: "Tax Services",
        description: "Expert personal and corporate tax planning to ensure you pay the right amount and no more. Efficient and compliant tax solutions.",
        icon: Building2, // Using Building2 as a proxy for 'structure/tax' or maybe Coins would be better but Building implies Corporate Tax
        href: "#tax",
    },
    {
        title: "Digital Accounting",
        description: "Specialists in Xero, QuickBooks, and Sage. We help you digitize your finances for real-time insights and easier management.",
        icon: Laptop,
        href: "#digital",
    },
];

export function Services() {
    return (
        <section id="services" className="py-16 md:py-24 bg-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-500">
                        Our Expertise
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                        More Than Just &quot;Number Crunching&quot;
                    </h2>
                    <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                        We provide a full range of accountancy and advisory services tailored to your needs.
                    </p>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <Card className="h-full border-slate-100 shadow-sm hover:shadow-md hover:border-sky-100 transition-all">
                                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                    <div className="bg-sky-50 p-2 rounded-lg">
                                        <service.icon className="h-6 w-6 text-sky-600" />
                                    </div>
                                    <CardTitle className="text-xl text-slate-800">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-500 mb-4">{service.description}</p>
                                    <Link href={service.href} className="inline-flex items-center text-sm font-medium text-sky-600 hover:text-sky-700 hover:underline underline-offset-4">
                                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

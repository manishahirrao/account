import type { Metadata } from "next";
import Link from "next/link";
import { ServiceHero } from "@/components/shared/ServiceHero";
import { ValuesSection } from "@/components/home/ValuesSection";
import { CTABanner } from "@/components/shared/CTABanner";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle2, Mail, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Personal Tax Accounting Services | Tax Advisor Austin",
    description:
        "Looking for a personal tax accountant in Austin? IN Accountancy provides tax reclaims, federal and state tax returns, and expert tax advice.",
};

const services = [
    "Claiming refunds and tax reclaims",
    "Completing and filing your tax returns correctly and on time",
    "Advising on your tax affairs to minimise your liability",
    "Liaising with HMRC on your behalf",
];

const reclaims = [
    "Gift aid on charitable donations",
    "Child tax credits",
    "Business mileage",
    "Pension contributions",
    "Uniform and professional subscription tax relief",
];

export default function PersonalTaxPage() {
    return (
        <>
            <ServiceHero
                title="Personal Tax Accounting Services"
                breadcrumbs={[
                    { label: "For Individuals", href: "/services/personal-tax" },
                    { label: "Personal Tax" },
                ]}
            />

            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Let IN Accountancy — your personal tax accountants deal with
                                everything.
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Whether you need help completing your federal and state tax
                                return, claiming tax refunds, or just want expert advice on
                                minimising your tax liability, our team of personal tax
                                specialists are here to help. We make the process simple and
                                stress-free, so you can focus on what matters.
                            </p>

                            {/* What We Do */}
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Our Personal Tax Services Include:
                            </h3>
                            <ul className="space-y-3 mb-10">
                                {services.map((s) => (
                                    <li key={s} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-[var(--sage-green)] shrink-0 mt-0.5" />
                                        <span className="text-gray-600">{s}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Tax Reclaims */}
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Tax Reclaims
                            </h3>
                            <p className="text-gray-600 mb-4">
                                You may be entitled to claim tax back on a number of items. Our
                                team can help you reclaim tax on:
                            </p>
                            <ul className="space-y-3 mb-10">
                                {reclaims.map((r) => (
                                    <li key={r} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-[var(--sage-green)] shrink-0 mt-0.5" />
                                        <span className="text-gray-600">{r}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1 space-y-6">
                            <div className="bg-[var(--sage-forest)] rounded-xl p-6 text-white">
                                <h3 className="text-lg font-bold mb-3">
                                    Get Personal Tax Help
                                </h3>
                                <p className="text-sm text-gray-300 mb-4">
                                    Our personal tax team is ready to help you. Contact us for a
                                    free initial consultation.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center bg-[var(--sage-green)] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[var(--sage-green-dark)] transition-colors w-full justify-center"
                                >
                                    Get in Touch
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                                <div className="mt-4 space-y-2 text-sm">
                                    <a
                                        href="mailto:askus@in-accountancy.com"
                                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                                    >
                                        <Mail className="h-4 w-4" />
                                        askus@in-accountancy.com
                                    </a>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                <h3 className="font-semibold text-gray-900 mb-4">
                                    Related Services
                                </h3>
                                <ul className="space-y-2">
                                    {[
                                        "Tax Filing",
                                        "Business Accounting",
                                        "Tax Planning",
                                    ].map((s) => (
                                        <li key={s}>
                                            <span className="flex items-center gap-2 text-sm text-gray-600 py-1">
                                                <ArrowRight className="h-3.5 w-3.5" />
                                                {s}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <ValuesSection />
            <CTABanner />
            <Footer />
        </>
    );
}

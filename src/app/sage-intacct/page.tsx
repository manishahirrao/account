import type { Metadata } from "next";
import Link from "next/link";
import { ServiceHero } from "@/components/shared/ServiceHero";
import { CTABanner } from "@/components/shared/CTABanner";
import { Footer } from "@/components/layout/Footer";
import {
    Brain,
    Cloud,
    BarChart3,
    Globe,
    Layers,
    ShieldCheck,
    ArrowRight,
    CheckCircle2,
    Sparkles,
    Building2,
    FileText,
    TrendingUp,
    Users,
    Banknote,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Sage Intacct | AI-Powered Cloud Financial Management",
    description:
        "Sage Intacct delivers AI-powered cloud financial management with real-time insights, generative AI assistant, and India localization suite.",
};

const features = [
    {
        icon: Brain,
        title: "AI-Powered Insights",
        description:
            "Leverage a generative AI assistant that provides intelligent recommendations, anomaly detection, and predictive financial analysis to make smarter decisions.",
    },
    {
        icon: Cloud,
        title: "True Cloud Architecture",
        description:
            "Born in the cloud — no on-premise infrastructure needed. Access your financials from anywhere with automatic updates and enterprise-grade security.",
    },
    {
        icon: BarChart3,
        title: "Real-Time Reporting",
        description:
            "Create multi-dimensional reports and dashboards instantly. Drill down into any metric for deep financial visibility across your organisation.",
    },
    {
        icon: Globe,
        title: "India Localization Suite",
        description:
            "Purpose-built for Indian businesses with GST compliance, TDS/TCS management, Indian chart of accounts, and regulatory reporting built-in.",
    },
    {
        icon: Building2,
        title: "Multi-Entity Management",
        description:
            "Consolidate financials across multiple entities, currencies, and locations in real-time — eliminating spreadsheets and manual consolidation.",
    },
    {
        icon: Layers,
        title: "Seamless Integrations",
        description:
            "Connect with Salesforce, payroll systems, banks, and 300+ third-party applications through an open API architecture.",
    },
];

const capabilities = [
    {
        icon: FileText,
        title: "Accounts Payable & Receivable",
        items: [
            "Automated invoice processing",
            "Smart payment scheduling",
            "Cash application management",
            "Vendor portal access",
        ],
    },
    {
        icon: TrendingUp,
        title: "Revenue Recognition",
        items: [
            "ASC 606 / IFRS 15 compliance",
            "Automated revenue schedules",
            "Contract management",
            "Deferred revenue tracking",
        ],
    },
    {
        icon: Banknote,
        title: "Cash Management",
        items: [
            "Bank reconciliation automation",
            "Cash flow forecasting",
            "Multi-currency management",
            "Treasury management",
        ],
    },
    {
        icon: Users,
        title: "Project Accounting",
        items: [
            "Time and expense tracking",
            "Project budgeting & billing",
            "Resource utilisation reports",
            "Profitability analysis",
        ],
    },
];

const stats = [
    { value: "99.8%", label: "Uptime Guarantee" },
    { value: "4.5★", label: "G2 Rating" },
    { value: "300+", label: "Integrations" },
    { value: "25,000+", label: "Global Customers" },
];

export default function SageIntacctPage() {
    return (
        <>
            <ServiceHero
                title="Sage Intacct"
                breadcrumbs={[
                    { label: "Sage Products", href: "/sage-intacct" },
                    { label: "Sage Intacct" },
                ]}
            />

            {/* Product Overview */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block text-xs font-bold tracking-widest text-[var(--sage-green)] uppercase mb-3">
                                Next-Gen Financial Software
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                AI-Powered Financial
                                <br />
                                <span className="text-[var(--sage-green)]">Management in the Cloud</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Sage Intacct is the leading cloud financial management solution that delivers
                                deep accounting capabilities to accelerate your business performance. Powered by
                                AI, it provides real-time insights into your financial data with a generative
                                AI assistant and a special focus on India localization.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Automate complex financial processes, gain real-time visibility across your
                                organisation, and make confident decisions backed by intelligent data — all
                                from a single, secure cloud platform.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center bg-[var(--sage-green)] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[var(--sage-green-dark)] transition-colors shadow-sm"
                                >
                                    <Sparkles className="mr-2 h-4 w-4" />
                                    See Intacct in Action
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center border-2 border-[var(--sage-forest)] text-[var(--sage-forest)] px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[var(--sage-forest)] hover:text-white transition-colors"
                                >
                                    Request Pricing
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-[var(--sage-green-light)] to-white rounded-2xl p-8 border border-gray-100">
                                <div className="grid grid-cols-2 gap-4">
                                    {stats.map((stat) => (
                                        <div
                                            key={stat.label}
                                            className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-50"
                                        >
                                            <div className="text-2xl font-bold text-[var(--sage-forest)] mb-1">
                                                {stat.value}
                                            </div>
                                            <div className="text-xs text-gray-500 font-medium">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-bold tracking-widest text-[var(--sage-green)] uppercase mb-3">
                            Key Capabilities
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Sage Intacct Stands Out
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Purpose-built for finance professionals who demand more from their financial management platform.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="group bg-white rounded-xl p-7 border border-gray-100 hover:border-[var(--sage-green)] hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-[var(--sage-green-light)] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[var(--sage-green)] transition-colors">
                                    <feature.icon className="h-6 w-6 text-[var(--sage-forest)] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Capabilities */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-bold tracking-widest text-[var(--sage-green)] uppercase mb-3">
                            Deep Accounting
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Financial Management Modules
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {capabilities.map((cap) => (
                            <div
                                key={cap.title}
                                className="bg-[var(--sage-forest)] rounded-2xl p-8 text-white"
                            >
                                <cap.icon className="h-10 w-10 text-[var(--sage-green)] mb-5" />
                                <h3 className="text-xl font-bold mb-4">{cap.title}</h3>
                                <ul className="space-y-3">
                                    {cap.items.map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                                            <CheckCircle2 className="h-4 w-4 text-[var(--sage-green)] shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* India Localization CTA */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="bg-gradient-to-r from-[var(--sage-forest)] to-[#0d2a23] rounded-2xl p-10 md:p-14 text-center text-white">
                        <ShieldCheck className="h-12 w-12 text-[var(--sage-green)] mx-auto mb-6" />
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            India Localization Suite
                        </h2>
                        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                            Sage Intacct comes with a purpose-built India Localization Suite — featuring
                            GST compliance, TDS/TCS management, Indian chart of accounts, and all
                            statutory reporting requirements built right in.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center bg-[var(--sage-green)] text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-[var(--sage-green-dark)] transition-colors shadow-sm"
                        >
                            Learn More About India Suite
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <CTABanner />
            <Footer />
        </>
    );
}

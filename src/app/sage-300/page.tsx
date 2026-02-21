import type { Metadata } from "next";
import Link from "next/link";
import { ServiceHero } from "@/components/shared/ServiceHero";
import { CTABanner } from "@/components/shared/CTABanner";
import { Footer } from "@/components/layout/Footer";
import {
    BarChart3,
    Globe,
    ShieldCheck,
    Layers,
    Settings,
    TrendingUp,
    Package,
    CreditCard,
    Users,
    ArrowRight,
    CheckCircle2,
    Factory,
    Pill,
    Car,
    Armchair,
    FlaskConical,
    UtensilsCrossed,
    Cpu,
    Wrench,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Sage 300 ERP | Integrated Business Management Solution",
    description:
        "Sage 300 is a comprehensive ERP platform that helps manage finances, supply chain, inventory, and operations for small to mid-sized businesses.",
};

const features = [
    {
        icon: CreditCard,
        title: "Financial Management",
        description:
            "Manage your bottom line with real-time multi-currency, multi-company financial visibility. Automate invoicing, AP/AR, and bank reconciliations.",
    },
    {
        icon: Package,
        title: "Inventory Management",
        description:
            "Track, label, monitor, and control your stock in real-time. Barcode scanning, IoT integration, and intelligent forecasting keep inventory optimised.",
    },
    {
        icon: TrendingUp,
        title: "Sales Management",
        description:
            "Manage the entire sales cycle — from pipeline visualisation and tracking to automated purchase orders and sales conversion analytics.",
    },
    {
        icon: Settings,
        title: "Procurement & AP Automation",
        description:
            "Automate your source-to-pay cycle including vendor management, purchase invoicing, and accounts payable to eliminate manual tasks.",
    },
    {
        icon: Layers,
        title: "Warehouse Management",
        description:
            "Get full visibility of warehouse operations — from dock and yard management to labour scheduling and shipping logistics.",
    },
    {
        icon: Globe,
        title: "Supply Chain Management",
        description:
            "Monitor the entire supply chain network with real-time KPIs, accurate forecasting, logistics tracking, and full automation.",
    },
];

const benefits = [
    "Multi-currency and multi-company support for global operations",
    "Cloud-based access — work from anywhere, anytime",
    "Scalable and customisable to your unique business needs",
    "Robust reporting with business intelligence dashboards",
    "Seamless integration with Sage CRM and third-party tools",
    "Comprehensive audit trail and regulatory compliance",
];

const industries = [
    { icon: Factory, name: "Manufacturing" },
    { icon: Pill, name: "Pharmaceuticals" },
    { icon: Car, name: "Automotive" },
    { icon: Armchair, name: "Furniture" },
    { icon: FlaskConical, name: "Chemical" },
    { icon: UtensilsCrossed, name: "Food & Beverage" },
    { icon: Cpu, name: "IT Services" },
    { icon: Wrench, name: "Engineering" },
];

export default function Sage300Page() {
    return (
        <>
            <ServiceHero
                title="Sage 300"
                breadcrumbs={[
                    { label: "Sage Products", href: "/sage-300" },
                    { label: "Sage 300" },
                ]}
            />

            {/* Product Overview */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block text-xs font-bold tracking-widest text-[var(--sage-green)] uppercase mb-3">
                                Integrated ERP Platform
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                Manage Your Entire Business
                                <br />
                                <span className="text-[var(--sage-green)]">With One Powerful Solution</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Sage 300 is a comprehensive cloud-based enterprise resource planning system
                                supporting the business processes of small and medium-sized companies globally.
                                It aids core business processes like manufacturing, customer service, business intelligence,
                                vendor management, sales &amp; marketing, and operations.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Meticulously tailored to provide perfect management solutions for business-critical
                                functions, Sage 300 is embedded with all the essential tools required to improve
                                your business efficiency, competitiveness, and growth potential.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center bg-[var(--sage-green)] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[var(--sage-green-dark)] transition-colors shadow-sm"
                                >
                                    Schedule Product Demo
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center border-2 border-[var(--sage-forest)] text-[var(--sage-forest)] px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[var(--sage-forest)] hover:text-white transition-colors"
                                >
                                    Get a Free Quote
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-[var(--sage-green-light)] to-white rounded-2xl p-8 border border-gray-100">
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { label: "Companies Worldwide", value: "40,000+" },
                                        { label: "Countries Supported", value: "150+" },
                                        { label: "Years of Excellence", value: "30+" },
                                        { label: "Industry Solutions", value: "20+" },
                                    ].map((stat) => (
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
                            Core Modules
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Top Sage 300 ERP Modules
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            A complete suite of integrated modules designed to streamline every aspect of your business operations.
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

            {/* Benefits */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block text-xs font-bold tracking-widest text-[var(--sage-green)] uppercase mb-3">
                                Why Sage 300
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Benefits That Drive Results
                            </h2>
                            <ul className="space-y-4">
                                {benefits.map((benefit) => (
                                    <li key={benefit} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-[var(--sage-green)] shrink-0 mt-0.5" />
                                        <span className="text-gray-600">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-[var(--sage-forest)] rounded-2xl p-8 text-white">
                            <BarChart3 className="h-10 w-10 text-[var(--sage-green)] mb-6" />
                            <h3 className="text-xl font-bold mb-4">
                                Sage 300 ERP Dashboards
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                Access advanced business intelligence dashboards that provide real-time
                                insights into financial performance, inventory levels, sales trends, and
                                operational efficiency — all from a single, intuitive interface.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center bg-[var(--sage-green)] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[var(--sage-green-dark)] transition-colors"
                            >
                                Request a Demo
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-bold tracking-widest text-[var(--sage-green)] uppercase mb-3">
                            Industries We Serve
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Trusted Across Industries
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Sage 300 powers businesses across diverse sectors with industry-specific solutions.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {industries.map((industry) => (
                            <div
                                key={industry.name}
                                className="group bg-white rounded-xl p-6 text-center border border-gray-100 hover:border-[var(--sage-green)] hover:shadow-md transition-all duration-300 cursor-default"
                            >
                                <div className="w-14 h-14 bg-[var(--sage-green-light)] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[var(--sage-green)] transition-colors">
                                    <industry.icon className="h-6 w-6 text-[var(--sage-forest)] group-hover:text-white transition-colors" />
                                </div>
                                <span className="text-sm font-semibold text-gray-700">
                                    {industry.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner />
            <Footer />
        </>
    );
}

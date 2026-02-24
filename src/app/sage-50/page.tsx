import type { Metadata } from "next";
import Link from "next/link";
import { ServiceHero } from "@/components/shared/ServiceHero";
import { CTABanner } from "@/components/shared/CTABanner";
import { Footer } from "@/components/layout/Footer";
import {
    Calculator,
    DollarSign,
    FileText,
    Users,
    TrendingUp,
    Clock,
    Shield,
    Zap,
    ArrowRight,
    CheckCircle2,
    Building2,
    Package,
    BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Sage 50 Accounting | Desktop Accounting Software for Small Business",
    description:
        "Sage 50 is powerful desktop accounting software designed for small to medium-sized businesses. Manage finances, inventory, payroll, and more with ease.",
};

const features = [
    {
        icon: Calculator,
        title: "Accounting & Financial Management",
        description:
            "Complete accounting solution with general ledger, accounts payable, accounts receivable, and bank reconciliation.",
    },
    {
        icon: Package,
        title: "Inventory Management",
        description:
            "Track inventory levels, manage stock, create purchase orders, and monitor product performance in real-time.",
    },
    {
        icon: Users,
        title: "Payroll Processing",
        description:
            "Integrated payroll module to run payroll, set up vacation/sick time, and create W-2s, tax forms, and more.",
    },
    {
        icon: FileText,
        title: "Invoicing & Billing",
        description:
            "Create professional invoices, track payments, manage recurring billing, and automate payment reminders.",
    },
    {
        icon: BarChart3,
        title: "Business Intelligence & Reporting",
        description:
            "Access over 100 customizable reports and dashboards to gain insights into your business performance.",
    },
    {
        icon: DollarSign,
        title: "Cash Flow Management",
        description:
            "Monitor cash flow, track expenses, manage budgets, and forecast future financial performance.",
    },
];

const benefits = [
    "Desktop-based software with cloud connectivity options",
    "Supports up to 40 users simultaneously",
    "Industry-specific editions available",
    "Integrated with Microsoft Office and other business tools",
    "Comprehensive audit trail and security features",
    "Scalable from Pro to Premium to Quantum editions",
];

const editions = [
    {
        name: "Pro Accounting",
        description: "Perfect for small businesses with basic accounting needs",
        features: [
            "Up to 5 users",
            "Core accounting features",
            "Basic inventory management",
            "Standard reporting",
        ],
    },
    {
        name: "Premium Accounting",
        description: "Ideal for growing businesses with advanced requirements",
        features: [
            "Up to 5 users",
            "Advanced inventory & job costing",
            "Enhanced reporting & dashboards",
            "Multi-currency support",
        ],
    },
    {
        name: "Quantum Accounting",
        description: "Enterprise-level solution for larger organizations",
        features: [
            "Up to 40 users",
            "Advanced features & customization",
            "Comprehensive business intelligence",
            "Priority support",
        ],
    },
];

export default function Sage50Page() {
    return (
        <>
            <ServiceHero
                title="Sage 50"
                breadcrumbs={[
                    { label: "Sage Products", href: "/sage-50" },
                    { label: "Sage 50" },
                ]}
            />

            {/* Product Overview */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block text-xs font-bold tracking-widest text-[var(--sage-green)] uppercase mb-3">
                                Desktop Accounting Software
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                Powerful Accounting Software
                                <br />
                                <span className="text-[var(--sage-green)]">Built for Small Business</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Sage 50 is a comprehensive desktop accounting solution designed specifically for
                                small to medium-sized businesses. With powerful features for financial management,
                                inventory control, and business intelligence, Sage 50 helps you manage your entire
                                business from one integrated platform.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Whether you're a startup or an established business, Sage 50 scales with your needs,
                                offering three editions (Pro, Premium, and Quantum) to match your business requirements
                                and growth trajectory.
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
                                        { label: "Time Saved", value: "18hrs", icon: Clock },
                                        { label: "Users Supported", value: "40", icon: Users },
                                        { label: "Reports Available", value: "100+", icon: FileText },
                                        { label: "Years Trusted", value: "30+", icon: Shield },
                                    ].map((stat) => (
                                        <div
                                            key={stat.label}
                                            className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-50"
                                        >
                                            <stat.icon className="h-6 w-6 text-[var(--sage-green)] mx-auto mb-2" />
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
                            Core Features
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Everything You Need to Run Your Business
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Sage 50 provides a complete suite of tools to manage your finances, inventory, payroll, and more.
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

            {/* Editions */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-bold tracking-widest text-[var(--sage-green)] uppercase mb-3">
                            Choose Your Edition
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Sage 50 Editions
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Select the edition that best fits your business size and requirements.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {editions.map((edition, index) => (
                            <div
                                key={edition.name}
                                className={`rounded-xl p-8 border-2 ${
                                    index === 1
                                        ? "border-[var(--sage-green)] bg-[var(--sage-green-light)] shadow-lg scale-105"
                                        : "border-gray-200 bg-white"
                                }`}
                            >
                                {index === 1 && (
                                    <div className="inline-block bg-[var(--sage-green)] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                                        MOST POPULAR
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {edition.name}
                                </h3>
                                <p className="text-sm text-gray-600 mb-6">
                                    {edition.description}
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {edition.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-[var(--sage-green)] shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/contact"
                                    className={`block w-full text-center px-6 py-3 rounded-lg text-sm font-semibold transition-colors ${
                                        index === 1
                                            ? "bg-[var(--sage-green)] text-white hover:bg-[var(--sage-green-dark)]"
                                            : "border-2 border-[var(--sage-forest)] text-[var(--sage-forest)] hover:bg-[var(--sage-forest)] hover:text-white"
                                    }`}
                                >
                                    Get Started
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block text-xs font-bold tracking-widest text-[var(--sage-green)] uppercase mb-3">
                                Why Sage 50
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Benefits That Drive Success
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
                            <TrendingUp className="h-10 w-10 text-[var(--sage-green)] mb-6" />
                            <h3 className="text-xl font-bold mb-4">
                                Real Results from Real Businesses
                            </h3>
                            <blockquote className="text-gray-300 text-sm leading-relaxed mb-4 italic">
                                "We went from an 18-hour day down to an eight-hour day. Then we cut it down to four hours.
                                Then they got it down to about three hours. And now this year, we've turned it into less
                                than a three-minute job."
                            </blockquote>
                            <p className="text-sm font-semibold text-[var(--sage-green)]">
                                Paul Young, President
                            </p>
                            <p className="text-xs text-gray-400 mb-6">
                                American Financial Management
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center bg-[var(--sage-green)] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[var(--sage-green-dark)] transition-colors"
                            >
                                See How We Can Help
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner />
            <Footer />
        </>
    );
}

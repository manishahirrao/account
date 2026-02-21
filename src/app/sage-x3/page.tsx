import type { Metadata } from "next";
import Link from "next/link";
import { ServiceHero } from "@/components/shared/ServiceHero";
import { CTABanner } from "@/components/shared/CTABanner";
import { Footer } from "@/components/layout/Footer";
import {
    Eye,
    Zap,
    Workflow,
    Puzzle,
    Move,
    Rocket,
    Package,
    Landmark,
    Factory,
    ArrowRight,
    CheckCircle2,
    Pill,
    Car,
    Armchair,
    FlaskConical,
    UtensilsCrossed,
    Cpu,
    Wrench,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Sage X3 | Enterprise Management for Business Profitability",
    description:
        "Sage X3 is a powerful next-generation ERP application for mid-to-large enterprises — delivering faster, simpler, and flexible business management.",
};

const benefits = [
    {
        icon: Eye,
        title: "Total Control & Visibility",
        description:
            "Sage X3 adapts to users' preferences, distinctive roles and provides safe and secure mobile and cloud access to the data they need. Multiple tools simplify your company's processes, giving you total control.",
    },
    {
        icon: Zap,
        title: "Powerful and Convenient",
        description:
            "Specially customised for mid-sized companies, allowing them to take full advantage of all capabilities at the most affordable rates. Quick to deploy, easy to use, and highly customisable.",
    },
    {
        icon: Workflow,
        title: "Smooth & Quicker Workflow",
        description:
            "From procuring raw materials to producing finished products, warehouse management, sales, and customer relationships — all processes are lightning-fast on a single platform.",
    },
    {
        icon: Puzzle,
        title: "Embraces Technologies",
        description:
            "Open architecture that works well with all leading technologies. Flexible to embrace plugins and third-party systems, boosting your business efficiency.",
    },
    {
        icon: Move,
        title: "Flexible and Agile",
        description:
            "Provides customised solutions to your specific business challenges. Manage everything on the cloud from anywhere, anytime, through any connected device.",
    },
    {
        icon: Rocket,
        title: "Future-Ready Platform",
        description:
            "Built for growth with a scalable architecture that evolves with your business. Stay ahead of the competition with continuous innovation and updates.",
    },
];

const coreModules = [
    {
        icon: Package,
        title: "Supply Chain Management",
        description:
            "Monitor your inventory in real-time. Control costs, ensure stock never falls below thresholds, and keep up with consumer demand.",
        features: ["Inventory Management", "Customer Service", "Purchasing", "Sales Management"],
    },
    {
        icon: Landmark,
        title: "Financial Management",
        description:
            "Manage your bottom line accurately with real-time global visibility. Meet local demands with precision.",
        features: ["Fixed Asset Management", "Budgets & Accounting", "Financial Reporting"],
    },
    {
        icon: Factory,
        title: "Production Management",
        description:
            "Accelerate production speed and introduce new products to markets quickly with full shop floor control.",
        features: ["Shop Floor Control", "Project Management", "BOM Planning", "Quality Control"],
    },
];

const industries = [
    { icon: Factory, name: "Manufacturing" },
    { icon: Pill, name: "Pharmaceuticals" },
    { icon: Car, name: "Automotive" },
    { icon: Armchair, name: "Furniture" },
    { icon: FlaskConical, name: "Chemical" },
    { icon: UtensilsCrossed, name: "Food & Beverage" },
    { icon: Cpu, name: "Medical Devices" },
    { icon: Wrench, name: "Engineering" },
];

export default function SageX3Page() {
    return (
        <>
            <ServiceHero
                title="Sage X3"
                breadcrumbs={[
                    { label: "Sage Products", href: "/sage-x3" },
                    { label: "Sage X3" },
                ]}
            />

            {/* Product Overview */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block text-xs font-bold tracking-widest text-[var(--sage-green)] uppercase mb-3">
                                Modern ERP Application
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                A Powerful ERP for
                                <br />
                                <span className="text-[var(--sage-green)]">Business Profitability</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Sage X3 ERP software is a leading and trusted technology implemented in various
                                industries to manage everyday core business operations. It is a powerhouse for
                                agile, flexible, efficient, cost-effective and profitable business management solutions.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Sage X3 helps you take complete control of your business through its customised
                                solutions, offering full integration with purchasing, financing, sales, inventory,
                                and manufacturing to enhance business efficiency and meet customer demands.
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
                                    Download Brochure
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-[var(--sage-green-light)] to-white rounded-2xl p-8 border border-gray-100">
                                <div className="space-y-4">
                                    {[
                                        { label: "Gain complete control over your entire supply chain" },
                                        { label: "Analyse organisational performance in real-time" },
                                        { label: "Manage business operations at a lower cost" },
                                        { label: "Cloud-first architecture for anywhere access" },
                                        { label: "Customisable to your industry-specific needs" },
                                    ].map((item) => (
                                        <div
                                            key={item.label}
                                            className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm border border-gray-50"
                                        >
                                            <CheckCircle2 className="h-5 w-5 text-[var(--sage-green)] shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700 font-medium">
                                                {item.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-bold tracking-widest text-[var(--sage-green)] uppercase mb-3">
                            Why Choose Sage X3
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Benefits of Sage X3 ERP
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Discover why leading enterprises trust Sage X3 for their business management needs.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit) => (
                            <div
                                key={benefit.title}
                                className="group bg-white rounded-xl p-7 border border-gray-100 hover:border-[var(--sage-green)] hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-[var(--sage-green-light)] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[var(--sage-green)] transition-colors">
                                    <benefit.icon className="h-6 w-6 text-[var(--sage-forest)] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Modules */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-bold tracking-widest text-[var(--sage-green)] uppercase mb-3">
                            Core Capabilities
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Core Modules of Sage X3 ERP
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {coreModules.map((module) => (
                            <div
                                key={module.title}
                                className="bg-[var(--sage-forest)] rounded-2xl p-8 text-white hover:scale-[1.02] transition-transform duration-300"
                            >
                                <module.icon className="h-10 w-10 text-[var(--sage-green)] mb-5" />
                                <h3 className="text-xl font-bold mb-3">{module.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                                    {module.description}
                                </p>
                                <ul className="space-y-2">
                                    {module.features.map((f) => (
                                        <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                                            <CheckCircle2 className="h-4 w-4 text-[var(--sage-green)] shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-bold tracking-widest text-[var(--sage-green)] uppercase mb-3">
                            Industries
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Top Sage X3 ERP Industries
                        </h2>
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

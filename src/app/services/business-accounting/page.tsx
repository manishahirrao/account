import type { Metadata } from "next";
import Link from "next/link";
import { ServiceHero } from "@/components/shared/ServiceHero";
import { ValuesSection } from "@/components/home/ValuesSection";
import { CTABanner } from "@/components/shared/CTABanner";
import { Footer } from "@/components/layout/Footer";
import {
    CheckCircle2,
    Phone,
    Mail,
    ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Business Accounting | IN Accountancy Stockport",
    description:
        "IN Accountancy Stockport providing cost effective accounting & tax services for sole traders, limited companies, partnerships and LLPs.",
};

const benefits = [
    "Know your financial standing at all times",
    "Stay HMRC compliant, hassle-free",
    "Expert advice from qualified accountants",
    "Save time and focus on growing your business",
    "Full suite of accountancy services under one roof",
];

const coreServices = [
    {
        title: "Bookkeeping",
        desc: "Accurate, cloud-based bookkeeping giving you real-time insight into your finances.",
    },
    {
        title: "VAT Returns",
        desc: "Timely VAT return preparation and submission, ensuring complete compliance.",
    },
    {
        title: "Payroll",
        desc: "Comprehensive payroll services including RTI, pension auto-enrolment, and payslips.",
    },
    {
        title: "Management Accounts",
        desc: "Monthly or quarterly reports to help you make informed business decisions.",
    },
    {
        title: "Year End Accounts & Tax Returns",
        desc: "Efficient preparation of statutory accounts and corporation tax returns.",
    },
];

export default function BusinessAccountingPage() {
    return (
        <>
            <ServiceHero
                title="Business Accounting: Support That Grows With You"
                breadcrumbs={[
                    { label: "For Businesses", href: "/services/business-accounting" },
                    { label: "Business Accounting" },
                ]}
            />

            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Whether you&apos;re a sole trader, limited company, partnership
                                or LLP, having the right accounting support behind you can make
                                all the difference.
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                A digital accounting specialist and Xero Gold Partner, IN
                                Accountancy has a solution for all your small business needs.
                                From bookkeeping to limited company accounts; personal and
                                partnership tax; to payroll. From filing your VAT returns, to
                                supporting you with your cashflow forecasting, we pride
                                ourselves on our expert accountancy services and helping our
                                clients solve their business finance challenges.
                            </p>

                            {/* Benefits */}
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                With our support, you&apos;ll:
                            </h3>
                            <ul className="space-y-3 mb-10">
                                {benefits.map((benefit) => (
                                    <li key={benefit} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-[var(--sage-green)] shrink-0 mt-0.5" />
                                        <span className="text-gray-600">{benefit}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Core Services */}
                            <h3 className="text-xl font-bold text-gray-900 mb-6">
                                Our Core Accounting Services
                            </h3>
                            <div className="space-y-4">
                                {coreServices.map((service) => (
                                    <div
                                        key={service.title}
                                        className="bg-gray-50 rounded-xl p-5 border border-gray-100"
                                    >
                                        <h4 className="font-semibold text-gray-900 mb-1">
                                            {service.title}
                                        </h4>
                                        <p className="text-sm text-gray-600">{service.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1 space-y-6">
                            {/* CTA Box */}
                            <div className="bg-[var(--sage-forest)] rounded-xl p-6 text-white">
                                <h3 className="text-lg font-bold mb-3">Get a Quote</h3>
                                <p className="text-sm text-gray-300 mb-4">
                                    Ready to take the stress out of your business accounting?
                                    Contact us for a free, no-obligation consultation.
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
                                        href="tel:+441614569666"
                                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                                    >
                                        <Phone className="h-4 w-4" />
                                        0161 456 9666
                                    </a>
                                    <a
                                        href="mailto:askus@in-accountancy.co.uk"
                                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                                    >
                                        <Mail className="h-4 w-4" />
                                        askus@in-accountancy.co.uk
                                    </a>
                                </div>
                            </div>

                            {/* Related Services */}
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                <h3 className="font-semibold text-gray-900 mb-4">
                                    Related Services
                                </h3>
                                <ul className="space-y-2">
                                    {[
                                        { name: "Business Advisory", href: "/services/business-advisory" },
                                        { name: "Tax Planning", href: "/services/tax-planning" },
                                        { name: "Payroll", href: "/services/payroll" },
                                        { name: "VAT Services", href: "/services/vat-services" },
                                        { name: "Corporation Tax", href: "/services/corporation-tax" },
                                    ].map((s) => (
                                        <li key={s.name}>
                                            <Link
                                                href={s.href}
                                                className="flex items-center gap-2 text-sm text-gray-600 hover:text-[var(--sage-green)] transition-colors py-1"
                                            >
                                                <ArrowRight className="h-3.5 w-3.5" />
                                                {s.name}
                                            </Link>
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

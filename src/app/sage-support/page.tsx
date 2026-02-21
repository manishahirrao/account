import type { Metadata } from "next";
import Link from "next/link";
import { ServiceHero } from "@/components/shared/ServiceHero";
import { CTABanner } from "@/components/shared/CTABanner";
import { Footer } from "@/components/layout/Footer";
import {
    Headphones, Settings, GraduationCap, ArrowUpCircle, Wrench, Clock,
    ArrowRight, CheckCircle2, Shield, Users, MessageSquare, BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Sage Support | Expert Implementation, Training & Support Services",
    description: "Get expert Sage support services including implementation, training, upgrades, customization, and dedicated helpdesk for all Sage products.",
};

const services = [
    { icon: Settings, title: "Implementation Services", description: "End-to-end Sage implementation with detailed planning, data migration, system configuration, integration setup, and go-live support." },
    { icon: GraduationCap, title: "Training & Education", description: "Comprehensive training programs for your team — from beginner onboarding to advanced modules — with hands-on workshops and documentation." },
    { icon: ArrowUpCircle, title: "Upgrades & Migration", description: "Seamless upgrades to the latest Sage versions. We handle data migration, testing, and deployment with zero downtime." },
    { icon: Wrench, title: "Customization & Development", description: "Tailor Sage products to your exact business requirements with custom modules, workflows, reports, and integrations." },
    { icon: Headphones, title: "Dedicated Helpdesk", description: "Multi-channel support via phone, email, and remote access. Our certified experts resolve issues quickly to minimise business disruption." },
    { icon: Clock, title: "SLA-Backed Support Plans", description: "Choose from flexible support plans with guaranteed response times, priority escalation, and proactive system health monitoring." },
];

const supportPlans = [
    { name: "Essential", desc: "Email support during business hours, knowledge base access, and quarterly system health checks.", highlight: false },
    { name: "Professional", desc: "Priority phone & email support, 4-hour response time SLA, monthly check-ins, and proactive monitoring.", highlight: true },
    { name: "Enterprise", desc: "24/7 dedicated support team, 1-hour critical response SLA, on-site visits, and a named account manager.", highlight: false },
];

const whyUs = [
    "Certified Sage Partner with 15+ years experience",
    "96% customer satisfaction rating on support tickets",
    "Dedicated account managers for enterprise clients",
    "Proactive system monitoring and issue prevention",
    "Comprehensive knowledge base and video tutorials",
    "Flexible SLA plans tailored to your business needs",
];

export default function SageSupportPage() {
    return (
        <>
            <ServiceHero title="Sage Support" breadcrumbs={[{ label: "Sage Products", href: "/sage-support" }, { label: "Sage Support" }]} />

            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block text-xs font-bold tracking-widest text-[var(--sage-green)] uppercase mb-3">Expert Support Services</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">Expert Sage Support<br /><span className="text-[var(--sage-green)]">When You Need It Most</span></h2>
                            <p className="text-gray-600 leading-relaxed mb-6">Our dedicated team of certified Sage professionals provides comprehensive support services to ensure your Sage solutions run smoothly. From implementation to ongoing maintenance, we are your trusted partner.</p>
                            <p className="text-gray-600 leading-relaxed mb-8">Whether you need help with a complex upgrade, custom development, user training, or day-to-day troubleshooting — our expert team is just a call away.</p>
                            <div className="flex flex-wrap gap-3">
                                <Link href="/contact" className="inline-flex items-center bg-[var(--sage-green)] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[var(--sage-green-dark)] transition-colors shadow-sm">Get Support Now<ArrowRight className="ml-2 h-4 w-4" /></Link>
                                <Link href="/contact" className="inline-flex items-center border-2 border-[var(--sage-forest)] text-[var(--sage-forest)] px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[var(--sage-forest)] hover:text-white transition-colors">View Support Plans</Link>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-[var(--sage-green-light)] to-white rounded-2xl p-8 border border-gray-100">
                            <div className="grid grid-cols-2 gap-4">
                                {[{ value: "96%", label: "Satisfaction Rate" }, { value: "<4hr", label: "Avg Response Time" }, { value: "15+", label: "Years Experience" }, { value: "500+", label: "Clients Supported" }].map((s) => (
                                    <div key={s.label} className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-50">
                                        <div className="text-2xl font-bold text-[var(--sage-forest)] mb-1">{s.value}</div>
                                        <div className="text-xs text-gray-500 font-medium">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-bold tracking-widest text-[var(--sage-green)] uppercase mb-3">Our Services</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Support Services</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((s) => (
                            <div key={s.title} className="group bg-white rounded-xl p-7 border border-gray-100 hover:border-[var(--sage-green)] hover:shadow-lg transition-all duration-300">
                                <div className="w-12 h-12 bg-[var(--sage-green-light)] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[var(--sage-green)] transition-colors">
                                    <s.icon className="h-6 w-6 text-[var(--sage-forest)] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-bold tracking-widest text-[var(--sage-green)] uppercase mb-3">Support Plans</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose the Right Plan for Your Business</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {supportPlans.map((plan) => (
                            <div key={plan.name} className={`rounded-2xl p-8 border-2 transition-all duration-300 ${plan.highlight ? "border-[var(--sage-green)] bg-[var(--sage-forest)] text-white scale-105 shadow-xl" : "border-gray-100 bg-white hover:border-[var(--sage-green)] hover:shadow-lg"}`}>
                                {plan.highlight && <span className="inline-block text-xs font-bold tracking-widest text-[var(--sage-green)] uppercase mb-2">Most Popular</span>}
                                <h3 className={`text-2xl font-bold mb-3 ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.name}</h3>
                                <p className={`text-sm leading-relaxed mb-6 ${plan.highlight ? "text-gray-300" : "text-gray-500"}`}>{plan.desc}</p>
                                <Link href="/contact" className={`inline-flex items-center w-full justify-center px-5 py-3 rounded-lg text-sm font-semibold transition-colors ${plan.highlight ? "bg-[var(--sage-green)] text-white hover:bg-[var(--sage-green-dark)]" : "bg-[var(--sage-forest)] text-white hover:bg-[var(--sage-green-dark)]"}`}>
                                    Contact Us<ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block text-xs font-bold tracking-widest text-[var(--sage-green)] uppercase mb-3">Why Choose Us</span>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Trusted Sage Partner</h2>
                            <ul className="space-y-4">
                                {whyUs.map((w) => (
                                    <li key={w} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-[var(--sage-green)] shrink-0 mt-0.5" />
                                        <span className="text-gray-600">{w}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gradient-to-r from-[var(--sage-forest)] to-[#0d2a23] rounded-2xl p-8 text-white text-center">
                            <Shield className="h-12 w-12 text-[var(--sage-green)] mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-3">Need Urgent Help?</h3>
                            <p className="text-gray-300 text-sm mb-6">Our support team is available to help you resolve critical issues quickly.</p>
                            <Link href="/contact" className="inline-flex items-center bg-[var(--sage-green)] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[var(--sage-green-dark)] transition-colors">Contact Support<ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner />
            <Footer />
        </>
    );
}

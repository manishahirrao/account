import type { Metadata } from "next";
import Link from "next/link";
import { ServiceHero } from "@/components/shared/ServiceHero";
import { CTABanner } from "@/components/shared/CTABanner";
import { Footer } from "@/components/layout/Footer";
import {
    Users, Target, Mail, BarChart3, Handshake, Globe,
    ArrowRight, CheckCircle2, TrendingUp, MessageSquare, Calendar, Phone,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Sage CRM | Customer Relationship Management Software",
    description: "Sage CRM helps you build stronger customer relationships with sales pipeline management, marketing automation, and powerful analytics.",
};

const features = [
    { icon: Target, title: "Sales Pipeline Management", description: "Visualise your complete sales pipeline, track opportunities from lead to close, and forecast revenue accurately with intelligent automation." },
    { icon: Mail, title: "Marketing Automation", description: "Create targeted email campaigns, track engagement metrics, and nurture leads with automated workflows that convert prospects into customers." },
    { icon: Users, title: "Contact Management", description: "Centralise all customer data — interaction history, preferences, purchase records, and communication logs — at your fingertips." },
    { icon: BarChart3, title: "Reporting & Analytics", description: "Generate real-time reports and dashboards to understand customer behaviour, track KPIs, and make data-driven decisions." },
    { icon: Handshake, title: "Customer Service", description: "Deliver exceptional support with case management, SLA tracking, knowledge base, and self-service portal capabilities." },
    { icon: Globe, title: "Web & Mobile Access", description: "Access CRM data anywhere through a responsive web interface and mobile apps. Stay connected with customers on the go." },
];

const benefits = [
    "360° view of every customer interaction and touchpoint",
    "Seamless integration with Sage 300, X3, and Intacct",
    "Customisable dashboards tailored to your sales process",
    "Automated lead scoring and qualification workflows",
    "Real-time notifications and task management",
    "Comprehensive audit trail and GDPR compliance tools",
];

const useCases = [
    { icon: TrendingUp, title: "Sales Teams", description: "Close more deals faster with pipeline visibility, automated follow-ups, and accurate sales forecasting." },
    { icon: MessageSquare, title: "Marketing Teams", description: "Run targeted campaigns, track ROI, segment audiences intelligently, and nurture leads through the funnel." },
    { icon: Phone, title: "Customer Service", description: "Resolve issues quickly with full context, SLA tracking, escalation workflows, and knowledge base." },
    { icon: Calendar, title: "Management", description: "Get complete visibility into team performance with KPI dashboards, pipeline reports, and activity tracking." },
];

export default function SageCRMPage() {
    return (
        <>
            <ServiceHero title="Sage CRM" breadcrumbs={[{ label: "Sage Products", href: "/sage-crm" }, { label: "Sage CRM" }]} />

            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block text-xs font-bold tracking-widest text-[var(--sage-green)] uppercase mb-3">Customer Relationship Management</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">Know Your Customers Better<br /><span className="text-[var(--sage-green)]">With the Most Trusted CRM</span></h2>
                            <p className="text-gray-600 leading-relaxed mb-6">Sage CRM gives your teams the tools they need to build stronger customer relationships, close more deals, and deliver outstanding service. With a complete 360° view of every customer, your team can work smarter and deliver personalised experiences.</p>
                            <p className="text-gray-600 leading-relaxed mb-8">From lead generation and sales pipeline management to marketing campaigns and post-sale support, Sage CRM covers the complete customer lifecycle in one integrated platform.</p>
                            <div className="flex flex-wrap gap-3">
                                <Link href="/contact" className="inline-flex items-center bg-[var(--sage-green)] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[var(--sage-green-dark)] transition-colors shadow-sm">Request a CRM Demo<ArrowRight className="ml-2 h-4 w-4" /></Link>
                                <Link href="/contact" className="inline-flex items-center border-2 border-[var(--sage-forest)] text-[var(--sage-forest)] px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[var(--sage-forest)] hover:text-white transition-colors">Get a Free Quote</Link>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-[var(--sage-green-light)] to-white rounded-2xl p-8 border border-gray-100">
                            <div className="grid grid-cols-2 gap-4">
                                {[{ value: "360°", label: "Customer View" }, { value: "50%", label: "Faster Sales Cycle" }, { value: "3x", label: "Lead Conversion" }, { value: "100%", label: "ERP Integration" }].map((s) => (
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
                        <span className="inline-block text-xs font-bold tracking-widest text-[var(--sage-green)] uppercase mb-3">Key Capabilities</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything You Need to Manage Relationships</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f) => (
                            <div key={f.title} className="group bg-white rounded-xl p-7 border border-gray-100 hover:border-[var(--sage-green)] hover:shadow-lg transition-all duration-300">
                                <div className="w-12 h-12 bg-[var(--sage-green-light)] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[var(--sage-green)] transition-colors">
                                    <f.icon className="h-6 w-6 text-[var(--sage-forest)] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block text-xs font-bold tracking-widest text-[var(--sage-green)] uppercase mb-3">Why Sage CRM</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Benefits That Transform Relationships</h2>
                            <ul className="space-y-4">
                                {benefits.map((b) => (
                                    <li key={b} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-[var(--sage-green)] shrink-0 mt-0.5" />
                                        <span className="text-gray-600">{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {useCases.map((u) => (
                                <div key={u.title} className="bg-[var(--sage-forest)] rounded-xl p-6 text-white">
                                    <u.icon className="h-8 w-8 text-[var(--sage-green)] mb-3" />
                                    <h3 className="text-base font-bold mb-2">{u.title}</h3>
                                    <p className="text-xs text-gray-300 leading-relaxed">{u.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner />
            <Footer />
        </>
    );
}

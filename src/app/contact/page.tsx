"use client";

import { ServiceHero } from "@/components/shared/ServiceHero";
import { CTABanner } from "@/components/shared/CTABanner";
import { Footer } from "@/components/layout/Footer";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { companyInfo } from "@/data/footer";
import { useState } from "react";

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise((r) => setTimeout(r, 1000));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    return (
        <>
            <ServiceHero
                title="Contact Us"
                breadcrumbs={[{ label: "Contact" }]}
            />

            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
                        {/* Form (3 cols) */}
                        <div className="lg:col-span-3">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Send Us a Message
                            </h2>
                            {isSubmitted ? (
                                <div className="bg-[var(--sage-green-light)] border border-[var(--sage-green)]/30 rounded-xl p-8 text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--sage-green)] flex items-center justify-center">
                                        <Send className="h-7 w-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        Message Sent!
                                    </h3>
                                    <p className="text-gray-600">
                                        Thank you for contacting us. We&apos;ll get back to you
                                        within 24 hours.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={formState.name}
                                                onChange={(e) =>
                                                    setFormState({ ...formState, name: e.target.value })
                                                }
                                                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sage-green)] focus:border-transparent transition-all"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={formState.email}
                                                onChange={(e) =>
                                                    setFormState({ ...formState, email: e.target.value })
                                                }
                                                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sage-green)] focus:border-transparent transition-all"
                                                placeholder="you@company.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                value={formState.phone}
                                                onChange={(e) =>
                                                    setFormState({ ...formState, phone: e.target.value })
                                                }
                                                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sage-green)] focus:border-transparent transition-all"
                                                placeholder="0161 456 9666"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                value={formState.company}
                                                onChange={(e) =>
                                                    setFormState({
                                                        ...formState,
                                                        company: e.target.value,
                                                    })
                                                }
                                                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sage-green)] focus:border-transparent transition-all"
                                                placeholder="Your company"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                            Service Required
                                        </label>
                                        <select
                                            value={formState.service}
                                            onChange={(e) =>
                                                setFormState({
                                                    ...formState,
                                                    service: e.target.value,
                                                })
                                            }
                                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sage-green)] focus:border-transparent transition-all bg-white"
                                        >
                                            <option value="">Select a service</option>
                                            <option>Business Accounting</option>
                                            <option>Business Advisory</option>
                                            <option>Personal Tax</option>
                                            <option>Payroll</option>
                                            <option>VAT Services</option>
                                            <option>Corporation Tax</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                            Message *
                                        </label>
                                        <textarea
                                            required
                                            rows={5}
                                            value={formState.message}
                                            onChange={(e) =>
                                                setFormState({
                                                    ...formState,
                                                    message: e.target.value,
                                                })
                                            }
                                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sage-green)] focus:border-transparent transition-all resize-none"
                                            placeholder="How can we help you?"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="inline-flex items-center justify-center bg-[var(--sage-green)] text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-[var(--sage-green-dark)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg
                                                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    />
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                                    />
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message{" "}
                                                <Send className="ml-2 h-4 w-4" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Contact Info (2 cols) */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                <h3 className="font-semibold text-gray-900 mb-4">
                                    Contact Details
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <MapPin className="h-5 w-5 text-[var(--sage-green)] shrink-0 mt-0.5" />
                                        <span className="text-sm text-gray-600 leading-relaxed">
                                            {companyInfo.address}
                                        </span>
                                    </li>
                                    
                                    <li className="flex items-center gap-3">
                                        <Mail className="h-5 w-5 text-[var(--sage-green)] shrink-0" />
                                        <a
                                            href={companyInfo.emailHref}
                                            className="text-sm text-gray-600 hover:text-[var(--sage-green)] transition-colors"
                                        >
                                            {companyInfo.email}
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Map Placeholder */}
                            <div className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center border border-gray-100">
                                <span className="text-sm text-gray-500 font-medium">
                                    📍 Google Maps Embed
                                </span>
                            </div>

                            {/* Opening Hours */}
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                <h3 className="font-semibold text-gray-900 mb-3">
                                    Office Hours
                                </h3>
                                <div className="space-y-2 text-sm text-gray-600">
                                    <div className="flex justify-between">
                                        <span>Monday - Friday</span>
                                        <span className="font-medium">9:00 AM - 5:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday - Sunday</span>
                                        <span className="font-medium text-gray-400">Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner />
            <Footer />
        </>
    );
}

"use client";

import { Mail, Phone, CalendarCheck } from "lucide-react";

export function TopBar() {
    return (
        <div className="w-full bg-[var(--sage-forest)] text-white text-sm py-2">
            <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
                <div className="hidden md:flex items-center gap-6">
                    <a
                        href="mailto:askus@in-accountancy.co.uk"
                        className="flex items-center gap-2 hover:text-[var(--sage-green)] transition-colors"
                    >
                        <Mail className="h-3.5 w-3.5" />
                        <span>askus@in-accountancy.co.uk</span>
                    </a>
                    <a
                        href="tel:+441614569666"
                        className="flex items-center gap-2 hover:text-[var(--sage-green)] transition-colors"
                    >
                        <Phone className="h-3.5 w-3.5" />
                        <span>0161 456 9666</span>
                    </a>
                </div>
                <div className="flex items-center gap-4 md:ml-auto w-full md:w-auto justify-center md:justify-end">
                    <a
                        href="/contact"
                        className="group relative flex items-center gap-2 bg-[var(--sage-green)] text-white px-5 py-1.5 rounded text-xs font-semibold hover:bg-[var(--sage-green-dark)] transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                        </span>
                        <CalendarCheck className="h-3.5 w-3.5" />
                        Book an Appointment
                    </a>
                </div>
            </div>
        </div>
    );
}

"use client";

import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { navItems, isDropdown, type NavDropdown } from "@/data/navigation";

export function Header() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMouseEnter = (name: string) => {
        if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
        setActiveDropdown(name);
    };

    const handleMouseLeave = () => {
        dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 200);
    };

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
                    ? "bg-white shadow-md"
                    : "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60"
                }`}
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-1 shrink-0">
                    <span className="text-2xl font-bold tracking-tight text-[var(--sage-forest)]">
                        IN{" "}
                        <span className="text-[var(--sage-green)]">Accountancy</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navItems.map((item) =>
                        isDropdown(item) ? (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => handleMouseEnter(item.name)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[var(--sage-green)] transition-colors rounded-md">
                                    {item.name}
                                    <ChevronDown
                                        className={`h-3.5 w-3.5 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {/* Mega-menu dropdown */}
                                {activeDropdown === item.name && (
                                    <MegaMenuPanel dropdown={item} />
                                )}
                            </div>
                        ) : (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[var(--sage-green)] transition-colors rounded-md"
                            >
                                {item.name}
                            </Link>
                        )
                    )}
                </nav>

                {/* Desktop CTA */}
                <Link
                    href="/contact"
                    className="hidden lg:inline-flex bg-[var(--sage-green)] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[var(--sage-green-dark)] transition-colors shadow-sm"
                >
                    Free Consultation
                </Link>

                {/* Mobile toggle */}
                <button
                    className="lg:hidden p-2 text-gray-700 hover:text-[var(--sage-green)]"
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileOpen && <MobileMenu onClose={() => setIsMobileOpen(false)} />}
        </header>
    );
}

/* ============== Mega Menu Panel ============== */
function MegaMenuPanel({ dropdown }: { dropdown: NavDropdown }) {
    return (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[540px] bg-white rounded-xl shadow-xl border border-gray-100 p-6 mt-1 z-50">
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                {dropdown.links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-[var(--sage-green-light)] hover:text-[var(--sage-forest)] rounded-md transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
            {dropdown.description && (
                <p className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500 leading-relaxed">
                    {dropdown.description}
                </p>
            )}
            <div className="mt-3">
                <Link
                    href="/contact"
                    className="inline-flex text-xs font-semibold text-[var(--sage-green)] hover:text-[var(--sage-green-dark)] transition-colors"
                >
                    Contact Us →
                </Link>
            </div>
        </div>
    );
}

/* ============== Mobile Menu ============== */
function MobileMenu({ onClose }: { onClose: () => void }) {
    const [openSection, setOpenSection] = useState<string | null>(null);

    return (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="container mx-auto px-4 py-4 space-y-1">
                {navItems.map((item) =>
                    isDropdown(item) ? (
                        <div key={item.name}>
                            <button
                                className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-gray-700 hover:text-[var(--sage-green)] rounded-md"
                                onClick={() =>
                                    setOpenSection(
                                        openSection === item.name ? null : item.name
                                    )
                                }
                            >
                                {item.name}
                                <ChevronDown
                                    className={`h-4 w-4 transition-transform ${openSection === item.name ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            {openSection === item.name && (
                                <div className="ml-4 space-y-1 pb-2">
                                    {item.links.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className="block px-3 py-2 text-sm text-gray-600 hover:text-[var(--sage-green)] hover:bg-[var(--sage-green-light)] rounded-md transition-colors"
                                            onClick={onClose}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-3 text-sm font-medium text-gray-700 hover:text-[var(--sage-green)] rounded-md"
                            onClick={onClose}
                        >
                            {item.name}
                        </Link>
                    )
                )}
                <div className="pt-3">
                    <Link
                        href="/contact"
                        className="block w-full text-center bg-[var(--sage-green)] text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-[var(--sage-green-dark)] transition-colors"
                        onClick={onClose}
                    >
                        Book a FREE consultation call
                    </Link>
                </div>
            </nav>
        </div>
    );
}

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { footerColumns, companyInfo } from "@/data/footer";

export function Footer() {
    return (
        <footer className="w-full bg-[var(--sage-forest)] text-white">
            {/* Main Footer */}
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Link Columns */}
                    {footerColumns.map((col) => (
                        <div key={col.title} className="space-y-4">
                            <h4 className="text-base font-semibold text-[var(--sage-green)]">
                                {col.title}
                            </h4>
                            <ul className="space-y-2">
                                {col.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-gray-300 hover:text-white hover:pl-1 transition-all duration-200"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Column */}
                    <div className="space-y-4">
                        <h4 className="text-base font-semibold text-[var(--sage-green)]">
                            Contact Us
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2.5">
                                <MapPin className="h-4 w-4 text-[var(--sage-green)] shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-300 leading-relaxed">
                                    {companyInfo.address}
                                </span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Phone className="h-4 w-4 text-[var(--sage-green)] shrink-0" />
                                <a
                                    href={companyInfo.phoneHref}
                                    className="text-sm text-gray-300 hover:text-white transition-colors"
                                >
                                    {companyInfo.phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Mail className="h-4 w-4 text-[var(--sage-green)] shrink-0" />
                                <a
                                    href={companyInfo.emailHref}
                                    className="text-sm text-gray-300 hover:text-white transition-colors"
                                >
                                    {companyInfo.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-4 md:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
                    <p>
                        © {new Date().getFullYear()} {companyInfo.name}. All rights
                        reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href="/privacy" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/sitemap" className="hover:text-white transition-colors">
                            Site Map
                        </Link>
                        <span>
                            Company registered in England and Wales no:{" "}
                            {companyInfo.companyNumber}
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

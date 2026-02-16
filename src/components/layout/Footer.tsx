import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full bg-slate-900 text-slate-50 py-12 md:py-16">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white">IN Accountancy</h3>
                        <p className="text-slate-400 text-sm">
                            Award-winning Stockport accountants helping you navigate the financial landscape with ease.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="#" className="hover:text-sky-400">About Us</Link></li>
                            <li><Link href="#" className="hover:text-sky-400">Services</Link></li>
                            <li><Link href="#" className="hover:text-sky-400">Testimonials</Link></li>
                            <li><Link href="#" className="hover:text-sky-400">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Services</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="#" className="hover:text-sky-400">Business Accounting</Link></li>
                            <li><Link href="#" className="hover:text-sky-400">Tax Planning</Link></li>
                            <li><Link href="#" className="hover:text-sky-400">Xero Training</Link></li>
                            <li><Link href="#" className="hover:text-sky-400">Payroll</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Contact Us</h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li className="flex items-start gap-2">
                                <MapPin className="h-5 w-5 text-sky-500 shrink-0" />
                                <span>Hazel Grove, Stockport, SK7 5ER</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-sky-500 shrink-0" />
                                <span>0161 456 9666</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-sky-500 shrink-0" />
                                <a href="mailto:askus@in-accountancy.co.uk" className="hover:text-sky-400">askus@in-accountancy.co.uk</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
                    <p>&copy; {new Date().getFullYear()} IN Accountancy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

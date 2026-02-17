import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
    return (
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm">
            <Link
                href="/"
                className="text-white/70 hover:text-white transition-colors"
            >
                <Home className="h-3.5 w-3.5" />
            </Link>
            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-1.5">
                    <ChevronRight className="h-3.5 w-3.5 text-white/40" />
                    {item.href ? (
                        <Link
                            href={item.href}
                            className="text-white/70 hover:text-white transition-colors"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-white font-medium">{item.label}</span>
                    )}
                </div>
            ))}
        </nav>
    );
}

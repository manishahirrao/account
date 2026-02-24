import {
    FileText,
    Briefcase,
    Package,
    type LucideIcon,
} from "lucide-react";

export interface SolutionCard {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    href: string;
}

export const solutionCards: SolutionCard[] = [
    {
        icon: FileText,
        title: "Personal Accounting",
        subtitle: "Tax returns - correct and on time",
        href: "/services/personal-tax",
    },
    {
        icon: Briefcase,
        title: "Business Services",
        subtitle: "Accounts, Advice and Payroll",
        href: "/services/business-accounting",
    },
    {
        icon: Package,
        title: "Sage Products",
        subtitle: "Business Management Solutions",
        href: "/sage-300",
    },
    
];

export interface ServiceColumn {
    title: string;
    items: { name: string; href?: string }[];
}

export const serviceColumns: ServiceColumn[] = [
    {
        title: "Business Accounting",
        items: [
            { name: "Business Accounting", href: "/services/business-accounting" },
            { name: "Bookkeeping", href: "/services/business-accounting" },
            { name: "Payroll", href: "/services/payroll" },
            { name: "1099 Forms" },
            { name: "Sales Tax Returns", href: "/services/sales-tax" },
            { name: "Corporate Income Tax", href: "/services/corporate-tax" },
            { name: "W-2 Forms" },
        ],
    },
    {
        title: "Digital Accounting & Business Advisory",
        items: [
            { name: "Digital Accounting & Business Advisory", href: "/services/business-advisory" },
            { name: "Management Accounts" },
            { name: "Cashflow Forecasting" },
            { name: "Remuneration Planning" },
            { name: "Share Valuations" },
            { name: "Share Restructuring" },
        ],
    },
    {
        title: "Personal Tax",
        items: [
            { name: "Personal Tax", href: "/services/personal-tax" },
            { name: "Federal & State Tax Returns" },
            { name: "Tax Claims" },
        ],
    },
];

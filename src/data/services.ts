import {
    FileText,
    Briefcase,
    Building2,
    BookOpen,
    Phone,
    Newspaper,
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
        icon: Building2,
        title: "Sectors",
        subtitle: "Specialised Accounting",
        href: "/sectors",
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
            { name: "CIS Returns" },
            { name: "VAT Returns", href: "/services/vat-services" },
            { name: "Accounts & Corporation Tax", href: "/services/corporation-tax" },
            { name: "P11D's" },
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
            { name: "Personal & Partnership Tax Returns" },
            { name: "Tax Claims" },
        ],
    },
];

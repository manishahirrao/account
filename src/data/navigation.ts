export interface NavLink {
    name: string;
    href: string;
}

export interface NavDropdown {
    name: string;
    links: NavLink[];
    description?: string;
}

export type NavItem = NavLink | NavDropdown;

export function isDropdown(item: NavItem): item is NavDropdown {
    return "links" in item;
}

export const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    {
        name: "About IN",
        description:
            "IN Accountancy are a team of Stockport accountants with a difference… Saving you money. Giving you great value. Making your life easier.",
        links: [
            { name: "About Us", href: "/about" },
            { name: "Meet the IN Team", href: "/about/team" },
            { name: "Work with IN", href: "/careers" },
            { name: "Charity Support", href: "/about/charity" },
        ],
    },
    {
        name: "For Businesses",
        description:
            "IN Accountancy are a team of Stockport accountants and tax advisors with a difference… Saving you money. Giving you great value. Making your life easier.",
        links: [
            { name: "Business Accounting", href: "/services/business-accounting" },
            { name: "Business Advisory", href: "/services/business-advisory" },
            { name: "Tax Planning & Advisory", href: "/services/tax-planning" },
            { name: "VAT Services", href: "/services/vat-services" },
            { name: "Client Stories", href: "/client-stories" },
            { name: "Payroll", href: "/services/payroll" },
            { name: "Corporation Tax & Year-End Accounts", href: "/services/corporation-tax" },
            { name: "Freelancers", href: "/services/freelancers" },
            { name: "Business Improvement Club", href: "/business-improvement-club" },
            { name: "5 Ways to Grow Your Profits", href: "/grow-your-profits" },
        ],
    },
    {
        name: "For Individuals",
        description:
            "Personal tax services, tax reclaims, and self assessment support.",
        links: [
            { name: "Personal Tax", href: "/services/personal-tax" },
            { name: "Self Assessment", href: "/services/self-assessment" },
        ],
    },
    { name: "Sectors", href: "/sectors" },
    {
        name: "Resources",
        links: [
            { name: "Guides", href: "/resources/guides" },
            { name: "News", href: "/news" },
            { name: "Video Library", href: "/resources/videos" },
        ],
    },
    { name: "Contact", href: "/contact" },
];

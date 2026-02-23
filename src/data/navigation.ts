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
           
        ],
    },
    {
        name: "For Businesses",
        description:
            "IN Accountancy are a team of Stockport accountants and tax advisors with a difference… Saving you money. Giving you great value. Making your life easier.",
        links: [
            { name: "Business Accounting", href: "/services/business-accounting" },
         
        ],
    },
    {
        name: "For Individuals",
        description:
            "Personal tax services, tax reclaims, and self assessment support.",
        links: [
            { name: "Personal Tax", href: "/services/personal-tax" },
           
        ],
    },
    {
        name: "Sage Products",
        description:
            "Explore our range of Sage business management solutions — ERP, financial management, CRM, and expert support services.",
        links: [
            { name: "Sage 300", href: "/sage-300" },
            { name: "Sage X3", href: "/sage-x3" },
            { name: "Sage Intacct", href: "/sage-intacct" },
            { name: "Sage CRM", href: "/sage-crm" },
            { name: "Sage Support", href: "/sage-support" },
        ],
    },
    
    { name: "Contact", href: "/contact" },
];

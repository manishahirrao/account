export interface FooterLink {
    name: string;
    href: string;
}

export interface FooterColumn {
    title: string;
    links: FooterLink[];
}

export const footerColumns: FooterColumn[] = [
    {
        title: "About",
        links: [
            { name: "News", href: "/news" },
            { name: "About IN", href: "/about" },
            { name: "Meet the In-Crowd", href: "/about/team" },
            { name: "Charity Support", href: "/about/charity" },
            { name: "Client Stories", href: "/client-stories" },
        ],
    },
    {
        title: "Get Started",
        links: [
            { name: "Limited Companies", href: "/services/business-accounting" },
            { name: "Sole Traders", href: "/services/business-accounting" },
            { name: "Personal Tax", href: "/services/personal-tax" },
            { name: "Contractors", href: "/services/freelancers" },
        ],
    },
    {
        title: "Sectors",
        links: [
            { name: "Amazon Sellers", href: "/sectors/amazon-sellers" },
            { name: "Creatives", href: "/sectors/creatives" },
            { name: "Medical Professionals", href: "/sectors/medical" },
            { name: "Personal Care", href: "/sectors/personal-care" },
            { name: "Construction", href: "/sectors/construction" },
            { name: "Manufacturing", href: "/sectors/manufacturing" },
            { name: "Professional Services", href: "/sectors/professional-services" },
            { name: "Retail and eCommerce", href: "/sectors/retail" },
        ],
    },
];

export const companyInfo = {
    name: "IN Accountancy",
    address: "2 Station View, Rhino Court, Bramhall Moor Lane, Hazel Grove, Stockport, SK7 5ER",
    phone: "0161 456 9666",
    phoneHref: "tel:+441614569666",
    email: "askus@in-accountancy.co.uk",
    emailHref: "mailto:askus@in-accountancy.co.uk",
    companyNumber: "08251742",
};

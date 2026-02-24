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
          
            { name: "About IN", href: "/about" },
            
        ],
    },
    {
        title: "Get Started",
        links: [
           
            { name: "Personal Tax", href: "/services/personal-tax" },
            { name: "Business Tax", href: "/services/business-accounting" },
        ],
    },
    {
        title: "Sage Products",
        links: [
            { name: "Sage 50", href: "/sage-50" },
            { name: "Sage 300", href: "/sage-300" },
            { name: "Sage X3", href: "/sage-x3" },
            { name: "Sage Intacct", href: "/sage-intacct" },
            { name: "Sage CRM", href: "/sage-crm" },
        ],
    },
];

export const companyInfo = {
    name: "IN Accountancy",
    address: "123 Congress Avenue, Suite 400, Austin, TX 78701",
    email: "askus@in-accountancy.com",
    emailHref: "mailto:askus@in-accountancy.com",
    ein: "XX-XXXXXXX",
};

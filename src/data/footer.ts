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
            { name: "Contractors", href: "/services/freelancers" },
        ],
    },
    {
        title: "Sectors",
        links: [
           
            { name: "Creatives", href: "/sectors/creatives" },
          
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
  
    email: "askus@in-accountancy.co.uk",
    emailHref: "mailto:askus@in-accountancy.co.uk",
    companyNumber: "08251742",
};

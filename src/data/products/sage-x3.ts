import {
  Layers,
  Users,
  TrendingUp,
  Smartphone,
  Settings,
  Shield,
  BarChart3,
  Package,
  Building2,
  Store,
  Briefcase,
  Warehouse,
  Globe,
  Zap,
  Brain,
  Workflow,
  Calculator,
} from "lucide-react";
import { ProductPageData } from "./types";

export const sageX3Data: ProductPageData = {
  metadata: {
    title: "Sage X3 ERP | End-to-End Business Management Solution",
    description:
      "Sage X3 provides complete business management for every area of your business. AI-powered productivity, flexible mobile solution, and role-based insights. Learn more today.",
  },
  breadcrumbs: [
    { label: "Sage Products", href: "/sage-x3" },
    { label: "Sage X3" },
  ],
  hero: {
    title: "Sage X3",
    tagline: "A Powerful ERP for Business Profitability",
    description: [
      "Sage X3 ERP provides an advanced solution to collate all your business operations flexibly. It is a leading and trusted technology implemented in various industries to manage everyday core business operations. Sage X3 is a powerhouse for agile, flexible, efficient, cost-effective and profitable business management solution with the best record of providing outstanding service to midsize to large companies.",
      "Implementing Sage X3 ERP system helps a business to achieve a seamless and efficient workflow of business processes. From procuring raw materials from vendors to producing finished products, storing products in the warehouse, handling sales, and building robust customer relationships—Sage X3 makes your business processes lightning-fast with comprehensive insights into company performance on a single platform.",
    ],
    primaryCTA: {
      text: "Schedule Product Demo",
      href: "/contact",
    },
    secondaryCTA: {
      text: "Get a Free Quote",
      href: "/contact",
    },
    stats: [
      { label: "Cloud Access", value: "24/7", icon: Smartphone },
      { label: "Implementation", value: "Quick", icon: Zap },
      { label: "Customizable", value: "100%", icon: Settings },
      { label: "Company Size", value: "Mid-Large", icon: Building2 },
    ],
  },
  features: {
    sectionTag: "Core Modules",
    heading: "Core Modules of Sage X3 ERP",
    subheading:
      "Discover the best-in-class features and support system for your business.",
    features: [
      {
        icon: Package,
        title: "Supply Chain Management",
        description:
          "Monitor your inventory in real-time. Keep up with consumer demand by ensuring that the stock never falls below the set threshold. Control costs with this ERP Software. Includes inventory management, customer service, purchasing, and sales management.",
      },
      {
        icon: Calculator,
        title: "Financial Management",
        description:
          "Manage your bottom line accurately with real-time global visibility. Meet local demands with great precision. Includes fixed asset management, budgets & accounting, and financial reporting.",
      },
      {
        icon: Settings,
        title: "Production Management",
        description:
          "Accelerate production manufacturing speed and introduce new products to markets quickly. Includes shop floor control, project management, BOM planning, and quality control.",
      },
      {
        icon: Shield,
        title: "Total Control & Visibility",
        description:
          "Sage X3 ERP adapts to users' preferences, distinctive roles and provides safe and secure mobile and cloud access to the data they need. It consists of multiple tools that simplify your company's processes and software infrastructure, giving you total control of your business enterprise.",
      },
      {
        icon: Zap,
        title: "Powerful and Convenient",
        description:
          "Sage X3 ERP application software is specially customized for mid-sized companies, allowing them to take full advantage of all its capabilities at the most affordable rates. It's quick, easy to implement, simple to use, and easily customizable.",
      },
      {
        icon: Workflow,
        title: "Embraces Different Technologies",
        description:
          "Sage X3 ERP has an open architecture that can work well with all the leading technologies efficiently. It is flexible and extensive to embrace plugins and third-party systems, which is more beneficial for your business efficiency.",
      },
    ],
  },
  benefits: {
    sectionTag: "Why Sage X3",
    heading: "Benefits of Sage X3 ERP",
    benefits: [
      "Total control & visibility with safe and secure mobile and cloud access",
      "Powerful and convenient—customized for mid-sized companies at affordable rates",
      "Smooth and quicker workflow from procurement to customer relationships",
      "Embraces different technologies with open architecture for plugins and third-party systems",
      "Flexible and agile—manage everything on the cloud from anywhere, anytime",
      "Quick and easy to implement, simple to use, and easily customizable",
      "Comprehensive insights into company performance on a single platform",
      "Central repository for all critical business data with complete IT control",
    ],
    visualContent: {
      title: "Transform Your Operations",
      description:
        "Sage X3 provides the flexibility and power you need to manage complex business operations. With AI-powered insights and mobile access, your team can make better decisions faster, no matter where they are.",
      icon: TrendingUp,
      ctaText: "See It In Action",
      ctaHref: "/contact",
    },
  },
  testimonials: {
    testimonials: [
      {
        quote:
          "Sage X3 has transformed how we manage our global operations. The ability to access real-time data from anywhere has been a game-changer for our distributed team.",
        author: "Michael Chen",
        role: "COO",
        company: "Global Manufacturing Inc.",
        metric: "30% improvement in operational efficiency",
      },
      {
        quote:
          "The AI-powered insights have helped us optimize our inventory levels and reduce carrying costs significantly. Sage X3 pays for itself.",
        author: "Jennifer Martinez",
        role: "Supply Chain Director",
        company: "Precision Parts Ltd.",
        metric: "25% reduction in inventory carrying costs",
      },
    ],
    ctaText: "See How We Can Help",
    ctaHref: "/contact",
  },
  integrations: {
    sectionTag: "Integrations",
    heading: "Connect Your Ecosystem",
    subheading:
      "Sage X3 integrates seamlessly with your existing tools and systems.",
    integrations: [
      {
        name: "Sage CRM",
        description:
          "Integrate customer relationship management with your ERP for a complete view of your business operations.",
        icon: Users,
        href: "/sage-crm",
      },
      {
        name: "Custom APIs",
        description:
          "Build custom integrations with APIs to connect Sage X3 with any system or application.",
        icon: Zap,
      },
      {
        name: "Third-Party Apps",
        description:
          "Connect with hundreds of third-party applications through our extensive integration marketplace.",
        icon: Workflow,
      },
      {
        name: "Business Intelligence Tools",
        description:
          "Integrate with leading BI tools for advanced analytics and reporting capabilities.",
        icon: BarChart3,
      },
    ],
  },
  industries: {
    sectionTag: "Industries We Serve",
    heading: "Top Sage X3 ERP Industries",
    subheading:
      "Explore how Sage X3 serves each industry with specialized solutions.",
    industries: [
      { name: "Distribution", icon: Package },
      { name: "Services", icon: Briefcase },
      { name: "Manufacturing", icon: Building2 },
      { name: "Chemicals", icon: Shield },
      { name: "Food & Beverage", icon: Store },
      { name: "Retail Trade", icon: Store },
      { name: "Transportation", icon: Package },
      { name: "Wholesale Trade", icon: Warehouse },
    ],
  },
  ctas: [
    {
      title: "Take Your Business Control with Sage X3 ERP",
      description:
        "Empower your team and elevate your results with ERP software. Gear up your business operations with Sage X3.",
      primaryCTA: {
        text: "Schedule a Demo",
        href: "/contact",
      },
      secondaryCTA: {
        text: "Learn More",
        href: "/sage-x3",
      },
      variant: "default",
    },
  ],
};

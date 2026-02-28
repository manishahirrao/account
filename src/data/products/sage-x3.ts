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
    tagline: "End-to-End Business Management",
    description: [
      "Sage X3 is a comprehensive enterprise resource planning (ERP) solution designed for managing every area of your business from one centralized platform. Plan your finances in real time, stay compliant, and automate your accounting processes. Take control of your supply chain management when it comes to inventory, procurement, and logistics. Optimize how you oversee manufacturing processes, production, and quality control.",
      "With AI-powered productivity features, flexible mobile access, and role-based insights, Sage X3 empowers your team to make decisions quicker and work more efficiently. The solution is highly configurable to your specific business operations, allowing you to tailor it to your industry-specific needs, add APIs or custom apps, and integrate with other solutions for an experience that you can shape.",
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
      { label: "Business Processes", value: "All", icon: Layers },
      { label: "Mobile Access", value: "Yes", icon: Smartphone },
      { label: "AI-Powered", value: "Yes", icon: Brain },
      { label: "Configurable", value: "100%", icon: Settings },
    ],
  },
  features: {
    sectionTag: "Core Capabilities",
    heading: "Manage Every Area of Your Business",
    subheading:
      "Sage X3 provides end-to-end business management with powerful features for every department.",
    features: [
      {
        icon: Layers,
        title: "End-to-End Business Management",
        description:
          "All your business processes can be managed and configured from one place. Plan your finances in real time, stay compliant, and automate your accounting. Take control of your supply chain management when it comes to inventory, procurement, and logistics. Optimize how you oversee manufacturing processes, production, and quality control.",
      },
      {
        icon: Users,
        title: "Improved Collaboration",
        description:
          "Manage workflows across multiple teams and sites with seamless coordination. Bring your services together with processes that run smoothly alongside one another. Enable cross-functional collaboration with shared data and unified workflows that break down departmental silos.",
      },
      {
        icon: BarChart3,
        title: "Role-Based Insights",
        description:
          "Get personalized access to relevant data with clear visualization tailored to your role. View and share a full overview of your data, helping your team make decisions quicker. Deep dive into details when needed with drill-down capabilities and customizable dashboards.",
      },
      {
        icon: Smartphone,
        title: "Flexible Mobile Solution",
        description:
          "Planning on the move has never been easier. A simple cloud and mobile solution allows you to access your information anytime, anywhere. Stay connected to your business with responsive mobile interfaces designed for productivity on any device.",
      },
      {
        icon: Settings,
        title: "Configurable to Your Needs",
        description:
          "Extend software to adapt to your specific business operations. Tailor to your industry-specific needs and legal requirements, add APIs or custom apps, and integrate with other solutions for an experience that you can shape. Future-proof your investment with a flexible platform.",
      },
      {
        icon: Brain,
        title: "AI-Powered Productivity",
        description:
          "Embedded AI acts as your personal assistant to deliver automated insights and predictive analytics. Leverage machine learning to optimize inventory levels, forecast demand, identify trends, and automate routine tasks. Make smarter decisions faster with AI-driven recommendations.",
      },
    ],
  },
  benefits: {
    sectionTag: "Why Sage X3",
    heading: "Benefits That Transform Operations",
    benefits: [
      "Complete end-to-end business management from one centralized platform",
      "Real-time financial planning with automated compliance and accounting",
      "AI-powered productivity with automated insights and predictive analytics",
      "Flexible mobile solution for access anytime, anywhere",
      "Highly configurable to your specific business operations and industry needs",
      "Role-based insights with personalized dashboards and data visualization",
      "Improved collaboration across multiple teams and sites",
      "Seamless integration with APIs, custom apps, and other solutions",
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
    heading: "Trusted Across Industries",
    subheading:
      "Sage X3 powers businesses across diverse sectors with industry-specific solutions.",
    industries: [
      { name: "Manufacturing", icon: Building2 },
      { name: "Distribution", icon: Package },
      { name: "Retail", icon: Store },
      { name: "Professional Services", icon: Briefcase },
      { name: "Food & Beverage", icon: Store },
      { name: "Wholesale", icon: Warehouse },
      { name: "Import/Export", icon: Globe },
      { name: "Pharmaceuticals", icon: Shield },
    ],
  },
  ctas: [
    {
      title: "Need a solution for managing every area of your business?",
      description:
        "Discover how Sage X3 can transform your operations with end-to-end business management, AI-powered insights, and flexible mobile access.",
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

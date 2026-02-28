import {
  Cloud,
  DollarSign,
  BarChart3,
  Users,
  TrendingUp,
  Clock,
  Shield,
  Zap,
  Building2,
  Store,
  Briefcase,
  Heart,
  GraduationCap,
  Home,
  Calculator,
  Workflow,
  Brain,
} from "lucide-react";
import { ProductPageData } from "./types";

export const sageIntacctData: ProductPageData = {
  metadata: {
    title: "Sage Intacct | Cloud Financial Management Software",
    description:
      "Sage Intacct is the leading cloud financial management solution. Automate processes, gain real-time insights, and scale with confidence. Trusted by growing businesses.",
  },
  breadcrumbs: [
    { label: "Sage Products", href: "/sage-intacct" },
    { label: "Sage Intacct" },
  ],
  hero: {
    title: "Sage Intacct",
    tagline: "Cloud Accounting and Financial Management Software",
    description: [
      "Sage Intacct is a powerful cloud accounting software designed to streamline financial management for growing organizations (typically 20+ employees) and mid-sized companies. It provides automation and trusted insights across financials, planning, HR, and payroll. It's built on a flexible, scalable, and compliance-based platform and digital network that will grow with your business.",
      "Sage Intacct accounting software has built-in finance AI agents that work behind the scenes, automating tedious finance and accounting tasks so your team can focus on strategic value. These AI agents include Finance Intelligence agent, Close agent, Financial Assurance agent, AP Automation agent, and Time agent.",
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
      { label: "Cloud-Native", value: "100%", icon: Cloud },
      { label: "AI Agents", value: "5+", icon: Zap },
      { label: "Employees", value: "20+", icon: Users },
      { label: "Implementation", value: "3-6mo", icon: Clock },
    ],
  },
  features: {
    sectionTag: "AI-Powered Features",
    heading: "Built-In Finance AI Agents",
    subheading:
      "Sage Intacct has AI agents that work behind the scenes, automating tedious tasks so your team can focus on strategic value.",
    features: [
      {
        icon: Brain,
        title: "Finance Intelligence Agent",
        description:
          "A generative AI assistant that answers questions about any report or transaction. Get instant insights, variance analysis, and real-time answers to help your finance team save time and make informed decisions.",
      },
      {
        icon: Clock,
        title: "Close Agent",
        description:
          "Tracks close tasks, flags issues, and guides your team through month-end. Helps you close faster by identifying bottlenecks and keeping everything on schedule.",
      },
      {
        icon: Shield,
        title: "Financial Assurance Agent",
        description:
          "Scans every journal entry as you post to detect anomalies, duplicates, and unusual transactions in your general ledger—helping prevent errors and fraud before they happen.",
      },
      {
        icon: Zap,
        title: "AP Automation Agent",
        description:
          "Reads incoming bills, matches them to purchase orders, and flags duplicates automatically. Reduces manual entry errors and adapts to your specific needs over time.",
      },
      {
        icon: Calculator,
        title: "Time Agent",
        description:
          "Pulls meetings, emails, and docs to auto-populate timesheets, reducing manual time entry and improving project cost accuracy.",
      },
      {
        icon: BarChart3,
        title: "Comprehensive Financial Management",
        description:
          "Core accounting, multi-entity consolidation, revenue recognition, subscription billing, and comprehensive reporting. Designed for scaling and mid-sized businesses with complex accounting needs.",
      },
    ],
  },
  benefits: {
    sectionTag: "Why Sage Intacct",
    heading: "Benefits That Drive Financial Excellence",
    benefits: [
      "Built-in finance AI agents automate tedious tasks",
      "Ideal for businesses with 20+ employees or $4M+ annual revenue",
      "Implementation typically takes 3-6 months",
      "Annual subscription plan with comprehensive support",
      "Integrates with hundreds of pre-built applications via Sage Marketplace",
      "Open APIs and Data Flows for custom integrations",
      "Sandbox environment available for testing",
      "Comprehensive training through Sage University",
    ],
    visualContent: {
      title: "Trusted by Growing Businesses",
      description:
        "Sage Intacct has transformed our financial operations. We've cut our month-end close time in half and gained real-time visibility that helps us make better business decisions faster.",
      icon: TrendingUp,
      ctaText: "See How We Can Help",
      ctaHref: "/contact",
    },
  },
  testimonials: {
    testimonials: [
      {
        quote:
          "Sage Intacct has transformed our financial operations. We've cut our month-end close time in half and gained real-time visibility that helps us make better business decisions.",
        author: "David Thompson",
        role: "CFO",
        company: "TechVentures Inc.",
        metric: "50% reduction in month-end close time",
      },
      {
        quote:
          "The multi-entity consolidation features are exactly what we needed. Managing our growing organization is now seamless, and we have complete visibility across all our entities.",
        author: "Lisa Rodriguez",
        role: "Controller",
        company: "Global Services Group",
        metric: "15 entities consolidated effortlessly",
      },
    ],
    ctaText: "See How We Can Help",
    ctaHref: "/contact",
  },
  integrations: {
    sectionTag: "Integrations",
    heading: "Connect Your Business Ecosystem",
    subheading:
      "Sage Intacct integrates seamlessly with the tools you already use.",
    integrations: [
      {
        name: "Salesforce",
        description:
          "Bi-directional integration with Salesforce CRM for seamless quote-to-cash processes.",
        icon: Users,
      },
      {
        name: "Bill.com",
        description:
          "Automate accounts payable and payment processes with Bill.com integration.",
        icon: DollarSign,
      },
      {
        name: "ADP & Payroll",
        description:
          "Integrate with leading payroll providers for seamless employee expense management.",
        icon: Users,
      },
      {
        name: "Custom Applications",
        description:
          "Build custom integrations with our open API to connect any system.",
        icon: Zap,
      },
    ],
  },
  industries: {
    sectionTag: "Industries We Serve",
    heading: "Trusted Across Industries",
    subheading:
      "Sage Intacct powers businesses across diverse sectors with industry-specific solutions.",
    industries: [
      { name: "Professional Services", icon: Briefcase },
      { name: "Nonprofit", icon: Heart },
      { name: "Healthcare", icon: Shield },
      { name: "Software & SaaS", icon: Cloud },
      { name: "Financial Services", icon: DollarSign },
      { name: "Hospitality", icon: Home },
      { name: "Education", icon: GraduationCap },
      { name: "Retail", icon: Store },
    ],
  },
  ctas: [
    {
      title: "Ready to transform your financial management?",
      description:
        "Discover why Sage Intacct is the AICPA preferred financial management solution. Schedule a demo today.",
      primaryCTA: {
        text: "Schedule a Demo",
        href: "/contact",
      },
      secondaryCTA: {
        text: "Learn More",
        href: "/sage-intacct",
      },
      variant: "default",
    },
  ],
};

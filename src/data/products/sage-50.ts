import {
  Calculator,
  DollarSign,
  FileText,
  Users,
  TrendingUp,
  Clock,
  Shield,
  Package,
  BarChart3,
  Building2,
  Store,
  Briefcase,
  Warehouse,
  Truck,
  Settings,
} from "lucide-react";
import { ProductPageData } from "./types";

export const sage50Data: ProductPageData = {
  metadata: {
    title: "Sage 50 Accounting Software | Desktop Solution",
    description:
      "Sage 50 is powerful desktop accounting software for small to medium businesses. Manage finances, inventory, payroll, and more with ease. Get expert support today.",
  },
  breadcrumbs: [
    { label: "Sage Products", href: "/sage-50" },
    { label: "Sage 50" },
  ],
  hero: {
    title: "Sage 50 Cloud",
    tagline: "Small Business Accounting Software That Works Where You Do",
    description: [
      "Cloud-based small business accounting software that's easy to use, with robust features like inventory tracking and real-time collaboration. Trusted by businesses for decades as Peachtree — now Sage 50. With over 40 years' experience and over 2 million customers, Sage knows how to simplify small business finances.",
      "Manage invoices, expenses, cash flow, inventory, payments and more, anytime from any device with real-time collaboration. Secure cloud access from PC, Mac, tablet, or mobile with built-in cybersecurity, automatic updates and backups, and enterprise-grade security.",
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
      { label: "Years Experience", value: "40+", icon: Clock },
      { label: "Customers", value: "2M+", icon: Users },
      { label: "Cloud Access", value: "100%", icon: FileText },
      { label: "Security", value: "Enterprise", icon: Shield },
    ],
  },
  features: {
    sectionTag: "Sage 50 Features",
    heading: "Cloud Accounting Software That Helps Small Businesses Flow",
    subheading:
      "With over 40 years' experience and over 2 million customers, Sage knows how to simplify small business finances.",
    features: [
      {
        icon: Shield,
        title: "Secure Cloud Access, Anywhere, Anytime",
        description:
          "Secure access from any device with built-in cybersecurity. Real-time, multi-user collaboration. Automatic updates and backups. Enterprise-grade security. Access from PC, Mac, tablet, or mobile—no installs or VPNs required.",
      },
      {
        icon: DollarSign,
        title: "Manage Cash Flow, Income, Expenses, and Payments",
        description:
          "Run what-if scenarios as frequently as you need. See a detailed breakdown of your cash in and cash out. Manage your sales invoices by customer ID. See the status of what you're owed and track expenses to stay on budget. Get paid faster, track which customers owe you money, send automated payment reminders, and monitor invoice status in real time.",
      },
      {
        icon: Calculator,
        title: "Automate Your Reconciliation",
        description:
          "Auto-match received payments to customer invoices. Identify if accounts are cleared or have any unreconciled differences. Reduce manual tasks and data entry errors with intelligent automation.",
      },
      {
        icon: BarChart3,
        title: "See Profit and Loss in Real Time While the Job Runs",
        description:
          "Track labor, materials, and overhead by job. Control the cost of job through unique records, phases, and cost codes. Identify projects which bring in the most revenue. Customize job statuses and contact fields for your business.",
      },
      {
        icon: Package,
        title: "Track Stock by Serial Number from Anywhere",
        description:
          "Stay ahead of demand and prevent overstocking. Serialized inventory tracking that gives you total visibility. View quantities on hand and adjust quantities easily. Stay on top of purchase orders.",
      },
      {
        icon: FileText,
        title: "Make Informed Business Decisions with Detailed Reports",
        description:
          "Run unlimited reports on expenses, profits, and more. Customize pre-templated one-click reports. Export or e-mail reports directly from your software.",
      },
    ],
  },
  benefits: {
    sectionTag: "Why Sage 50 Cloud",
    heading: "Benefits That Drive Success",
    benefits: [
      "Full cloud access from any device—PC, Mac, tablet, or mobile",
      "Automatic updates and backups without business disruptions",
      "Secure & scalable: Cloud on Microsoft Azure with enterprise-grade controls",
      "Real-time, multi-user collaboration for your team",
      "Reduce IT costs and complexity with cloud-native platform",
      "Add users and features as you grow",
      "Integrated payroll module available for seamless workforce management",
      "Microsoft 365 integration for enhanced productivity",
    ],
    visualContent: {
      title: "Real Results from Real Businesses",
      description:
        "We went from an 18-hour day down to an eight-hour day. Then we cut it down to four hours. Then they got it down to about three hours. And now this year, we've turned it into less than a three-minute job. Sage 50 has transformed our operations.",
      icon: TrendingUp,
      ctaText: "See How We Can Help",
      ctaHref: "/contact",
    },
  },
  testimonials: {
    testimonials: [
      {
        quote:
          "We went from an 18-hour day down to an eight-hour day. Then we cut it down to four hours. Then they got it down to about three hours. And now this year, we've turned it into less than a three-minute job.",
        author: "Paul Young",
        role: "President",
        company: "American Financial Management",
        metric: "Reduced processing time by 18 hours",
      },
      {
        quote:
          "Sage 50 has given us the tools we need to manage our growing business efficiently. The inventory management features alone have saved us countless hours and prevented stockouts.",
        author: "Sarah Mitchell",
        role: "Operations Manager",
        company: "Midwest Distribution Co.",
        metric: "99% inventory accuracy achieved",
      },
    ],
    ctaText: "See How We Can Help",
    ctaHref: "/contact",
  },
  industries: {
    sectionTag: "Industries We Serve",
    heading: "Trusted Across Industries",
    subheading:
      "Sage 50 powers businesses across diverse sectors with industry-specific solutions.",
    industries: [
      { name: "Manufacturing", icon: Building2 },
      { name: "Distribution", icon: Truck },
      { name: "Retail", icon: Store },
      { name: "Professional Services", icon: Briefcase },
      { name: "Construction", icon: Building2 },
      { name: "Wholesale", icon: Warehouse },
      { name: "Nonprofit", icon: Users },
      { name: "Healthcare", icon: Shield },
    ],
  },
  ctas: [
    {
      title: "Ready to take the stress out of your accounting?",
      description:
        "Book a FREE consultation call with our Sage experts and discover how Sage 50 can transform your business operations.",
      primaryCTA: {
        text: "Book a FREE Consultation",
        href: "/contact",
      },
      secondaryCTA: {
        text: "Learn More",
        href: "/sage-50",
      },
      variant: "default",
    },
  ],
};

import {
  Users,
  Target,
  TrendingUp,
  Mail,
  Phone,
  Calendar,
  BarChart3,
  Smartphone,
  Building2,
  Store,
  Briefcase,
  Heart,
  Shield,
  Home,
  Zap,
  Database,
} from "lucide-react";
import { ProductPageData } from "./types";

export const sageCRMData: ProductPageData = {
  metadata: {
    title: "Sage CRM | Customer Relationship Management Software",
    description:
      "Sage CRM helps you know your business so you can grow your business. Gain insights, manage relationships, and drive sales with integrated CRM software. Get started today.",
  },
  breadcrumbs: [
    { label: "Sage Products", href: "/sage-crm" },
    { label: "Sage CRM" },
  ],
  hero: {
    title: "Sage CRM",
    tagline: "Customer Relationship Management",
    description: [
      "Sage CRM is a comprehensive customer relationship management solution designed to help you know your business so you can grow your business. Gain deep insights into customer interactions, manage relationships effectively, and drive sales with powerful CRM capabilities. Whether you're managing leads, opportunities, or customer service cases, Sage CRM provides the tools you need to succeed.",
      "With seamless integration with Sage ERP solutions, mobile access, and customizable workflows, Sage CRM empowers your sales, marketing, and customer service teams to work more efficiently. Make informed business decisions with comprehensive reporting and analytics that provide visibility into every aspect of your customer relationships.",
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
      { label: "Customer View", value: "360°", icon: Target },
      { label: "Mobile Access", value: "Yes", icon: Smartphone },
      { label: "ERP Integration", value: "Seamless", icon: Zap },
      { label: "Sales Growth", value: "30%", icon: TrendingUp },
    ],
  },
  features: {
    sectionTag: "Core Features",
    heading: "Know Your Business, Grow Your Business",
    subheading:
      "Sage CRM provides comprehensive tools to manage customer relationships and drive growth.",
    features: [
      {
        icon: Users,
        title: "Contact & Account Management",
        description:
          "Maintain a complete view of your customers with comprehensive contact and account management. Track interactions, communications, and relationships across your entire organization. Access customer history, preferences, and insights to deliver personalized experiences and build stronger relationships.",
      },
      {
        icon: Target,
        title: "Sales Force Automation",
        description:
          "Streamline your sales process from lead to close with powerful sales force automation. Manage leads, opportunities, and quotes efficiently. Track sales pipeline, forecast revenue, and identify bottlenecks. Automate routine tasks so your sales team can focus on selling.",
      },
      {
        icon: Mail,
        title: "Marketing Automation",
        description:
          "Create, execute, and track marketing campaigns with integrated marketing automation. Segment your audience, personalize messaging, and measure campaign effectiveness. Generate qualified leads and nurture prospects through the sales funnel with automated workflows.",
      },
      {
        icon: Phone,
        title: "Customer Service & Support",
        description:
          "Deliver exceptional customer service with integrated case management and support ticketing. Track issues, manage resolutions, and ensure customer satisfaction. Provide your support team with complete customer context to resolve issues faster and improve customer retention.",
      },
      {
        icon: BarChart3,
        title: "Reporting & Analytics",
        description:
          "Gain insights into your business with comprehensive reporting and analytics. Create custom reports, dashboards, and visualizations to track key metrics. Analyze sales performance, marketing effectiveness, and customer service quality. Make data-driven decisions with real-time visibility.",
      },
      {
        icon: Zap,
        title: "ERP Integration",
        description:
          "Seamlessly integrate with Sage ERP solutions including Sage 50, Sage 300, Sage X3, and Sage Intacct. Connect customer relationship data with financial and operational data for a complete view of your business. Eliminate data silos and improve cross-functional collaboration.",
      },
    ],
  },
  benefits: {
    sectionTag: "Why Sage CRM",
    heading: "Benefits That Drive Customer Success",
    benefits: [
      "360-degree view of customer interactions and relationships",
      "Seamless integration with Sage ERP solutions",
      "Mobile access for sales teams on the go",
      "Customizable workflows and automation",
      "Comprehensive reporting and analytics",
      "Scalable to grow with your business",
      "Improve sales productivity by up to 30%",
      "Enhance customer satisfaction and retention",
    ],
    visualContent: {
      title: "Transform Customer Relationships",
      description:
        "Sage CRM has transformed how we manage customer relationships. Our sales team is more productive, our marketing is more targeted, and our customer service is more responsive. We've seen a 30% increase in sales productivity.",
      icon: TrendingUp,
      ctaText: "See How We Can Help",
      ctaHref: "/contact",
    },
  },
  testimonials: {
    testimonials: [
      {
        quote:
          "Sage CRM has given us complete visibility into our customer relationships. Our sales team is more productive, and we're closing deals faster than ever before.",
        author: "Robert Johnson",
        role: "Sales Director",
        company: "Enterprise Solutions Ltd.",
        metric: "30% increase in sales productivity",
      },
      {
        quote:
          "The integration with Sage 300 has been seamless. We now have a complete view of our customers from sales to finance, which has improved our decision-making significantly.",
        author: "Amanda Lee",
        role: "VP of Operations",
        company: "Midwest Manufacturing",
        metric: "Complete customer visibility achieved",
      },
    ],
    ctaText: "See How We Can Help",
    ctaHref: "/contact",
  },
  integrations: {
    sectionTag: "Integrations",
    heading: "Connect Your Business Systems",
    subheading:
      "Sage CRM integrates seamlessly with Sage ERP solutions and other business tools.",
    integrations: [
      {
        name: "Sage 50",
        description:
          "Seamless integration with Sage 50 for complete visibility from sales to finance.",
        icon: Database,
        href: "/sage-50",
      },
      {
        name: "Sage 300",
        description:
          "Connect Sage CRM with Sage 300 for unified customer and financial data.",
        icon: Database,
        href: "/sage-300",
      },
      {
        name: "Sage X3",
        description:
          "Integrate with Sage X3 for enterprise-wide customer relationship management.",
        icon: Database,
        href: "/sage-x3",
      },
      {
        name: "Sage Intacct",
        description:
          "Connect CRM with Sage Intacct for complete quote-to-cash visibility.",
        icon: Database,
        href: "/sage-intacct",
      },
      {
        name: "Microsoft Outlook",
        description:
          "Sync emails, contacts, and calendar with Microsoft Outlook for seamless productivity.",
        icon: Mail,
      },
      {
        name: "Mobile Apps",
        description:
          "Access Sage CRM on the go with native mobile apps for iOS and Android.",
        icon: Smartphone,
      },
    ],
  },
  industries: {
    sectionTag: "Industries We Serve",
    heading: "Trusted Across Industries",
    subheading:
      "Sage CRM powers businesses across diverse sectors with industry-specific solutions.",
    industries: [
      { name: "Professional Services", icon: Briefcase },
      { name: "Manufacturing", icon: Building2 },
      { name: "Distribution", icon: Store },
      { name: "Retail", icon: Store },
      { name: "Healthcare", icon: Shield },
      { name: "Nonprofit", icon: Heart },
      { name: "Hospitality", icon: Home },
      { name: "Technology", icon: Zap },
    ],
  },
  ctas: [
    {
      title: "Ready to transform your customer relationships?",
      description:
        "Discover how Sage CRM can help you know your business so you can grow your business. Schedule a demo today.",
      primaryCTA: {
        text: "Schedule a Demo",
        href: "/contact",
      },
      secondaryCTA: {
        text: "Learn More",
        href: "/sage-crm",
      },
      variant: "default",
    },
  ],
};

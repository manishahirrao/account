import {
  Calculator,
  DollarSign,
  Globe,
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
  Cloud,
  Zap,
  Database,
  FileText,
} from "lucide-react";
import { ProductPageData } from "./types";

export const sage300Data: ProductPageData = {
  metadata: {
    title: "Sage 300 ERP | Cloud Business Management Software",
    description:
      "Sage 300 is all-in-one business management software for growing companies. Streamline accounting, operations, and distribution with multi-currency support. Get started today.",
  },
  breadcrumbs: [
    { label: "Sage Products", href: "/sage-300" },
    { label: "Sage 300" },
  ],
  hero: {
    title: "Sage 300",
    tagline: "All-in-One Business Management Software",
    description: [
      "Sage 300 is a comprehensive business management solution designed for growing companies with complex needs. Customize Sage 300 to fit your specific requirements and start streamlining accounting, operations, and distribution processes in no time. With multi-currency and multi-lingual capabilities, Sage 300 is perfect for businesses operating across borders and managing multiple entities.",
      "Take advantage of cloud deployment options with Sage Partner Cloud, powered by Microsoft Azure, to enjoy the flexibility and reliability that Fortune 500 companies trust. Sage 300 provides the scalability and functionality you need to manage your growing business efficiently while maintaining complete control over your operations.",
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
      { label: "Cloud Migration", value: "1 Day", icon: Cloud },
      { label: "Multi-Currency", value: "Yes", icon: Globe },
      { label: "Locations", value: "Multi", icon: Building2 },
      { label: "Security Layers", value: "Multi", icon: Shield },
    ],
  },
  features: {
    sectionTag: "Key Features",
    heading: "Take the Complexity Out of Managing Your Business",
    subheading:
      "Sage 300 provides best-in-class tools for companies with multiple entities and locations.",
    features: [
      {
        icon: Calculator,
        title: "Finance Tools",
        description:
          "Best-in-class, cloud-enabled financial tools for companies with multiple entities and multiple locations. Features a multi-currency, multi-lingual interface that simplifies global operations. Automate your finances, auto-detect unrecorded transactions, errors, and differences. Reconcile your books with bank statements effortlessly.",
      },
      {
        icon: DollarSign,
        title: "Sales Order Management",
        description:
          "Manage transactions throughout the sales cycle and automate your purchase order procedures directly in Sage 300. Manage contractor and subcontractor time and expenses, and add stakeholders to an account or a project. Integrate with Outlook so you can easily access and manage contacts anywhere in Sage 300.",
      },
      {
        icon: Package,
        title: "Inventory Tools",
        description:
          "Manage and keep detailed inventory records with auto-generated serial and lot numbers of items for full visibility and stock control. Simplify your inventory, returns, and adjustments with multi-location inventory tracking. Ship orders on time from multiple locations with real-time visibility.",
      },
      {
        icon: Globe,
        title: "International Business Complexity Eliminated",
        description:
          "Manage finances with a multi-currency, multi-lingual, centralized, and user-friendly interface. Handle complex international transactions, currency conversions, and compliance requirements with ease. Support for multiple tax jurisdictions and regulatory frameworks ensures global business operations run smoothly.",
      },
      {
        icon: Zap,
        title: "Integrated Payments",
        description:
          "Process credit and debit transactions directly in Sage 300. PayPal, Stripe, and Paya provide a seamless checkout experience for your customers. Reduce manual data entry, improve cash flow, and enhance customer satisfaction with integrated payment processing.",
      },
      {
        icon: Database,
        title: "Ecosystem of Proven Solutions",
        description:
          "Work seamlessly with the tools you already have and future-proof the growth of your business. Tap into an ecosystem of proven solutions including Sage add-ons and third-party ISV extensions. Enhance capabilities with custom reporting, advanced data insights, payments, manufacturing, and distribution modules.",
      },
    ],
  },
  benefits: {
    sectionTag: "Why Sage 300",
    heading: "Benefits That Drive Growth",
    benefits: [
      "Cloud deployment with Sage Partner Cloud powered by Microsoft Azure",
      "Multi-currency and multi-lingual support for global operations",
      "Multi-location inventory tracking and management",
      "Data migration in a single day with no retraining necessary",
      "Multi-layered security with on-demand scalability",
      "Overall reduction of IT costs with improved operational efficiency",
      "Flexibility of remote access from anywhere, anytime",
      "Sustainability of a carbon-neutral cloud platform",
    ],
    visualContent: {
      title: "Modernize Your ERP Today",
      description:
        "It's critical for our company to have multi-currency functionality. We have offices in India, Vietnam, Macau, China, Canada, and the US, and we transact in each currency. The Sage 300 multi-currency functionality is key to our global operations.",
      icon: TrendingUp,
      ctaText: "Move to the Cloud Now",
      ctaHref: "/contact",
    },
  },
  testimonials: {
    testimonials: [
      {
        quote:
          "Staff would spend all day processing orders, and now we can focus on initiatives that add value to the business. We're always improving. If we're doing something repetitive, we look to Sage 300 and ask, 'How can we do this better?'",
        author: "Lydia Potter",
        role: "CFO",
        company: "Salient Medical Solutions",
        metric: "Full day of processing time eliminated",
      },
      {
        quote:
          "It's critical for our company to have multi-currency functionality. We have offices in India, Vietnam, Macau, China, Canada, and the US, and we transact in each currency. So, the Sage 300 multi-currency functionality is key.",
        author: "Yoram Weinreich",
        role: "Co-president",
        company: "Simpli Home",
        metric: "6 countries, multiple currencies managed seamlessly",
      },
    ],
    ctaText: "See How We Can Help",
    ctaHref: "/contact",
  },
  integrations: {
    sectionTag: "Integrations",
    heading: "Connect Your Business Tools",
    subheading:
      "Sage 300 integrates seamlessly with the tools you already use and love.",
    integrations: [
      {
        name: "Sage CRM",
        description:
          "Know your business so you can grow your business. Gain insight to make informed business decisions with integrated customer relationship management.",
        icon: Users,
        href: "/sage-crm",
      },
      {
        name: "Sage HR",
        description:
          "From hire to retire, nurture the best talent and simplify admin with a modular HR solution integrated with Sage 300.",
        icon: Users,
      },
      {
        name: "Microsoft Office",
        description:
          "Seamlessly integrate with Microsoft Office applications for enhanced productivity and familiar workflows.",
        icon: FileText,
      },
      {
        name: "Payment Processors",
        description:
          "Integrated payment processing with PayPal, Stripe, and Paya for seamless transactions.",
        icon: DollarSign,
      },
    ],
  },
  industries: {
    sectionTag: "Industries We Serve",
    heading: "Trusted Across Industries",
    subheading:
      "Sage 300 powers businesses across diverse sectors with industry-specific solutions.",
    industries: [
      { name: "Manufacturing", icon: Building2 },
      { name: "Distribution", icon: Package },
      { name: "Retail", icon: Store },
      { name: "Professional Services", icon: Briefcase },
      { name: "Construction", icon: Building2 },
      { name: "Wholesale", icon: Warehouse },
      { name: "Import/Export", icon: Globe },
      { name: "Healthcare", icon: Shield },
    ],
  },
  ctas: [
    {
      title: "Keep your business on the right track and growing strong",
      description:
        "Learn how you can customize Sage 300 to work for your business. Connect with our sales team for help getting started.",
      primaryCTA: {
        text: "Contact Sales: 1-888-304-3805",
        href: "/contact",
      },
      secondaryCTA: {
        text: "Get Assistance",
        href: "/sage-support",
      },
      variant: "default",
    },
  ],
};

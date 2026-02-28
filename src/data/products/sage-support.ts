import {
  Headphones,
  Clock,
  Users,
  BookOpen,
  Video,
  MessageCircle,
  Shield,
  TrendingUp,
  Building2,
  Store,
  Briefcase,
  Heart,
  GraduationCap,
  Zap,
  CheckCircle,
  Award,
} from "lucide-react";
import { ProductPageData } from "./types";

export const sageSupportData: ProductPageData = {
  metadata: {
    title: "Sage Support Services | Expert Help & Training",
    description:
      "Get expert Sage support, training, and guidance. Our certified consultants provide implementation, customization, and ongoing support for all Sage products. Contact us today.",
  },
  breadcrumbs: [
    { label: "Sage Products", href: "/sage-support" },
    { label: "Sage Support" },
  ],
  hero: {
    title: "Sage Support",
    tagline: "Expert Support & Training",
    description: [
      "Get the expert support and training you need to maximize your Sage investment. Our certified Sage consultants provide comprehensive implementation, customization, and ongoing support services for all Sage products including Sage 50, Sage 300, Sage X3, Sage Intacct, and Sage CRM. Whether you're just getting started or looking to optimize your existing system, we're here to help.",
      "From initial setup and data migration to advanced customization and user training, our team of experts ensures you get the most out of your Sage solution. We offer flexible support options including phone support, remote assistance, on-site consulting, and comprehensive training programs tailored to your business needs.",
    ],
    primaryCTA: {
      text: "Get Support Now",
      href: "/contact",
    },
    secondaryCTA: {
      text: "Schedule Training",
      href: "/contact",
    },
    stats: [
      { label: "Response Time", value: "<1hr", icon: Clock },
      { label: "Certified Experts", value: "15+", icon: Award },
      { label: "Satisfaction Rate", value: "98%", icon: CheckCircle },
      { label: "Years Experience", value: "20+", icon: Shield },
    ],
  },
  features: {
    sectionTag: "Support Services",
    heading: "Comprehensive Support for Your Success",
    subheading:
      "We provide expert support and training services to help you succeed with Sage.",
    features: [
      {
        icon: Headphones,
        title: "Technical Support",
        description:
          "Get expert technical support when you need it most. Our certified Sage consultants are available to help you troubleshoot issues, answer questions, and resolve problems quickly. We offer phone support, email support, and remote assistance to ensure you're never stuck. With fast response times and knowledgeable staff, we keep your business running smoothly.",
      },
      {
        icon: Zap,
        title: "Implementation Services",
        description:
          "Ensure a successful Sage implementation with our expert guidance. We handle everything from initial setup and configuration to data migration and system integration. Our proven implementation methodology minimizes disruption and gets you up and running quickly. We work closely with your team to ensure the system is configured to meet your specific business needs.",
      },
      {
        icon: GraduationCap,
        title: "Training & Education",
        description:
          "Empower your team with comprehensive Sage training programs. We offer customized training sessions tailored to your business processes and user roles. From basic navigation to advanced features, we ensure your team has the knowledge and skills to use Sage effectively. Choose from on-site training, remote sessions, or self-paced online courses.",
      },
      {
        icon: Users,
        title: "Consulting Services",
        description:
          "Optimize your Sage system with expert consulting services. Our consultants help you identify opportunities for improvement, streamline processes, and maximize ROI. We provide strategic guidance on best practices, system optimization, and business process improvement. Let us help you get more value from your Sage investment.",
      },
      {
        icon: BookOpen,
        title: "Documentation & Resources",
        description:
          "Access comprehensive documentation, user guides, and knowledge base articles. We provide detailed resources to help you learn at your own pace and find answers to common questions. Our resource library includes video tutorials, step-by-step guides, best practice documents, and troubleshooting tips for all Sage products.",
      },
      {
        icon: Shield,
        title: "Ongoing Maintenance & Updates",
        description:
          "Keep your Sage system running smoothly with ongoing maintenance and update services. We handle software updates, patches, and upgrades to ensure you're always on the latest version. Our proactive maintenance approach identifies and resolves potential issues before they impact your business. Stay secure and compliant with regular system health checks.",
      },
    ],
  },
  benefits: {
    sectionTag: "Why Choose Our Support",
    heading: "Benefits of Expert Sage Support",
    benefits: [
      "Fast response times with less than 1-hour average response",
      "Certified Sage consultants with 20+ years of experience",
      "Comprehensive training programs tailored to your needs",
      "Flexible support options including phone, email, and remote assistance",
      "Proactive maintenance and system optimization",
      "98% customer satisfaction rate",
      "Ongoing support to help you maximize your Sage investment",
      "Expert guidance on best practices and process improvement",
    ],
    visualContent: {
      title: "Trusted by Businesses Like Yours",
      description:
        "The support team has been incredible. They're always available when we need them, and they've helped us optimize our Sage system to work exactly how we need it. Their expertise has been invaluable.",
      icon: TrendingUp,
      ctaText: "Get Expert Support",
      ctaHref: "/contact",
    },
  },
  testimonials: {
    testimonials: [
      {
        quote:
          "The support team has been incredible. They're always available when we need them, and they've helped us optimize our Sage system to work exactly how we need it.",
        author: "Mark Stevens",
        role: "IT Director",
        company: "Precision Manufacturing",
        metric: "Less than 1-hour response time",
      },
      {
        quote:
          "The training sessions were excellent. Our team went from struggling with basic tasks to confidently using advanced features. The investment in training has paid off tremendously.",
        author: "Karen White",
        role: "Accounting Manager",
        company: "Regional Services Group",
        metric: "Team productivity increased by 40%",
      },
    ],
    ctaText: "Get Support Today",
    ctaHref: "/contact",
  },
  integrations: {
    sectionTag: "Products We Support",
    heading: "Expert Support for All Sage Products",
    subheading:
      "We provide comprehensive support services for the entire Sage product line.",
    integrations: [
      {
        name: "Sage 50",
        description:
          "Expert support for Sage 50 Pro, Premium, and Quantum editions including implementation, training, and ongoing assistance.",
        icon: Shield,
        href: "/sage-50",
      },
      {
        name: "Sage 300",
        description:
          "Comprehensive support for Sage 300 including cloud migration, customization, and multi-entity management.",
        icon: Shield,
        href: "/sage-300",
      },
      {
        name: "Sage X3",
        description:
          "Expert guidance for Sage X3 implementation, configuration, and optimization for enterprise operations.",
        icon: Shield,
        href: "/sage-x3",
      },
      {
        name: "Sage Intacct",
        description:
          "Specialized support for Sage Intacct cloud financial management including setup and integration.",
        icon: Shield,
        href: "/sage-intacct",
      },
      {
        name: "Sage CRM",
        description:
          "Complete support for Sage CRM implementation, customization, and integration with Sage ERP solutions.",
        icon: Shield,
        href: "/sage-crm",
      },
    ],
  },
  industries: {
    sectionTag: "Industries We Serve",
    heading: "Support Across All Industries",
    subheading:
      "We provide expert Sage support to businesses across diverse sectors.",
    industries: [
      { name: "Manufacturing", icon: Building2 },
      { name: "Distribution", icon: Store },
      { name: "Retail", icon: Store },
      { name: "Professional Services", icon: Briefcase },
      { name: "Nonprofit", icon: Heart },
      { name: "Healthcare", icon: Shield },
      { name: "Construction", icon: Building2 },
      { name: "Education", icon: GraduationCap },
    ],
  },
  ctas: [
    {
      title: "Need help with your Sage system?",
      description:
        "Our certified Sage experts are here to help. Get the support, training, and guidance you need to succeed.",
      primaryCTA: {
        text: "Contact Support: 1-888-304-3805",
        href: "/contact",
      },
      secondaryCTA: {
        text: "Schedule Training",
        href: "/contact",
      },
      variant: "default",
    },
  ],
};

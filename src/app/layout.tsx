import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/layout/Header";
import { TawkToChat } from "@/components/TawkToChat";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "IN Accountancy | Award-Winning Austin Accountants & Tax Advisors",
    template: "%s | IN Accountancy"
  },
  description:
    "Qualified Austin Accountants helping LLCs, S-Corps, C-Corps, Sole Proprietors and Individuals with high quality proactive Accounting & Tax Services. Sage Partner.",
  keywords: [
    "Austin accountants",
    "Texas accountants",
    "tax advisors",
    "bookkeeping",
    "sales tax returns",
    "payroll",
    "Sage Partner",
    "IN Accountancy",
    "business accounting",
    "personal tax",
    "Sage 300",
    "Sage 50",
    "Sage X3",
    "Sage Intacct",
    "Sage CRM"
  ],
  authors: [{ name: "IN Accountancy" }],
  creator: "IN Accountancy",
  publisher: "IN Accountancy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sagex.pro",
    siteName: "IN Accountancy",
    title: "IN Accountancy | Award-Winning Austin Accountants & Tax Advisors",
    description: "Qualified Austin Accountants helping LLCs, S-Corps, C-Corps, Sole Proprietors and Individuals with high quality proactive Accounting & Tax Services.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IN Accountancy | Award-Winning Austin Accountants & Tax Advisors",
    description: "Qualified Austin Accountants helping LLCs, S-Corps, C-Corps, Sole Proprietors and Individuals with high quality proactive Accounting & Tax Services.",
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="16x16 32x32" />
        <link rel="icon" href="/icon-192.png" sizes="192x192" type="image/png" />
        <link rel="icon" href="/icon-512.png" sizes="512x512" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              "name": "IN Accountancy",
              "description": "Award-winning Austin accountants providing comprehensive accounting and tax services for businesses and individuals.",
              "url": "https://sagex.pro",
              "logo": "https://sagex.pro/SAGEX-logo.png",
              "image": "https://sagex.pro/SAGEX-logo.png",
              "telephone": "+1-512-555-0123",
              "email": "info@sagex.pro",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Business Street",
                "addressLocality": "Austin",
                "addressRegion": "TX",
                "postalCode": "78701",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "30.2672",
                "longitude": "-97.7431"
              },
              "openingHours": "Mo-Fr 09:00-17:00",
              "sameAs": [
                "https://www.linkedin.com/company/in-accountancy",
                "https://www.facebook.com/inaccountancy"
              ],
              "serviceArea": {
                "@type": "State",
                "name": "Texas"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Accounting Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Business Accounting",
                      "description": "Comprehensive accounting services for LLCs, S-Corps, C-Corps, and partnerships"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Personal Tax Services",
                      "description": "Individual tax preparation and planning services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Sage Software Implementation",
                      "description": "Sage 300, Sage 50, Sage X3, Sage Intacct, and Sage CRM implementation and support"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
       
        <Header />
        <main>{children}</main>
        <TawkToChat />
      </body>
    </html>
  );
}

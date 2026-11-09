import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { businessConfig } from "@/config/business";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${businessConfig.name} – Solar, Water Purifiers & Safety Products in Ranebennur`,
    template: `%s | ${businessConfig.name}`,
  },
  description:
    "Shop solar water heaters and rooftop systems, Canixx, Nexlin and Cosmax water purifiers, UPS batteries, and fire extinguishers at Jyoti Enterprises in Ranebennur.",
  keywords: businessConfig.seo.keywords,
  metadataBase: new URL(businessConfig.seo.siteUrl),
  openGraph: {
    title: `${businessConfig.name} – Solar, Water Purifiers & Safety Products in Ranebennur`,
    description:
      "Solar water heaters and rooftop systems, water filters and purifiers, UPS batteries, and fire extinguishers in Ranebennur.",
    url: businessConfig.seo.siteUrl,
    siteName: businessConfig.name,
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: businessConfig.seo.siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var theme=localStorage.getItem("jyoti-enterprises-theme");if(theme==="dark"||theme==="light")document.documentElement.dataset.theme=theme}catch{}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: businessConfig.name,
              description: businessConfig.description,
              address: {
                "@type": "PostalAddress",
                streetAddress: businessConfig.address.street,
                addressLocality: businessConfig.address.city,
                addressRegion: businessConfig.address.state,
                addressCountry: "IN",
              },
              url: businessConfig.seo.siteUrl,
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col text-text-primary">
        <Navbar />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

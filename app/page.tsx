"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sun,
  Users,
  MapPin,
  HelpCircle,
  ShieldCheck,
  Lightbulb,
  Phone,
  ChevronRight,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CoreOfferings from "@/components/CoreOfferings";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { businessConfig } from "@/config/business";
import { getWhatsAppLink, getPhoneLink } from "@/lib/utils";
import installationImage from "../assets/01.webp";
import systemGalleryImage from "../assets/02.webp";
import collectorImage from "../assets/03.webp";
import solarHeaterImage from "../assets/04.webp";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const whyChooseUs = [
  {
    icon: Users,
    title: "Customer-Focused Assistance",
    description:
      "We listen to your needs and help you find the right solar water heating solution for your home or business.",
  },
  {
    icon: MapPin,
    title: "Local Business Presence",
    description:
      "Located in Ranebennur, we serve customers across Haveri district and surrounding areas with personalised support.",
  },
  {
    icon: Sun,
    title: "Solar Water Heating Products",
    description:
      "We specialise in solar geysers and solar water heaters, offering products designed for efficiency and durability.",
  },
  {
    icon: HelpCircle,
    title: "Product Enquiry Support",
    description:
      "Have questions about solar water heaters? We provide helpful information and guidance to assist your purchase decision.",
  },
];

const galleryImages = [
  {
    src: installationImage,
    alt: "Solar water heating system installed on a rooftop",
    caption: "Solar heating installation",
  },
  {
    src: systemGalleryImage,
    alt: "Solar water heater installations at customer homes",
    caption: "Our installed systems",
  },
  {
    src: collectorImage,
    alt: "Evacuated tube solar water heater collector",
    caption: "Solar collector system",
  },
  {
    src: solarHeaterImage,
    alt: "Solar water heater with evacuated tubes",
    caption: "Reliable hot water, powered by the sun",
  },
];

export default function HomePage() {
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="solar-hero relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-solar-orange blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-solar-orange blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-solar-orange/20 px-4 py-2 text-sm font-semibold text-solar-orange"
            >
              <ShieldCheck className="h-4 w-4" />
              Authorised Dealer for Sudarshan Saur &amp; Orange Solar
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Reliable Solutions for{" "}
              <span className="text-solar-orange">Everyday Needs</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-6 max-w-xl text-lg text-gray-300"
            >
              Solar water heaters and rooftop systems, water purifiers, UPS
              batteries, and fire extinguishers—all from your local{" "}
              {businessConfig.name} team in {businessConfig.address.city}.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-xl bg-solar-orange px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-solar-orange/25 transition-all hover:bg-solar-orange-dark hover:shadow-xl"
              >
                Explore Our Range
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ===== AUTHORISED DEALER & SERVICE HIGHLIGHT ===== */}
      <section className="relative z-10 mx-auto -mt-2 max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-2xl border border-solar-orange/20 bg-white shadow-lg sm:grid-cols-2">
          <div className="flex items-start gap-4 p-6 sm:p-8">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-solar-orange/10 text-solar-orange">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-solar-orange">
                Genuine products
              </p>
              <h2 className="mt-1 text-lg font-bold text-navy">
                Authorised Dealer for Sudarshan Saur &amp; Orange Solar
              </h2>
            </div>
          </div>
          <div className="flex items-start gap-4 border-t border-border bg-section-bg p-6 sm:border-l sm:border-t-0 sm:p-8">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
              <Sun className="h-6 w-6" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-solar-orange">
                Local support
              </p>
              <h2 className="mt-1 text-lg font-bold text-navy">
                Service for Solar Water Heater Systems
              </h2>
              <p className="mt-1 text-sm text-text-secondary">
                Sales and service support in {businessConfig.address.city} and nearby areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CORE OFFERINGS ===== */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Core Offerings"
            subtitle="Trusted products for solar energy, clean water, reliable backup power, and fire safety."
          />
          <CoreOfferings />
        </div>
      </section>

      {/* ===== INTRODUCTION SECTION ===== */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div {...fadeInUp}>
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-solar-orange">
                About Us
              </span>
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                Your Local Home &amp; Business Solutions Partner in{" "}
                {businessConfig.address.city}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                {businessConfig.name} serves customers in {businessConfig.address.city} and
                surrounding areas with solar water heaters and rooftop systems,
                water filters and purifiers, UPS batteries, and fire extinguishers.
              </p>
              <p className="mt-3 text-text-secondary">
                We are an authorised dealer for Sudarshan Saur and Orange Solar.
                We also provide service for solar water heater systems and help
                customers choose products that meet their needs.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-solar-orange transition-colors hover:text-solar-orange-dark"
              >
                Learn More About Us
                <ChevronRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-solar-orange-light to-solar-orange/20 p-8">
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Sun className="h-24 w-24 text-solar-orange/60" />
                  <p className="mt-4 text-sm text-text-secondary">
                    Solar, Water &amp; Power Solutions
                  </p>
                </div>
                <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-solar-orange/10" />
                <div className="absolute -top-8 -left-8 h-24 w-24 rounded-full bg-navy/5" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="bg-section-bg py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Solar Water Heating Products"
            subtitle="Explore selected solar water heating options for residential and commercial use."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-xl bg-navy px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
            >
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== INSTALLATION GALLERY ===== */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Installations"
            subtitle="Take a look at solar water heating systems installed for homes and customers in our community."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((image, index) => (
              <motion.figure
                key={image.src.src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-section-bg shadow-sm"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 pb-4 pt-12 text-sm font-semibold text-white">
                  {image.caption}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Choose Us?"
            subtitle="We focus on customer satisfaction and providing helpful assistance for your solar water heating needs."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-2xl border border-border bg-white p-6 text-center transition-shadow hover:shadow-lg"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-solar-orange/10 text-solar-orange">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-navy">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SERVICES OVERVIEW ===== */}
      <section className="bg-section-bg py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Services"
            subtitle="From product consultation to solar water heating solutions, we're here to help."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Lightbulb,
                title: "Product Consultation",
                description:
                  "Get expert guidance on choosing the right solar water heating system for your home.",
              },
              {
                icon: Sun,
                title: "Solar Water Heating Solutions",
                description:
                  "Explore a range of solar water heaters and solar geysers for residential use.",
              },
              {
                icon: ShieldCheck,
                title: "Customer Support",
                description:
                  "We provide helpful assistance and support for all your product enquiries.",
              },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-solar-orange/10 text-solar-orange">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-navy">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-solar-orange transition-colors hover:text-solar-orange-dark"
            >
              View All Services
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CUSTOMER ENQUIRY CTA ===== */}
      <section className="bg-navy py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Looking for the Right Solar Water Heater?
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Get in touch with us to discuss your solar water heating needs.
                We&apos;re happy to help you find the right product for your home.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-green-600"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
                <a
                  href={getPhoneLink()}
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" />
                  Call Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== LOCATION PREVIEW ===== */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Visit Us"
            subtitle="We are located in Sri Ram Nagar, Ranebennur. Come visit us for a consultation."
          />
          <motion.div
            {...fadeInUp}
            className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm"
          >
            <div className="grid lg:grid-cols-2">
              {/* Map Placeholder */}
              <div className="flex min-h-[300px] items-center justify-center bg-section-bg lg:min-h-[400px]">
                <div className="p-8 text-center">
                  <MapPin className="mx-auto h-16 w-16 text-solar-orange/40" />
                  <p className="mt-4 text-sm font-medium text-text-secondary">
                    Google Maps will be embedded here
                  </p>
                  <p className="mt-1 text-xs text-text-light">
                    Once the precise location is confirmed
                  </p>
                  <a
                    href={businessConfig.social.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-solar-orange transition-colors hover:text-solar-orange-dark"
                  >
                    View on Google Maps
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Location Info */}
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-navy">
                  {businessConfig.name}
                </h3>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-solar-orange" />
                    <div>
                      <p className="font-medium text-text-primary">Address</p>
                      <p className="text-sm text-text-secondary">
                        {businessConfig.address.full}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-solar-orange" />
                    <div>
                      <p className="font-medium text-text-primary">Phone</p>
                      <p className="text-sm text-text-secondary">
                        {businessConfig.contact.phone}
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  href={businessConfig.social.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-lg bg-solar-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-solar-orange-dark sm:self-start"
                >
                  Get Directions
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

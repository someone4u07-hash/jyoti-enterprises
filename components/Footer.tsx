"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { businessConfig } from "@/config/business";
import { getWhatsAppLink, getPhoneLink, getEmailLink } from "@/lib/utils";
import businessLogo from "../assets/logo.png";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2025);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Business Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Image
                src={businessLogo}
                alt={`${businessConfig.name} logo`}
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-contain"
              />
              <span className="text-lg font-bold">{businessConfig.name}</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-300">
              Solar water heaters and rooftop systems, water filters and
              purifiers, UPS batteries, and fire extinguishers in Ranebennur.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-solar-orange">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-solar-orange"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-solar-orange">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-solar-orange" />
                <span className="text-sm text-gray-300">
                  {businessConfig.address.full}
                </span>
              </li>
              <li>
                <a
                  href={getPhoneLink()}
                  className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-solar-orange"
                >
                  <Phone className="h-4 w-4 shrink-0 text-solar-orange" />
                  {businessConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={getEmailLink()}
                  className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-solar-orange"
                >
                  <Mail className="h-4 w-4 shrink-0 text-solar-orange" />
                  {businessConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-solar-orange" />
                <span className="text-sm text-gray-300">
                  {businessConfig.contact.businessHours}
                </span>
              </li>
            </ul>
          </div>

          {/* WhatsApp CTA */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-solar-orange">
              Get in Touch
            </h3>
            <p className="mb-4 text-sm text-gray-300">
              Have a question about solar water heaters? Reach out to us on
              WhatsApp for a quick response.
            </p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-700"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear ?? ""} {businessConfig.name}. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-gray-500">
            {businessConfig.address.city}, {businessConfig.address.district},{" "}
            {businessConfig.address.state}
          </p>
        </div>
      </div>
    </footer>
  );
}

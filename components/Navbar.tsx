"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { businessConfig } from "@/config/business";
import { getWhatsAppLink } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";
import businessLogo from "../assets/logo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`site-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md" : "backdrop-blur-sm"
      }`}
    >
      <nav className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src={businessLogo}
              alt={`${businessConfig.name} logo`}
              width={44}
              height={44}
              className="h-11 w-11 rounded-full object-contain transition-transform group-hover:scale-105"
              priority
            />
            <div>
              <span className="text-lg font-bold text-navy lg:text-xl">
                {businessConfig.name}
              </span>
              <span className="hidden text-xs text-text-secondary sm:block">
                Solar Water Heater Sales &amp; Service
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-solar-orange/10 text-solar-orange"
                    : "text-text-primary hover:bg-section-bg hover:text-solar-orange"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-solar-orange px-4 py-2 text-sm font-semibold text-solar-orange transition-colors hover:bg-solar-orange hover:text-white"
            >
              <Phone className="h-4 w-4" />
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileNavigation key={pathname} pathname={pathname} />
          </div>
        </div>
      </nav>
    </header>
  );
}

function MobileNavigation({ pathname }: { pathname: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-lg p-2 text-text-primary hover:bg-section-bg lg:hidden"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-full overflow-hidden lg:hidden"
          >
            <div className="border-t border-border pb-4 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-solar-orange/10 text-solar-orange"
                      : "text-text-primary hover:bg-section-bg"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 px-4">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-solar-orange px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-solar-orange-dark"
                >
                  <Phone className="h-4 w-4" />
                  Get a Quote
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

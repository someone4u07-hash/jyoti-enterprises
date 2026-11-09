import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { businessConfig } from "@/config/business";
import { getEmailLink, getPhoneLink, getWhatsAppLink } from "@/lib/utils";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-solar-orange">Contact us</p>
          <h1 className="mt-3 text-4xl font-bold text-navy">Let&apos;s find the right solar solution for you</h1>
          <p className="mt-4 text-text-secondary">
            Whether you need a household solar geyser or a larger system for a commercial setup, our team is ready to help.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-solar-orange" />
              <div>
                <p className="font-medium text-navy">Phone</p>
                <a href={getPhoneLink()} className="text-text-secondary hover:text-solar-orange">
                  {businessConfig.contact.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-solar-orange" />
              <div>
                <p className="font-medium text-navy">Email</p>
                <a href={getEmailLink()} className="text-text-secondary hover:text-solar-orange">
                  {businessConfig.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-solar-orange" />
              <div>
                <p className="font-medium text-navy">Address</p>
                <p className="text-text-secondary">{businessConfig.address.full}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-navy p-8 text-white shadow-sm">
          <h2 className="text-2xl font-bold">Quick enquiry</h2>
          <p className="mt-3 text-sm text-gray-300">Talk to us on WhatsApp for a faster response.</p>
          <div className="mt-6 space-y-4">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/products"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

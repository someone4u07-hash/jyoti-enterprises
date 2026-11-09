"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, SunMedium } from "lucide-react";
import Link from "next/link";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      {product.image ? (
        <div className="relative aspect-[4/3] overflow-hidden bg-section-bg">
          <Image
            src={product.image}
            alt={product.imageAlt ?? product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.imageCredit && (
            <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-navy shadow-sm backdrop-blur">
              Reference image
            </span>
          )}
        </div>
      ) : (
        <div className="relative flex aspect-[4/3] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-solar-orange-light via-white to-section-bg px-6 text-center">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-solar-orange/10" />
          <div className="absolute -bottom-16 -left-8 h-44 w-44 rounded-full bg-navy/5" />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-solar-orange shadow-sm">
            <SunMedium className="h-9 w-9" />
          </div>
          <p className="relative mt-4 text-sm font-semibold text-navy">
            Product photos available on request
          </p>
          <p className="relative mt-1 text-xs text-text-secondary">
            Ask us about current models and capacities
          </p>
        </div>
      )}

      <div className="bg-gradient-to-br from-solar-orange-light to-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="rounded-full bg-solar-orange/10 px-2.5 py-1 text-xs font-semibold text-solar-orange">
            {product.badge}
          </span>
          <div className="rounded-full bg-white p-2 text-solar-orange shadow-sm">
            <SunMedium className="h-4 w-4" />
          </div>
        </div>
        <div className="mb-2 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-text-secondary">
              {product.category}
            </p>
            <h3 className="mt-2 text-xl font-bold text-navy">{product.name}</h3>
          </div>
          <span className="rounded-lg bg-navy px-2 py-1 text-xs font-semibold text-white">
            {product.capacity}
          </span>
        </div>
      </div>

      <div className="space-y-4 p-6">
        <p className="text-sm leading-relaxed text-text-secondary">{product.description}</p>

        <div className="space-y-2">
          {product.features.map((feature) => (
            <div key={feature} className="flex items-start gap-2 text-sm text-text-primary">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-solar-orange" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {product.imageCredit && (
          <div className="border-t border-border pt-3">
            <p className="text-[11px] leading-relaxed text-text-light">
              Reference photo only; exact Sudarshan Saur model and capacity may
              differ. Image cropped to fit.
            </p>
            <p className="mt-1 text-[11px] text-text-light">
              Photo:{" "}
              <a
                href={product.imageCredit.source}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-text-light/50 underline-offset-2 hover:text-solar-orange"
              >
                {product.imageCredit.author}
              </a>
              {" · "}
              <a
                href={product.imageCredit.licenseUrl}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-text-light/50 underline-offset-2 hover:text-solar-orange"
              >
                {product.imageCredit.license}
              </a>
            </p>
          </div>
        )}

        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-solar-orange transition-colors hover:text-solar-orange-dark"
          >
            Enquire now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

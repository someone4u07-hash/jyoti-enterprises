import { BatteryCharging, Droplets, Factory, ShieldCheck, Sun, Wheat } from "lucide-react";
import { coreOfferings } from "@/data/offerings";

const offeringIcons = {
  solar: Sun,
  water: Droplets,
  power: BatteryCharging,
  flour: Wheat,
  oil: Factory,
  safety: ShieldCheck,
};

interface CoreOfferingsProps {
  compact?: boolean;
}

export default function CoreOfferings({ compact = false }: CoreOfferingsProps) {
  return (
    <div className={`grid gap-5 md:grid-cols-2 ${compact ? "xl:grid-cols-3" : "xl:grid-cols-3"}`}>
      {coreOfferings.map((offering) => {
        const Icon = offeringIcons[offering.id];

        return (
          <article
            key={offering.id}
            className="group rounded-2xl border border-border bg-white p-6 shadow-[0_10px_30px_rgba(18,54,71,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-solar-orange/50 hover:shadow-[0_16px_40px_rgba(242,165,26,0.12)]"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-solar-orange-light text-solar-orange transition-colors group-hover:bg-solar-orange group-hover:text-white">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-navy">{offering.title}</h3>
            {offering.brands.length > 0 && (
              <p className="mt-2 text-sm font-semibold text-solar-orange-dark">
                {offering.brands.join(" · ")}
              </p>
            )}
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              {offering.description}
            </p>
          </article>
        );
      })}
    </div>
  );
}

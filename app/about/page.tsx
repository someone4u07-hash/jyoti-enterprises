import SectionHeading from "@/components/SectionHeading";
import { businessConfig } from "@/config/business";

const values = [
  {
    title: "Customer-first guidance",
    description:
      "We walk with our customers from product selection to installation advice, making sure the solution matches real needs.",
  },
  {
    title: "A broad product range",
    description:
      "Solar products, water filters and purifiers, UPS batteries, and fire extinguishers for households and businesses.",
  },
  {
    title: "Local support",
    description:
      "As a local business serving Ranebennur and nearby areas, we understand the requirements of homes and commercial spaces in the region.",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        title="About Us"
        subtitle="Your local source for solar energy, clean water, backup power, and fire safety products."
      />

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-5 text-text-secondary">
          <p>
            {businessConfig.name} serves homeowners, families, and businesses in {businessConfig.address.city} with solar water heaters and rooftop systems, water filters and purifiers, UPS batteries, and fire extinguishers.
          </p>
          <p>
            We are an authorised dealer for Sudarshan Saur and Orange Solar solar products, and offer water filter and purifier brands including Canixx, Nexlin, and Cosmax.
          </p>
          <p>
            We also provide service for solar water heater systems. Our team helps customers explore available products and find options suited to their requirements.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-section-bg p-8">
          <h3 className="text-2xl font-bold text-navy">Why customers choose us</h3>
          <div className="mt-6 space-y-5">
            {values.map((value) => (
              <div key={value.title} className="rounded-xl bg-white p-4 shadow-sm">
                <h4 className="font-semibold text-navy">{value.title}</h4>
                <p className="mt-2 text-sm text-text-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

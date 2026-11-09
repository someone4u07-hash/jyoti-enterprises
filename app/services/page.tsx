import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    title: "Solar Water Heater System Service",
    description: "Service support for solar water heater systems. Contact us to discuss your system and service requirements.",
  },
  {
    title: "Solar Product Guidance",
    description: "We help you explore solar water heaters and rooftop system options from Sudarshan Saur and Orange Solar.",
  },
  {
    title: "Water Filter & Purifier Enquiries",
    description: "Ask us about water filters and purifiers from Canixx, Nexlin, and Cosmax.",
  },
  {
    title: "Backup Power & Fire Safety",
    description: "Enquire about UPS batteries and fire extinguishers for your home, business, or workplace.",
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        title="Our Services"
        subtitle="Product guidance and solar water heater system service, along with support for our other product ranges."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div key={service.title} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-navy">{service.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">{service.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

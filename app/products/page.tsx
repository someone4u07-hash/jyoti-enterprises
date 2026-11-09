import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import CoreOfferings from "@/components/CoreOfferings";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        title="Our Products & Solutions"
        subtitle="Explore products for solar energy, water purification, backup power, and fire safety."
      />

      <CoreOfferings compact />

      <div className="pb-8 pt-16">
        <SectionHeading
          title="Solar Water Heater Range"
          subtitle="Ask us about current models, capacities, availability, and service for your solar water heater system."
        />
      </div>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </main>
  );
}

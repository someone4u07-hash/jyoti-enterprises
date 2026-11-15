import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import CoreOfferings from "@/components/CoreOfferings";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        title="Our Products & Solutions"
        subtitle="Explore solar systems, domestic processing equipment, water solutions, backup power, and fire safety products for homes and businesses."
      />

      <CoreOfferings compact />

      <div className="pb-8 pt-16">
        <SectionHeading
          title="Product Range"
          subtitle="Ask us about current models, capacities, custom configurations, and availability for the best fit for your requirement."
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

export type Product = {
  id: string;
  name: string;
  capacity: string;
  category: string;
  description: string;
  featureSummary: string;
  features: string[];
  badge: string;
  image?: string;
  imageAlt?: string;
  imageCredit?: {
    author: string;
    source: string;
    license: string;
    licenseUrl: string;
  };
};

export const products: Product[] = [
  {
    id: "solar-100",
    name: "Solar 100 LPD Geyser",
    capacity: "100 LPD",
    category: "Residential",
    description:
      "Compact and efficient solution for small homes and apartments looking for reliable hot water supply.",
    featureSummary: "Ideal for 2 to 3 members with efficient thermal insulation.",
    features: ["High-density insulation", "Durable stainless steel tank", "Low maintenance"],
    badge: "Best Seller",
  },
  {
    id: "solar-150",
    name: "Solar 150 LPD Geyser",
    capacity: "150 LPD",
    category: "Apartment",
    description:
      "A balanced choice for growing families that require dependable hot water throughout the day.",
    featureSummary: "Designed for moderate usage with faster heating performance.",
    features: ["Fast recovery", "Corrosion-resistant body", "User-friendly operation"],
    badge: "Popular",
  },
  {
    id: "solar-200",
    name: "Solar 200 LPD Geyser",
    capacity: "200 LPD",
    category: "Family Home",
    description:
      "A larger capacity option built for households with higher demand during peak usage hours.",
    featureSummary: "Perfect for larger families and extended daily hot-water needs.",
    features: ["Premium insulation", "Weather-resistant coating", "Energy-efficient design"],
    badge: "High Demand",
    image: "/product-images/sudarshan-saur-rooftop.webp",
    imageAlt: "Sudarshan Saur solar water heater installed on a rooftop",
  },
  {
    id: "solar-300",
    name: "Commercial Solar Heating Unit",
    capacity: "300 LPD",
    category: "Commercial",
    description:
      "Engineered for hotels, hostels, and commercial spaces with consistent hot-water requirements.",
    featureSummary: "Built for steady output in demanding operational environments.",
    features: ["Bulk capacity", "Long service life", "Low operational cost"],
    badge: "Commercial",
    image: "/product-images/solar-commercial.jpg",
    imageAlt: "Rooftop solar water heater installation",
    imageCredit: {
      author: "రవిచంద్ర",
      source: "https://commons.wikimedia.org/wiki/File:Solar_water_heater_installed_on_rooftop.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    },
  },
  {
    id: "solar-flat-plate",
    name: "Flat Plate Collector",
    capacity: "Custom",
    category: "System Kit",
    description:
      "A robust collector for solar thermal systems designed to maximise absorption and performance.",
    featureSummary: "Optimised for weather resilience and long-term reliability.",
    features: ["High absorption efficiency", "UV resistant finish", "Easy installation"],
    badge: "System Kit",
    image: "/product-images/solar-flat-plate.jpg",
    imageAlt: "Flat plate solar hot water collectors installed on a rooftop",
    imageCredit: {
      author: "Ross Hansen",
      source: "https://commons.wikimedia.org/wiki/File:Solar_Hot_Water_Panels.JPG",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    },
  },
  {
    id: "solar-evacuated",
    name: "Evacuated Tube System",
    capacity: "Custom",
    category: "Premium",
    description:
      "A premium solar heating system for better thermal performance in varying climatic conditions.",
    featureSummary: "Excellent for customers seeking high efficiency and year-round reliability.",
    features: ["High heat retention", "Excellent cold-weather performance", "Premium quality"],
    badge: "Premium",
  },
];

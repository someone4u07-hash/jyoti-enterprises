import type { StaticImageData } from "next/image";
import fireExtinguisherImage from "../assets/FX.jpg";
import solar100Image from "../assets/100lpd.webp";
import solar150Image from "../assets/150lpd.webp";
import solar200Image from "../assets/200lpd.jpeg";
import oilPressersImage from "../assets/oil_pressers.jpeg";
import flourMachineImage from "../assets/flour_machine.jpeg";
import flourMachineImage2 from "../assets/flour_machine2.jpeg";

export type Product = {
  id: string;
  name: string;
  capacity: string;
  category: string;
  description: string;
  featureSummary: string;
  features: string[];
  badge: string;
  image?: string | StaticImageData;
  images?: (string | StaticImageData)[];
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
    image: solar100Image,
    imageAlt: "100 LPD solar water heater",
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
    image: solar150Image,
    imageAlt: "150 LPD solar water heater",
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
    image: solar200Image,
    imageAlt: "200 LPD solar water heater",
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
    id: "domestic-flour-machine",
    name: "Domestic Flour Machine",
    capacity: "Custom configuration",
    category: "Domestic Equipment",
    description:
      "Compact semi-automatic flour milling machines for homes and small family-run production units, available in 1HP, 2HP, and 3HP variants.",
    featureSummary: "Available in custom capacity and finish options based on your exact requirements.",
    features: ["Custom output options", "Easy operation", "Suitable for household and small business use"],
    badge: "Awaiting Details",
    image: flourMachineImage,
    images: [flourMachineImage, flourMachineImage2],
    imageAlt: "Domestic flour machine",
  },
  {
    id: "domestic-oil-presser",
    name: "Domestic Oil Presser",
    capacity: "Custom configuration",
    category: "Domestic Equipment",
    description:
      "Efficient small-capacity oil extraction machines designed for home-based or local commercial use with practical upkeep.",
    featureSummary: "Please share the model, capacity, and usage requirement so we can suggest the right configuration.",
    features: ["Configuration-based sizing", "Low maintenance design", "Ideal for household or local processing"],
    badge: "Custom Quote",
    image: oilPressersImage,
    imageAlt: "Domestic oil presser machine",
  },
  {
    id: "fire-extinguisher",
    name: "Fire Extinguisher",
    capacity: "2kg / 4kg / 5kg",
    category: "Safety",
    description:
      "Reliable fire safety equipment for homes, workshops, offices, and small commercial premises requiring emergency protection.",
    featureSummary: "A practical protection upgrade for residential and workplace safety planning.",
    features: ["Easy-to-access safety equipment", "Suitable for small commercial and household spaces", "Helps support emergency preparedness"],
    badge: "Safety Essential",
    image: fireExtinguisherImage,
    imageAlt: "Fire extinguisher product for home and business safety",
  },
];

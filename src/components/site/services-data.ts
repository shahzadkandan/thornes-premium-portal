import medicine from "@/assets/service-medicine.jpg";
import surgical from "@/assets/service-surgical.jpg";
import wearables from "@/assets/service-wearables.jpg";
import medical from "@/assets/service-medical.jpg";
import dryfruits from "@/assets/service-dryfruits.jpg";
import frozen from "@/assets/service-frozen.jpg";
import rice from "@/assets/service-rice.jpg";
import meat from "@/assets/service-meat.jpg";
import poultry from "@/assets/service-poultry.jpg";
import oil from "@/assets/service-oil.jpg";
import seafood from "@/assets/service-seafood.jpg";
import dairy from "@/assets/service-dairy.jpg";
import biscuits from "@/assets/service-biscuits.jpg";
import { Pill, Scissors, Watch, Stethoscope, Nut, Snowflake, Wheat, Beef, Drumstick, Droplet, Fish, Milk, Cookie } from "lucide-react";

export const services = [
  { slug: "medicine-exports", title: "Medicine Exports", desc: "Licensed pharmaceutical formulations, generics and APIs shipped under strict cold-chain and GDP compliance.", image: medicine, Icon: Pill, to: "/medicine-exports" as const },
  { slug: "surgical-exports", title: "Surgical Exports", desc: "Precision stainless-steel surgical instruments crafted in Sialkot and verified to ISO 13485 standards.", image: surgical, Icon: Scissors, to: "/surgical-exports" as const },
  { slug: "medical-wearables", title: "Medical Wearables", desc: "Connected monitoring devices, smart patches and patient-centric wearables for modern healthcare.", image: wearables, Icon: Watch, to: "/medical-exports" as const },
  { slug: "medical-products", title: "Medical Products", desc: "Disposables, diagnostics and clinical consumables for hospitals, clinics and humanitarian programs.", image: medical, Icon: Stethoscope, to: "/medical-exports" as const },
  { slug: "dry-fruits", title: "Dry Fruits", desc: "Premium Pakistani almonds, pistachios, cashews, walnuts and dates, sorted and export-graded.", image: dryfruits, Icon: Nut, to: "/services" as const },
  { slug: "frozen-foods", title: "Frozen Foods", desc: "IQF vegetables, prepared meals and ready-to-cook ranges in temperature-controlled containers.", image: frozen, Icon: Snowflake, to: "/services" as const },
  { slug: "rice", title: "Rice", desc: "Long-grain Basmati and Irri varieties, milled, polished and packed to international standards.", image: rice, Icon: Wheat, to: "/services" as const },
  { slug: "meat", title: "Meat", desc: "Halal-certified beef, mutton and lamb cuts processed under HACCP-controlled facilities.", image: meat, Icon: Beef, to: "/services" as const },
  { slug: "poultry", title: "Poultry", desc: "Hygienically processed frozen chicken whole and cuts, halal-certified for global markets.", image: poultry, Icon: Drumstick, to: "/services" as const },
  { slug: "oil-ghee", title: "Oil & Ghee", desc: "Cooking oils and pure desi ghee in bulk and retail packaging for distributors and HoReCa.", image: oil, Icon: Droplet, to: "/services" as const },
  { slug: "sea-food", title: "Sea Food", desc: "Shrimp, prawns and fish sourced from the Arabian Sea and processed to EU and FDA grades.", image: seafood, Icon: Fish, to: "/services" as const },
  { slug: "dairy", title: "Dairy", desc: "UHT milk, cheese, butter and whey ingredients packaged for long-haul export shelf life.", image: dairy, Icon: Milk, to: "/services" as const },
  { slug: "biscuits", title: "Biscuits & Confectionery", desc: "Branded and private-label biscuits, candies and chocolates engineered for regional taste.", image: biscuits, Icon: Cookie, to: "/services" as const },
];

export type Service = (typeof services)[number];
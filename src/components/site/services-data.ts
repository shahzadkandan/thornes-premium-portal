import medicine from "@/assets/service-medicine.jpg";
import surgical from "@/assets/service-surgical.jpg";
import wearables from "@/assets/service-wearables.jpg";
import medical from "@/assets/service-medical.jpg";
import {
  ClipboardCheck,
  FileCheck2,
  Globe2,
  HeartHandshake,
  Pill,
  Scissors,
  Stethoscope,
  Truck,
  Watch,
} from "lucide-react";

export const services = [
  {
    slug: "pharmaceutical-sourcing",
    title: "Pharmaceutical Sourcing",
    desc: "Pakistan-based sourcing coordination for medicines, generics, dosage forms, and qualified buyer product requirements.",
    image: medicine,
    Icon: Pill,
    to: "/medicine-exports" as const,
  },
  {
    slug: "medicine-export-coordination",
    title: "Medicine Export Coordination",
    desc: "Quote, MOQ, documentation, Incoterms, and shipment planning support for international medicine buyers.",
    image: medicine,
    Icon: ClipboardCheck,
    to: "/medicine-exports" as const,
  },
  {
    slug: "surgical-instruments",
    title: "Surgical Instruments",
    desc: "Surgical instrument sourcing support for distributors, hospitals, clinics, NGOs, and procurement teams.",
    image: surgical,
    Icon: Scissors,
    to: "/surgical-exports" as const,
  },
  {
    slug: "medical-supplies",
    title: "Medical Supplies",
    desc: "Hospital consumables, clinical supplies, and medical procurement support for global healthcare buyers.",
    image: medical,
    Icon: Stethoscope,
    to: "/medical-exports" as const,
  },
  {
    slug: "medical-devices-wearables",
    title: "Medical Devices & Wearables",
    desc: "Medical device and wearable sourcing coordination, subject to product, certification, and destination review.",
    image: wearables,
    Icon: Watch,
    to: "/medical-exports" as const,
  },
  {
    slug: "quality-documentation",
    title: "Quality & Documentation Support",
    desc: "COA, COO, batch, expiry, commercial invoice, packing list, and GMP/FSC/CoPP review where applicable.",
    image: medical,
    Icon: FileCheck2,
    to: "/services" as const,
  },
  {
    slug: "regulatory-coordination",
    title: "Regulatory Coordination",
    desc: "Destination-aware document coordination for importers, distributors, institutional buyers, and registration teams.",
    image: medicine,
    Icon: Globe2,
    to: "/services" as const,
  },
  {
    slug: "global-logistics",
    title: "Global Logistics",
    desc: "Air, sea, freight forwarder, Incoterms, customs document, and temperature-sensitive shipment planning support.",
    image: surgical,
    Icon: Truck,
    to: "/services" as const,
  },
  {
    slug: "buyer-support",
    title: "Importer & Distributor Support",
    desc: "Structured RFQ support for importers, distributors, hospitals, NGOs, and institutional procurement teams.",
    image: wearables,
    Icon: HeartHandshake,
    to: "/contact" as const,
  },
];

export type Service = (typeof services)[number];

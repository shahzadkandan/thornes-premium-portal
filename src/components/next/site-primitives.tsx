import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Globe2,
  Handshake,
  HeartHandshake,
  Hospital,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  Pill,
  Plane,
  SearchCheck,
  Scissors,
  Send,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Truck,
  Watch,
  type LucideIcon,
} from "lucide-react";
import type { ImageAsset } from "../../lib/wordpress/types";

const iconMap: Record<string, LucideIcon> = {
  check: CheckCircle2,
  clipboard: ClipboardCheck,
  file: FileCheck2,
  globe: Globe2,
  handshake: Handshake,
  hand: HeartHandshake,
  heart: HeartHandshake,
  hospital: Hospital,
  map: MapPin,
  mail: Mail,
  package: PackageCheck,
  phone: Phone,
  pill: Pill,
  plane: Plane,
  quote: FileCheck2,
  search: SearchCheck,
  scissors: Scissors,
  send: Send,
  shield: ShieldCheck,
  sparkles: Sparkles,
  stethoscope: Stethoscope,
  truck: Truck,
  watch: Watch,
};

export function ContentIcon({ name, className = "size-5" }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? Sparkles;
  return <Icon aria-hidden="true" className={className} />;
}

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-7xl px-6 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--teal)]">
      <span className="size-1.5 rounded-full bg-[color:var(--teal)]" aria-hidden="true" />
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : "text-left"} max-w-3xl`}>
      <div
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${light ? "bg-slate-100 text-teal-700" : "glass text-[color:var(--teal)]"}`}
      >
        <Sparkles className="size-3" aria-hidden="true" />
        {eyebrow}
      </div>
      <h2
        className={`mt-4 text-balance font-display text-3xl font-semibold leading-tight md:text-5xl ${light ? "text-[color:var(--navy-deep)]" : "text-white"}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-8 ${light ? "text-slate-600" : "text-white/65"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function MediaImage({
  asset,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  asset: ImageAsset;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={asset.width ?? 1200}
      height={asset.height ?? 800}
      sizes={sizes}
      priority={priority}
      unoptimized={typeof asset.src === "string" && asset.src.startsWith("http")}
      className={className}
    />
  );
}

export function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/55">
      <Link href="/" className="transition hover:text-white">
        Home
      </Link>
      <span aria-hidden="true">/</span>
      <span className="text-white/85">{current}</span>
    </nav>
  );
}

export function PrimaryCta({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="premium-button inline-flex items-center justify-center gap-2 rounded-full brand-gradient px-5 py-3 text-sm font-semibold text-[color:var(--navy-deep)]"
    >
      {children}
      <Send className="size-4" aria-hidden="true" />
    </Link>
  );
}

export function SecondaryCta({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="premium-button-secondary inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white"
    >
      {children}
    </Link>
  );
}

export function DarkPageHero({
  eyebrow,
  title,
  description,
  current,
}: {
  eyebrow: string;
  title: string;
  description: string;
  current?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[color:var(--navy-deep)] pb-20 pt-36 text-white md:pb-28 md:pt-44">
      <div
        className="absolute inset-0 bg-[radial-gradient(760px_360px_at_55%_0%,color-mix(in_oklab,var(--teal)_15%,transparent),transparent_70%)]"
        aria-hidden="true"
      />
      <Container className="relative">
        {current ? <Breadcrumbs current={current} /> : null}
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.07] md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">{description}</p>
      </Container>
    </section>
  );
}

export function BulletList({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className={`flex gap-3 text-sm leading-6 ${light ? "text-slate-600" : "text-white/72"}`}
        >
          <CheckCircle2
            className="mt-0.5 size-4 shrink-0 text-[color:var(--teal)]"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

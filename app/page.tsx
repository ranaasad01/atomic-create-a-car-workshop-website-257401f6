"use client";

import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Star, Shield, Clock, Wrench, CheckCircle, Phone, ArrowRight, Settings, Zap, Award } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { BRAND } from "@/lib/data";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/motion";

// ─── Inline data ────────────────────────────────────────────────────────────

const FEATURED_SERVICES = [
  {
    id: "engine",
    icon: Settings,
    title: "Engine Diagnostics",
    description:
      "State-of-the-art OBD-II scanning and full engine health checks. We pinpoint the problem fast so you're back on the road sooner.",
    badge: "Most Popular",
  },
  {
    id: "brakes",
    icon: Shield,
    title: "Brake Service",
    description:
      "Pad replacements, rotor resurfacing, caliper rebuilds, and full hydraulic inspections. Your safety is non-negotiable.",
    badge: null,
  },
  {
    id: "oil",
    icon: Zap,
    title: "Oil & Fluid Service",
    description:
      "Conventional, synthetic, and high-mileage oil changes paired with a 27-point fluid top-off. Done in under 30 minutes.",
    badge: "Quick Drop-In",
  },
  {
    id: "transmission",
    icon: Wrench,
    title: "Transmission Repair",
    description:
      "Automatic and manual transmission rebuilds, fluid flushes, and clutch replacements backed by a 24-month warranty.",
    badge: null,
  },
];

const STATS = [
  { value: "18+", label: "Years in Business" },
  { value: "12,400+", label: "Vehicles Serviced" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "24-Mo", label: "Parts & Labor Warranty" },
];

const TESTIMONIALS = [
  {
    id: "t1",
    name: "Marcus T.",
    vehicle: "2019 Ford F-150",
    rating: 5,
    text: "IronClad diagnosed a misfire three other shops missed. Fixed it same day, fair price, and the truck runs better than ever. These guys are the real deal.",
  },
  {
    id: "t2",
    name: "Priya S.",
    vehicle: "2021 Honda CR-V",
    rating: 5,
    text: "Brought my CR-V in for a brake squeal. They found a cracked rotor, showed me the part, explained everything, and had me out by noon. Completely transparent.",
  },
  {
    id: "t3",
    name: "Derek W.",
    vehicle: "2017 Chevy Silverado",
    rating: 5,
    text: "Transmission rebuild done right the first time. Two years later, still shifts perfectly. The 24-month warranty gave me real peace of mind.",
  },
];

const WHY_US = [
  {
    id: "w1",
    icon: Award,
    title: "ASE-Certified Technicians",
    description:
      "Every mechanic on our floor holds current ASE certification. No apprentices working unsupervised on your vehicle.",
  },
  {
    id: "w2",
    icon: Shield,
    title: "24-Month Warranty",
    description:
      "All parts and labor are covered for 24 months or 24,000 miles — whichever comes later. We stand behind every repair.",
  },
  {
    id: "w3",
    icon: Clock,
    title: "Honest Timelines",
    description:
      "We give you a realistic completion window upfront and text you the moment your vehicle is ready. No guessing games.",
  },
  {
    id: "w4",
    icon: CheckCircle,
    title: "Transparent Pricing",
    description:
      "Written estimates before any work begins. The price we quote is the price you pay — no surprise line items.",
  },
];

// ─── Micro-components ────────────────────────────────────────────────────────

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-[var(--brand-accent)] text-[var(--brand-accent)]"
        />
      ))}
    </div>
  );
}

// ─── Hover card variant ───────────────────────────────────────────────────────

const cardHover: Variants = {
  rest: { y: 0, boxShadow: "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px -8px rgba(0,0,0,0.10)" },
  hover: { y: -4, boxShadow: "0 4px 8px rgba(0,0,0,0.06), 0 20px 40px -12px rgba(0,0,0,0.18)" },
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <Reveal>
        <section id="home" className="relative min-h-[92vh] flex items-center bg-[var(--brand-dark)] overflow-hidden">
          {/* Background texture */}
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(220,38,38,0.12),transparent_70%)]" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.5) 39px,rgba(255,255,255,0.5) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.5) 39px,rgba(255,255,255,0.5) 40px)",
            }} />

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 py-24 grid lg:grid-cols-2 gap-16 items-center">
            {/* Left copy */}
            <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col gap-6">
              <motion.span variants={fadeInUp} className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--brand-accent)]/30 bg-[var(--brand-accent)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--brand-accent)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-accent)] animate-pulse" />
                {t("hero.badge")}
              </motion.span>

              <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white text-balance">
                {t("hero.headline1")}
                <br />
                <span
                  className="text-[var(--brand-accent)]"
                  style={{
                    color: "#3b82f6",
                    backgroundColor: "#ffffff"
                  }}>
                  {t("hero.headline2")}
                </span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="max-w-lg text-lg leading-relaxed text-white/60">
                {t("hero.subtext")}
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-2">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand-accent)] px-7 py-3.5 text-sm font-bold text-white shadow-[0_0_24px_rgba(220,38,38,0.35)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_32px_rgba(220,38,38,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]">Book now</Link>
                <Link href="/services" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40">
                  {t("hero.cta_secondary")}
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center gap-2 pt-1">
                <Phone className="h-4 w-4 text-[var(--brand-accent)]" />
                <a href={`tel:${BRAND.phone}`} className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                  {BRAND.phone}
                </a>
                <span className="text-white/30 mx-1">·</span>
                <span className="text-sm text-white/50">{t("hero.hours_note")}</span>
              </motion.div>
            </motion.div>

            {/* Right image */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }} className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
                <img src="https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/dd6ffab1ada14236ab5aef5025a0cf4c.jpg" alt="IronClad Auto technician working on a vehicle engine" className="w-full h-[520px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/60 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-[var(--brand-dark)] border border-white/10 px-5 py-4 shadow-xl">
                <p className="text-3xl font-extrabold text-white">18+</p>
                <p className="text-xs text-white/50 mt-0.5">{t("hero.years_label")}</p>
              </div>
            </motion.div>
          </div>
        </section>
      </Reveal>
      {/* ── STATS STRIP ──────────────────────────────────────────────────── */}
      <Reveal>
        <section className="bg-[var(--brand-accent)] py-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.ul variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {STATS.map((stat) => (<motion.li key={stat.label} variants={scaleIn}>
                <p className="text-4xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-white/75">
                  {stat.label}
                </p>
              </motion.li>))}
            </motion.ul>
          </div>
        </section>
      </Reveal>
      {/* ── FEATURED SERVICES ────────────────────────────────────────────── */}
      <Reveal>
        <section id="services" className="bg-[var(--brand-surface)] py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--brand-accent)]">
                  {t("services.eyebrow")}
                </span>
                <h2 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--brand-dark)] text-balance">
                  {t("services.heading")}
                </h2>
              </div>
              <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-accent)] hover:gap-3 transition-all duration-200">
                {t("services.view_all")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {FEATURED_SERVICES.map((svc) => {
                const Icon = svc.icon;
                return (
                  <motion.div
                    key={svc.id}
                    variants={fadeInUp}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    // @ts-expect-error framer-motion custom variants
                    custom={cardHover}>
                    <motion.div variants={cardHover} className="relative flex flex-col gap-4 rounded-2xl border border-black/5 bg-white p-6 h-full cursor-default">
                      {svc.badge && (
                        <span className="absolute top-4 right-4 rounded-full bg-[var(--brand-accent)]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--brand-accent)]">
                          {svc.badge}
                        </span>
                      )}
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-accent)]/10">
                        <Icon className="h-6 w-6 text-[var(--brand-accent)]" />
                      </div>
                      <h3 className="text-lg font-bold text-[var(--brand-dark)]">
                        {svc.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-500 flex-1">
                        {svc.description}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </Reveal>
      {/* ── WHY IRONCLAD — split layout ──────────────────────────────────── */}
      <Reveal>
        <section id="about" className="bg-[var(--brand-dark)] py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
                <img src="https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/8f84d484cdd74d9b9db0ddcf131a8c8c.jpeg" alt="IronClad Auto shop floor with vehicles on lifts" className="w-full h-[460px] object-cover" />
              </div>
              <div className="absolute -top-5 -right-5 rounded-2xl bg-[var(--brand-accent)] px-6 py-5 shadow-xl">
                <p className="text-3xl font-extrabold text-white">24-Mo</p>
                <p className="text-xs text-white/80 mt-0.5">{t("why.warranty_label")}</p>
              </div>
            </div>

            {/* Copy side */}
            <div className="order-1 lg:order-2 flex flex-col gap-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--brand-accent)]">
                  {t("why.eyebrow")}
                </span>
                <h2 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-white text-balance">
                  {t("why.heading")}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-white/55">
                  {t("why.subtext")}
                </p>
              </div>

              <motion.ul variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="flex flex-col gap-5">
                {WHY_US.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.li key={item.id} variants={fadeInUp} className="flex gap-4 items-start">
                      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-accent)]/15">
                        <Icon className="h-5 w-5 text-[var(--brand-accent)]" />
                      </div>
                      <div>
                        <p className="font-bold text-white">{item.title}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-white/55">
                          {item.description}
                        </p>
                      </div>
                    </motion.li>
                  );
                })}
              </motion.ul>

              <Link href="/about" className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10">
                {t("why.cta")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <Reveal>
        <section className="bg-[var(--brand-surface)] py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="mb-14 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--brand-accent)]">
                {t("testimonials.eyebrow")}
              </span>
              <h2 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--brand-dark)] text-balance">
                {t("testimonials.heading")}
              </h2>
            </div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((review, i) => (
                <motion.div key={review.id} variants={scaleIn} className={`flex flex-col gap-4 rounded-2xl border border-black/5 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.10)] ${i === 1 ? "md:-mt-4 md:mb-4" : ""}`}>
                  <StarRow count={review.rating} />
                  <p className="text-sm leading-relaxed text-gray-600 flex-1">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="border-t border-black/5 pt-4">
                    <p className="font-bold text-[var(--brand-dark)]">{review.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{review.vehicle}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </Reveal>
      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <Reveal>
        <section id="contact" className="relative bg-[var(--brand-accent)] py-20 overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_50%,rgba(255,255,255,0.08),transparent_70%)]" />
          <div className="relative mx-auto max-w-4xl px-6 text-center flex flex-col items-center gap-6">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white text-balance">
              {t("cta.heading")}
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-white/75">
              {t("cta.subtext")}
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-[var(--brand-accent)] shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                {t("cta.book_btn")}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={`tel:${BRAND.phone}`} className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 bg-transparent px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                <Phone className="h-4 w-4" />
                {BRAND.phone}
              </a>
            </div>
            <p className="text-sm text-white/60">{t("cta.hours_note")}</p>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
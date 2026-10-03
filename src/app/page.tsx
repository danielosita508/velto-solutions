import React from "react";
import Link from "next/link";
import {
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  MessageCircle,
  Search,
  Handshake,
} from "lucide-react";
import Section from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import PhoneLink from "@/components/ui/PhoneLink";
import FadeIn from "@/components/ui/FadeIn";
import { serviceCategories, phoneNumbers } from "@/lib/services";

/* ── Value props ─────────────────────────────── */
const values = [
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "We identify what needs to get done and find the most practical way to help you get there.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    description:
      "Clear communication, honest timelines, and consistent follow-through on every task.",
  },
  {
    icon: TrendingUp,
    title: "Progress",
    description:
      "Every solution is designed to move you forward — reducing stress and freeing up your time for what matters.",
  },
];

/* ── How-it-works steps ──────────────────────── */
const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Reach out",
    description: "Give us a call and tell us what you need help with.",
  },
  {
    number: "02",
    icon: Search,
    title: "We understand your need",
    description:
      "We listen carefully, ask the right questions, and figure out how best to support you.",
  },
  {
    number: "03",
    icon: Handshake,
    title: "We help you manage the workload",
    description:
      "We get to work — delivering practical, organised support so you can focus on your goals.",
  },
];

export default function HomePage() {
  const liveCategories = serviceCategories.filter((s) => s.live);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section
        id="hero"
        className="relative min-h-[92vh] flex items-center bg-velto-bg overflow-hidden"
      >
        {/* Subtle ambient glow */}
        <div
          className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full opacity-[0.07] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #C5F0D0 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-[-30%] right-[-10%] w-[40vw] h-[40vw] rounded-full opacity-[0.05] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #779681 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-28 pb-20 md:pt-36 md:pb-28">
          <FadeIn>
            <p className="eyebrow mb-6">
              Problem Solving{" "}
              <span className="inline-block mx-2 text-velto-emerald">/</span>{" "}
              Reliability{" "}
              <span className="inline-block mx-2 text-velto-emerald">/</span>{" "}
              Progress
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] max-w-3xl mb-6">
              Solutions that{" "}
              <span className="text-velto-mint">move you forward.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-velto-text-secondary text-base sm:text-lg max-w-xl mb-10 leading-relaxed font-body">
              We make complex tasks easier for people and businesses —
              identifying problems and providing practical, dependable
              solutions.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <Button href="#contact" icon id="hero-cta-primary">
                Let&apos;s get you started
              </Button>
              <Button href="#services" variant="secondary" id="hero-cta-secondary">
                See our services
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <Section id="services" secondary>
        <FadeIn>
          <p className="eyebrow mb-4">What we do</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-12 max-w-lg">
            How we can <span className="text-velto-mint">help</span>
          </h2>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {liveCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <FadeIn key={category.slug} delay={i * 0.1}>
                <Link href={category.href} className="group block h-full">
                  <GlassCard className="h-full flex flex-col" id={`service-card-${category.slug}`}>
                    <div className="w-10 h-10 rounded-lg bg-velto-emerald/50 flex items-center justify-center mb-5 group-hover:bg-velto-emerald/70 transition-colors duration-300">
                      <Icon
                        size={20}
                        strokeWidth={1.5}
                        className="text-velto-mint"
                      />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-velto-text mb-2 group-hover:text-velto-mint transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-velto-text-secondary text-sm leading-relaxed font-body flex-1">
                      {category.description}
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-velto-sage text-sm group-hover:text-velto-mint transition-colors duration-300">
                      Learn more
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </div>
                  </GlassCard>
                </Link>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.2}>
          <p className="mt-10 text-velto-sage text-sm text-center font-body">
            More solutions are on the way.
          </p>
        </FadeIn>
      </Section>

      {/* ═══ WHY VELTO ═══ */}
      <Section id="why-velto">
        <FadeIn>
          <p className="eyebrow mb-4">Why Velto</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-14 max-w-md">
            Built on what <span className="text-velto-mint">matters</span>
          </h2>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-3">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <FadeIn key={v.title} delay={i * 0.12}>
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 rounded-xl bg-velto-emerald/40 flex items-center justify-center mb-5">
                    <Icon size={22} strokeWidth={1.5} className="text-velto-mint" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-velto-text mb-2">
                    {v.title}
                  </h3>
                  <p className="text-velto-text-secondary text-sm leading-relaxed font-body">
                    {v.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* ═══ HOW IT WORKS ═══ */}
      <Section id="how-it-works" secondary>
        <FadeIn>
          <p className="eyebrow mb-4">How it works</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-14 max-w-lg">
            Simple steps to get{" "}
            <span className="text-velto-mint">started</span>
          </h2>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <FadeIn key={s.number} delay={i * 0.12}>
                <GlassCard id={`step-${s.number}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-velto-mint font-heading text-2xl font-bold opacity-50">
                      {s.number}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-velto-emerald/40 flex items-center justify-center">
                      <Icon size={18} strokeWidth={1.5} className="text-velto-sage" />
                    </div>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-velto-text mb-2">
                    {s.title}
                  </h3>
                  <p className="text-velto-text-secondary text-sm leading-relaxed font-body">
                    {s.description}
                  </p>
                </GlassCard>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* ═══ CONTACT ═══ */}
      <Section id="contact">
        <FadeIn>
          <div className="text-center max-w-xl mx-auto">
            <p className="eyebrow mb-4">Contact</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
              Send us a message to{" "}
              <span className="text-velto-mint">discuss your needs.</span>
            </h2>
            <p className="text-velto-text-secondary text-sm mb-10 font-body">
              Call us directly — we&apos;re happy to talk through how we can help.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="flex flex-col items-center gap-5">
            {phoneNumbers.map((p) => (
              <PhoneLink
                key={p.tel}
                display={p.display}
                tel={p.tel}
                id={`contact-phone-${p.display.replace(/\s/g, "")}`}
              />
            ))}
          </div>
        </FadeIn>
      </Section>
    </>
  );
}

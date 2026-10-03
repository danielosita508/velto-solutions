import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import {
  FileText,
  ClipboardList,
  BookOpen,
  BarChart3,
  PieChart,
  Sparkles,
  Clock,
  Heart,
} from "lucide-react";
import Section from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import PhoneLink from "@/components/ui/PhoneLink";
import ServiceItemCard from "@/components/ui/ServiceItem";
import FadeIn from "@/components/ui/FadeIn";
import { academicSupportServices, phoneNumbers } from "@/lib/services";

export const metadata: Metadata = {
  title: "Academic Support",
  description:
    "From IT documentation to research data analysis, get the support you need to manage your final-year workload with more confidence and less stress.",
  openGraph: {
    title: "Academic Support | Velto Solutions",
    description:
      "From IT documentation to research data analysis, get the support you need to manage your final-year workload with more confidence and less stress.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const serviceIcons = [FileText, ClipboardList, BookOpen, BarChart3, PieChart];

const benefits = [
  {
    icon: Sparkles,
    text: "Less academic overwhelm",
  },
  {
    icon: ClipboardList,
    text: "Better-organized documentation",
  },
  {
    icon: Clock,
    text: "More time for learning, rest and other priorities",
  },
];

export default function AcademicSupportPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[70vh] flex items-center bg-velto-bg overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute top-[-15%] right-[-5%] w-[45vw] h-[45vw] rounded-full opacity-[0.06] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #C5F0D0 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-28 pb-16 md:pt-36 md:pb-24">
          <FadeIn>
            <p className="eyebrow mb-6">Academic Support</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] max-w-2xl mb-6">
              Final year shouldn&apos;t{" "}
              <span className="text-velto-mint">feel this hard.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-velto-text-secondary text-base sm:text-lg max-w-xl mb-10 leading-relaxed font-body">
              From IT documentation to research data analysis, get the support
              you need to manage your workload with more confidence and less
              stress.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Button href="#academic-contact" icon id="academic-hero-cta">
              Let&apos;s get you started
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* ═══ SERVICES LIST ═══ */}
      <Section id="academic-services" secondary>
        <FadeIn>
          <p className="eyebrow mb-4">What we offer</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-12 max-w-lg">
            Practical support for{" "}
            <span className="text-velto-mint">final-year students</span>
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-5">
          {academicSupportServices.map((service, i) => (
            <FadeIn key={service.number} delay={i * 0.08}>
              <ServiceItemCard
                number={service.number}
                title={service.title}
                description={service.description}
                icon={serviceIcons[i]}
              />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ═══ IMAGE / VISUAL AREA ═══ */}
      <Section id="academic-visual">
        <FadeIn>
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] max-w-4xl mx-auto">
            <Image src="/images/student.jpg" alt="A young Nigerian student working at a laptop" fill className="object-cover" />
          </div>
        </FadeIn>
      </Section>

      {/* ═══ BENEFIT STRIP ═══ */}
      <Section id="academic-benefits" secondary>
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-3">
              You focus on your goals.{" "}
              <span className="text-velto-mint">
                We help you manage the workload.
              </span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-3">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <FadeIn key={b.text} delay={i * 0.1}>
                <GlassCard
                  hover={false}
                  className="text-center flex flex-col items-center"
                  id={`benefit-${i + 1}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-velto-emerald/40 flex items-center justify-center mb-4">
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className="text-velto-mint"
                    />
                  </div>
                  <p className="text-velto-text text-sm font-body leading-relaxed">
                    {b.text}
                  </p>
                </GlassCard>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* ═══ CTA / CONTACT ═══ */}
      <Section id="academic-contact">
        <FadeIn>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-3">
              Let&apos;s get you{" "}
              <span className="text-velto-mint">started</span>
            </h2>
            <p className="text-velto-text-secondary text-base mb-10 font-body">
              Send us a message to discuss your needs.
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
                id={`academic-phone-${p.display.replace(/\s/g, "")}`}
              />
            ))}
          </div>
        </FadeIn>
      </Section>
    </>
  );
}

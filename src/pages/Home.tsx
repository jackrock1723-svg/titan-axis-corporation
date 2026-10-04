import { ArrowRight } from 'lucide-react';
import ButtonLink from '@/components/ButtonLink';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import FeatureCard from '@/components/FeatureCard';
import ProcessFlow from '@/components/ProcessFlow';
import Reveal from '@/components/Reveal';
import HeroVisual from '@/components/HeroVisual';
import NetworkVisual from '@/components/NetworkVisual';
import VisionVisual from '@/components/VisionVisual';
import {
  hero, businessCards, techSection, aiProcessSteps,
  talentSection, recruitmentSteps, marketsSection, markets,
  whyPoints, visionSection, finalCta,
} from '@/data/content';

export default function Home() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-gold-400/[0.04] blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,37,72,0.04),transparent_60%)]" />
        </div>

        <div className="container-base relative pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-36 lg:pb-40">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="flex flex-col gap-6">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-gold-400" />
                  <span className="eyebrow">{hero.eyebrow}</span>
                </div>
              </Reveal>
              <Reveal delay={1}>
                <h1 className="heading-xl">{hero.headline}</h1>
              </Reveal>
              <Reveal delay={2}>
                <p className="body-lg max-w-xl">{hero.supporting}</p>
              </Reveal>
              <Reveal delay={3}>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <ButtonLink to={hero.primaryCta.to} size="lg">
                    {hero.primaryCta.label}
                    <ArrowRight size={16} />
                  </ButtonLink>
                  <ButtonLink to={hero.secondaryCta.to} variant="secondary" size="lg">
                    {hero.secondaryCta.label}
                  </ButtonLink>
                </div>
              </Reveal>
            </div>

            <Reveal delay={2}>
              <HeroVisual />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── BUSINESS ────────────────────────────────────────────── */}
      <Section className="bg-gray-50/50 border-y border-gray-100">
        <div className="container-base">
          <SectionHeading
            eyebrow="What We Do"
            heading={<>Built Around Real Business Operations</>}
            text="Titan Axis brings together talent, digital operations, business support and international services under one developing business group."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
            {businessCards.map((card, i) => (
              <FeatureCard
                key={card.number}
                number={card.number}
                title={card.title}
                description={card.description}
                icon={card.icon}
                to={card.to}
                delay={((i + 1) as 1 | 2 | 3 | 4)}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* ── TECHNOLOGY (dark contrast section) ───────────────────── */}
      <Section className="bg-ink-900 border-y border-ink-800">
        <div className="container-base">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <SectionHeading
              eyebrow="Technology Direction"
              heading={techSection.heading}
              text={techSection.text}
              onDark
            />
            <div className="flex items-center">
              <ProcessFlow steps={aiProcessSteps} direction="vertical" onDark />
            </div>
          </div>
        </div>
      </Section>

      {/* ── TALENT ──────────────────────────────────────────────── */}
      <Section className="bg-white">
        <div className="container-base">
          <SectionHeading
            eyebrow="International Talent"
            heading={talentSection.heading}
            text={talentSection.text}
          />
          <Reveal delay={1} className="mt-12 md:mt-16">
            <ProcessFlow steps={recruitmentSteps} direction="horizontal" />
          </Reveal>
          <div className="mt-10">
            <ButtonLink to="/business/international-talent" variant="ghost" size="md">
              Learn About Talent Solutions
              <ArrowRight size={14} />
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* ── MARKETS ─────────────────────────────────────────────── */}
      <Section className="bg-gray-50/50 border-y border-gray-100">
        <div className="container-base">
          <div className="grid gap-12 items-center lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Global Connections"
                heading={marketsSection.heading}
                text={marketsSection.text}
              />
              <div className="mt-8 flex flex-wrap gap-2.5">
                {markets.map((m, i) => (
                  <Reveal key={m} delay={((i + 1) as 1 | 2 | 3 | 4 | 5 | 6)}>
                    <span className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium tracking-wider text-ink-900 transition-colors duration-300 hover:border-gold-300 hover:text-gold-600">
                      {m}
                    </span>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal delay={2}>
              <NetworkVisual />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ── WHY TITAN AXIS ──────────────────────────────────────── */}
      <Section className="bg-white">
        <div className="container-base">
          <SectionHeading
            eyebrow="Why Titan Axis"
            heading="Built For A Connected Business World"
            align="center"
            className="mb-14 md:mb-16"
          />
          <div className="grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
            {whyPoints.map((point, i) => (
              <Reveal key={point.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="group flex h-full flex-col gap-4 bg-white p-8 transition-colors duration-300 hover:bg-gray-50/50">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gold-600 transition-colors duration-300 group-hover:border-gold-300 group-hover:bg-gold-50">
                    <point.icon size={18} strokeWidth={1.5} />
                  </span>
                  <h3 className="text-lg font-semibold text-ink-900">{point.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{point.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FUTURE VISION ───────────────────────────────────────── */}
      <Section className="bg-gray-50/50 border-y border-gray-100">
        <div className="container-base">
          <SectionHeading
            eyebrow="Future Vision"
            heading={visionSection.heading}
            text={visionSection.text}
            align="center"
            className="mb-8"
          />
          <VisionVisual pillars={visionSection.pillars} result={visionSection.result} />
        </div>
      </Section>

      {/* ── FINAL CTA ───────────────────────────────────────────── */}
      <Section className="bg-white">
        <div className="container-base">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white px-8 py-16 text-center md:px-16 md:py-20">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-0 h-40 w-[600px] -translate-x-1/2 rounded-full bg-gold-400/[0.05] blur-3xl" />
              </div>
              <div className="relative flex flex-col items-center gap-6">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-gold-400" />
                  <span className="eyebrow">Get In Touch</span>
                  <span className="h-px w-8 bg-gold-400" />
                </div>
                <h2 className="heading-lg max-w-2xl">{finalCta.heading}</h2>
                <p className="body-lg max-w-xl">{finalCta.text}</p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <ButtonLink to={finalCta.primaryCta.to} size="lg">
                    {finalCta.primaryCta.label}
                    <ArrowRight size={16} />
                  </ButtonLink>
                  <ButtonLink to={finalCta.secondaryCta.to} variant="secondary" size="lg">
                    {finalCta.secondaryCta.label}
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

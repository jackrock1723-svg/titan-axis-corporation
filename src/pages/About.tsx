import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { ChevronRight } from 'lucide-react';
import { aboutPage } from '@/data/content';

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        heading={aboutPage.heading}
        text={aboutPage.text}
      />

      {/* WHO WE ARE */}
      <Section className="bg-white">
        <div className="container-base">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
            <SectionHeading eyebrow="Identity" heading="Who We Are" />
            <Reveal delay={1}>
              <p className="text-lg leading-relaxed text-gray-700">{aboutPage.whoWeAre}</p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* OUR FOCUS */}
      <Section className="bg-gray-50/50 border-y border-gray-100">
        <div className="container-base">
          <SectionHeading
            eyebrow="Core Pillars"
            heading="Our Focus"
            align="center"
            className="mb-14"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aboutPage.focusAreas.map((area, i) => (
              <Reveal key={area.label} delay={((i + 1) as 1 | 2 | 3 | 4)}>
                <div className="group flex flex-col items-center gap-4 rounded-2xl border border-gray-200 bg-white p-8 text-center transition-all duration-300 hover:border-gold-300 hover:shadow-lg hover:shadow-gray-200/40">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gold-600 transition-colors duration-300 group-hover:border-gold-300 group-hover:bg-gold-50">
                    <area.icon size={22} strokeWidth={1.5} />
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-wider text-ink-900">{area.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* OUR EVOLUTION */}
      <Section className="bg-white">
        <div className="container-base">
          <SectionHeading
            eyebrow="Evolution"
            heading="Our Evolution"
            text="From business vision to intelligent systems — the path Titan Axis is developing along."
            className="mb-14"
          />
          <div className="flex flex-col items-center">
            <div className="flex flex-col gap-0">
              {aboutPage.evolution.map((step, i) => (
                <Reveal key={step} delay={((i % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-sm font-bold text-gold-600 transition-colors duration-300 hover:border-gold-300 hover:bg-gold-50">
                      {i + 1}
                    </div>
                    <span className="text-base font-semibold text-ink-900">{step}</span>
                    {i < aboutPage.evolution.length - 1 && (
                      <ChevronRight size={16} className="text-gray-300 rotate-90 ml-5 -mb-3" />
                    )}
                  </div>
                  {i < aboutPage.evolution.length - 1 && (
                    <div className="ml-6 h-6 w-px bg-gray-200" />
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* FOUNDER */}
      <Section className="bg-gray-50/50 border-t border-gray-100">
        <div className="container-base">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-gold-400" />
                <span className="eyebrow">Founder</span>
                <span className="h-px w-8 bg-gold-400" />
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold-300/60 bg-gold-50">
                <span className="text-2xl font-extrabold text-gold-700">{aboutPage.founder.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <h3 className="heading-md">{aboutPage.founder.name}</h3>
            </Reveal>
            <Reveal delay={2}>
              <span className="text-sm font-semibold uppercase tracking-widest text-gold-600">{aboutPage.founder.role}</span>
            </Reveal>
            <Reveal delay={3}>
              <p className="body-lg max-w-xl">{aboutPage.founder.bio}</p>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}

import { ArrowRight, Network, Users, Building2, Briefcase } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import ButtonLink from '@/components/ButtonLink';
import { partnersPage } from '@/data/content';

const partnerTypes = [
  { label: 'Businesses', desc: 'Companies looking for talent, digital or operational support.', icon: Building2 },
  { label: 'Professionals', desc: 'Independent experts across technology, marketing and operations.', icon: Users },
  { label: 'Independent Operators', desc: 'Individuals working across international markets.', icon: Briefcase },
  { label: 'Network Relationships', desc: 'Connections that create opportunity across regions.', icon: Network },
];

export default function Partners() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        heading={partnersPage.heading}
        text={partnersPage.text}
      />

      <Section className="bg-white">
        <div className="container-base">
          <SectionHeading
            eyebrow="Who We Work With"
            heading="Business Network"
            text="Titan Axis works through relationships across different markets and business environments."
            className="mb-12"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {partnerTypes.map((type, i) => (
              <Reveal key={type.label} delay={((i + 1) as 1 | 2 | 3 | 4)}>
                <div className="group flex h-full flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:border-gold-300 hover:shadow-lg hover:shadow-gray-200/40">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gold-600 transition-colors duration-300 group-hover:border-gold-300 group-hover:bg-gold-50">
                    <type.icon size={22} strokeWidth={1.5} />
                  </span>
                  <h3 className="text-lg font-semibold text-ink-900">{type.label}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{type.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gray-50/50 border-t border-gray-100">
        <div className="container-base">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white px-8 py-14 text-center md:px-16 md:py-20">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-0 h-40 w-[500px] -translate-x-1/2 rounded-full bg-gold-400/[0.05] blur-3xl" />
              </div>
              <div className="relative flex flex-col items-center gap-6">
                <h2 className="heading-lg max-w-xl">Discuss a Partnership</h2>
                <p className="body-lg max-w-lg">
                  If you're a business, professional or independent operator interested in working together, we'd like to hear from you.
                </p>
                <ButtonLink to={partnersPage.cta.to} size="lg">
                  {partnersPage.cta.label}
                  <ArrowRight size={16} />
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

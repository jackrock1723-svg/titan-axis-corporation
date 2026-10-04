import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import ButtonLink from '@/components/ButtonLink';
import { digitalOpsPage } from '@/data/content';

export default function DigitalOperations() {
  return (
    <>
      <PageHero
        eyebrow="Business — Digital Operations"
        heading={digitalOpsPage.heading}
        text={digitalOpsPage.text}
      />

      <Section className="bg-white">
        <div className="container-base">
          <SectionHeading
            eyebrow="Capabilities"
            heading="Areas of Focus"
            className="mb-12"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {digitalOpsPage.areas.map((area, i) => (
              <Reveal key={area.label} delay={((i % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}>
                <div className="group flex h-full flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-gold-300 hover:shadow-md hover:shadow-gray-200/40">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gold-600 transition-colors duration-300 group-hover:border-gold-300 group-hover:bg-gold-50">
                      <area.icon size={20} strokeWidth={1.5} />
                    </span>
                    <span className="text-xs font-bold text-gold-600/50">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <span className="text-base font-semibold text-ink-900">{area.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-gray-50/50 border-t border-gray-100">
        <div className="container-base">
          <Reveal>
            <div className="flex flex-col items-center gap-6 text-center">
              <h2 className="heading-md max-w-xl">Build your digital operations</h2>
              <ButtonLink to="/contact" size="lg">
                Discuss Digital Operations
                <ArrowRight size={16} />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

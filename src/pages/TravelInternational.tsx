import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import ButtonLink from '@/components/ButtonLink';
import { travelPage } from '@/data/content';

export default function TravelInternational() {
  return (
    <>
      <PageHero
        eyebrow="Business — Travel & International"
        heading={travelPage.heading}
        text={travelPage.text}
      />

      <Section className="bg-white">
        <div className="container-base">
          <SectionHeading
            eyebrow="Development Areas"
            heading="What We're Exploring"
            text="This is an intentionally broad area — we are developing services that connect people and opportunities across borders."
            className="mb-12"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {travelPage.areas.map((area, i) => (
              <Reveal key={area.label} delay={((i + 1) as 1 | 2 | 3 | 4)}>
                <div className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-gold-300 hover:shadow-md hover:shadow-gray-200/40">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gold-600 transition-colors duration-300 group-hover:border-gold-300 group-hover:bg-gold-50">
                    <area.icon size={20} strokeWidth={1.5} />
                  </span>
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
              <h2 className="heading-md max-w-xl">Interested in international services?</h2>
              <ButtonLink to="/contact" size="lg">
                Contact Titan Axis
                <ArrowRight size={16} />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

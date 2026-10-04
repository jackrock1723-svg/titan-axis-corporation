import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import ProcessFlow from '@/components/ProcessFlow';
import Reveal from '@/components/Reveal';
import ButtonLink from '@/components/ButtonLink';
import { talentPage } from '@/data/content';

export default function InternationalTalent() {
  return (
    <>
      <PageHero
        eyebrow="Business — International Talent"
        heading={talentPage.heading}
        text={talentPage.text}
      >
        <div className="mt-2">
          <span className="inline-block rounded-lg border border-gold-300/60 bg-gold-50 px-4 py-2 text-sm font-semibold text-gold-700">
            {talentPage.positioning}
          </span>
        </div>
      </PageHero>

      {/* SERVICES */}
      <Section className="bg-white">
        <div className="container-base">
          <SectionHeading
            eyebrow="Capabilities"
            heading="Services"
            text="Structured support across the international talent acquisition process."
            className="mb-12"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {talentPage.services.map((service, i) => (
              <Reveal key={service.label} delay={((i % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}>
                <div className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:border-gold-300 hover:shadow-md hover:shadow-gray-200/40">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gold-600 transition-colors duration-300 group-hover:border-gold-300 group-hover:bg-gold-50">
                    <service.icon size={18} strokeWidth={1.5} />
                  </span>
                  <span className="text-sm font-medium text-ink-900">{service.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* PROCESS */}
      <Section className="bg-gray-50/50 border-y border-gray-100">
        <div className="container-base">
          <SectionHeading
            eyebrow="How It Works"
            heading="Recruitment Process"
            text="A structured, operational approach — not a traditional job board."
            className="mb-12"
          />
          <Reveal delay={1}>
            <div className="hidden md:block">
              <ProcessFlow steps={talentPage.process} direction="horizontal" />
            </div>
          </Reveal>
          <div className="md:hidden">
            <ProcessFlow steps={talentPage.process} direction="vertical" />
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-white">
        <div className="container-base">
          <Reveal>
            <div className="flex flex-col items-center gap-6 text-center">
              <h2 className="heading-md max-w-xl">Need international talent?</h2>
              <p className="body-lg max-w-lg">Tell us your requirements and we'll discuss how we can help.</p>
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

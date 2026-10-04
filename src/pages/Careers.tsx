import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import ButtonLink from '@/components/ButtonLink';
import { careersPage } from '@/data/content';

export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        heading={careersPage.heading}
        text={careersPage.text}
      />

      <Section className="bg-white">
        <div className="container-base">
          <SectionHeading
            eyebrow="Opportunities"
            heading="Areas We're Interested In"
            text="We don't have open vacancies listed right now, but we're always interested in connecting with people who can contribute."
            className="mb-12"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {careersPage.categories.map((cat, i) => (
              <Reveal key={cat.label} delay={((i % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}>
                <div className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-gold-300 hover:shadow-md hover:shadow-gray-200/40">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gold-600 transition-colors duration-300 group-hover:border-gold-300 group-hover:bg-gold-50">
                    <cat.icon size={20} strokeWidth={1.5} />
                  </span>
                  <span className="text-base font-semibold text-ink-900">{cat.label}</span>
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
              <h2 className="heading-md max-w-xl">Think you'd be a fit?</h2>
              <p className="body-lg max-w-lg">
                Tell us about yourself, your background and how you'd like to contribute.
              </p>
              <ButtonLink to={careersPage.cta.to} size="lg">
                {careersPage.cta.label}
                <ArrowRight size={16} />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

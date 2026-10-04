import { ArrowRight, Sparkles } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import ButtonLink from '@/components/ButtonLink';
import { aiWorkforcePage } from '@/data/content';

export default function AIWorkforce() {
  return (
    <>
      <PageHero
        eyebrow="Technology — AI Workforce"
        heading={aiWorkforcePage.heading}
        text={aiWorkforcePage.text}
      />

      {/* Future Agent Concepts */}
      <Section className="bg-white">
        <div className="container-base">
          <div className="flex items-start gap-3 rounded-xl border border-gold-300/60 bg-gold-50 p-5 mb-14 max-w-2xl">
            <Sparkles size={18} className="mt-0.5 shrink-0 text-gold-600" />
            <p className="text-sm leading-relaxed text-gray-700">
              These are <span className="font-semibold text-gold-700">future concepts and developing directions</span> — not finished products. They represent what Titan Axis is building toward.
            </p>
          </div>

          <SectionHeading
            eyebrow="Agent Concepts"
            heading="Future AI Workforce"
            text="Specialized intelligent agents designed to support different areas of business operations."
            className="mb-12"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aiWorkforcePage.agents.map((agent, i) => (
              <Reveal key={agent.name} delay={((i % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}>
                <div className="group relative flex h-full flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:border-gold-300 hover:shadow-lg hover:shadow-gray-200/40">
                  <span className="absolute right-6 top-6 rounded-full border border-gold-300/60 bg-gold-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-gold-600">
                    Future
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gold-600 transition-colors duration-300 group-hover:border-gold-300 group-hover:bg-gold-50">
                    <agent.icon size={22} strokeWidth={1.5} />
                  </span>
                  <h3 className="text-lg font-semibold text-ink-900">{agent.name}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{agent.description}</p>
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
              <h2 className="heading-md max-w-xl">Interested in AI development?</h2>
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

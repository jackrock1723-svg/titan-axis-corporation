import { ArrowRight, AlertCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import StackVisual from '@/components/StackVisual';
import Reveal from '@/components/Reveal';
import ButtonLink from '@/components/ButtonLink';
import { techPage } from '@/data/content';

export default function Technology() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        heading={techPage.heading}
        text={techPage.text}
      />

      {/* Architecture — dark contrast section */}
      <Section className="bg-ink-900 border-y border-ink-800">
        <div className="container-base">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="System Architecture"
                heading="How The System Works"
                text="From AI models to execution and improvement — the architecture we are developing."
                onDark
              />
              <Reveal delay={1} className="mt-8">
                <div className="flex items-start gap-3 rounded-xl border border-gold-400/15 bg-gold-400/[0.06] p-5">
                  <AlertCircle size={18} className="mt-0.5 shrink-0 text-gold-400" />
                  <p className="text-sm leading-relaxed text-gray-300">
                    This is a <span className="font-semibold text-gold-300">developing technology direction</span>. These components represent the architecture Titan Axis is building toward, not a finished platform.
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="flex items-center">
              <StackVisual steps={techPage.architecture} onDark />
            </div>
          </div>
        </div>
      </Section>

      {/* Links to subsections */}
      <Section className="bg-white">
        <div className="container-base">
          <SectionHeading
            eyebrow="Explore Further"
            heading="Technology Directions"
            className="mb-10"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <Reveal>
              <ButtonLink to="/technology/ai-workforce" variant="secondary" size="lg" className="w-full justify-between">
                AI Workforce
                <ArrowRight size={16} />
              </ButtonLink>
            </Reveal>
            <Reveal delay={1}>
              <ButtonLink to="/technology/intelligent-automation" variant="secondary" size="lg" className="w-full justify-between">
                Intelligent Automation
                <ArrowRight size={16} />
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="bg-gray-50/50 border-t border-gray-100">
        <div className="container-base">
          <Reveal>
            <div className="flex flex-col items-center gap-6 text-center">
              <h2 className="heading-md max-w-xl">Interested in technology partnership?</h2>
              <ButtonLink to="/contact" size="lg">
                Start a Conversation
                <ArrowRight size={16} />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

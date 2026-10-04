import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import StackVisual from '@/components/StackVisual';
import Reveal from '@/components/Reveal';
import ButtonLink from '@/components/ButtonLink';
import { automationPage } from '@/data/content';

export default function IntelligentAutomation() {
  return (
    <>
      <PageHero
        eyebrow="Technology — Intelligent Automation"
        heading={automationPage.heading}
        text={automationPage.text}
      />

      {/* Process — dark contrast section */}
      <Section className="bg-ink-900 border-y border-ink-800">
        <div className="container-base">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Process"
                heading="How It Works"
                text="From input to improvement — each stage builds on the last."
                onDark
              />
              <Reveal delay={1} className="mt-8">
                <p className="text-lg leading-relaxed text-gray-300">
                  The objective is to create systems that can support repetitive and structured business work
                  while maintaining appropriate <span className="font-semibold text-gold-300">human oversight</span>.
                </p>
              </Reveal>
            </div>
            <div className="flex items-center">
              <StackVisual steps={automationPage.steps} onDark />
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="container-base">
          <Reveal>
            <div className="flex flex-col items-center gap-6 text-center">
              <h2 className="heading-md max-w-xl">Explore automation with us</h2>
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

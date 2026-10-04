import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import Reveal from '@/components/Reveal';
import ButtonLink from '@/components/ButtonLink';
import { businessPage } from '@/data/content';

export default function Business() {
  return (
    <>
      <PageHero
        eyebrow="Business"
        heading={businessPage.heading}
        text={businessPage.text}
      />

      <Section className="bg-white">
        <div className="container-base flex flex-col gap-20 lg:gap-28">
          {businessPage.areas.map((area, i) => (
            <div key={area.title}>
              <Reveal>
                <div className={`grid gap-10 lg:grid-cols-2 lg:gap-16 ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  {/* Content */}
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gold-600">
                        <area.icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="text-xs font-bold tracking-widest text-gold-600">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h2 className="heading-md">{area.title}</h2>
                    <p className="body-lg">{area.description}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {area.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors duration-200 hover:border-gold-300 hover:text-ink-900"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4">
                      <ButtonLink to={area.to} variant="secondary" size="md">
                        Explore {area.title}
                        <ArrowRight size={14} />
                      </ButtonLink>
                    </div>
                  </div>

                  {/* Visual */}
                  <Reveal delay={1}>
                    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-gray-50/50">
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(191,168,103,0.05),transparent_70%)]" />
                      <div className="relative flex h-full w-full items-center justify-center">
                        <div className="flex flex-col gap-3">
                          {area.capabilities.slice(0, 5).map((cap, ci) => (
                            <div
                              key={cap}
                              className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-2.5 transition-all duration-300 hover:border-gold-300"
                              style={{ marginLeft: `${ci * 12}px` }}
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                              <span className="text-xs font-medium text-gray-600">{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gray-50/50 border-t border-gray-100">
        <div className="container-base">
          <Reveal>
            <div className="flex flex-col items-center gap-6 text-center">
              <h2 className="heading-md max-w-xl">Want to work with Titan Axis?</h2>
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

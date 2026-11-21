import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Terminal } from 'lucide-react';
import { HERO_FACTS, PROFILE } from '../data/portfolioData';

export function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="top"
      className="relative border-b border-white/10 bg-[#060807] pt-10 pb-14 sm:pt-14 sm:pb-16 lg:pt-20 lg:pb-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Typographic Column */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <p className="font-mono text-xs tracking-wide text-[#00E676] sm:text-sm">
                {PROFILE.brand} <span className="text-white/30" aria-hidden="true">·</span>{' '}
                <span className="text-[#A1A8A4]">{PROFILE.location}</span>
              </p>

              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.75rem] lg:leading-[1.06]">
                {PROFILE.name}
                <span className="mt-2 block text-[#D4D8D6] font-semibold text-2xl sm:text-3xl lg:text-[2.25rem]">
                  {PROFILE.title}
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#A1A8A4] sm:text-lg">
                {PROFILE.tagline}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#00E676] px-6 py-3 text-sm font-semibold text-[#050706] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#22F28A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E676] focus-visible:ring-offset-2 focus-visible:ring-offset-[#060807]"
              >
                View Projects
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/15 bg-transparent px-6 py-3 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#00E676]/60 hover:text-[#00E676] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E676]"
              >
                Contact Me
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5">
            <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0D100E] sm:h-80 lg:h-full lg:min-h-[340px]">
              {!imgError ? (
                <img
                  src={PROFILE.heroImage.url}
                  alt={PROFILE.heroImage.alt}
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="h-full w-full object-cover object-center"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#0D100E] to-[#121915] p-6 text-center">
                  <Terminal className="h-10 w-10 text-[#00E676]" aria-hidden="true" />
                  <p className="font-display text-base font-semibold text-white">
                    {PROFILE.brand}
                  </p>
                  <p className="text-xs text-[#A1A8A4]">{PROFILE.title}</p>
                </div>
              )}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060807]/65 via-transparent to-transparent"
              />
            </div>
          </div>
        </div>

        {/* Full-width 4-column Key Facts Strip below Hero Split */}
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {HERO_FACTS.map((fact) => (
            <div key={fact.label} className="bg-[#0A0D0B] px-5 py-4">
              <p className="font-mono text-xs text-[#88918C]">{fact.label}</p>
              <p className="mt-1 text-sm font-medium text-white">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

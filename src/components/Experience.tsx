import { motion } from 'motion/react';
import { EXPERIENCES } from '../data/portfolioData';

export function Experience() {
  return (
    <section id="experience" className="border-b border-white/10 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="font-mono text-xs text-[#00E676]">03 · Experience</p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Engineering &amp; Delivery Timeline
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#A1A8A4]">
            Shipping VTU payment systems, booking backends, and production client platforms across
            fintech and commerce teams.
          </p>
        </motion.div>

        <div className="mt-10 border-t border-white/10">
          {EXPERIENCES.map((exp, idx) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 gap-6 border-b border-white/10 py-8 lg:grid-cols-12 lg:gap-10"
            >
              {/* Left Timeline Marker & Period */}
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3 font-mono text-xs tabular-nums">
                  <span className="text-[#00E676] font-medium">{exp.index}</span>
                  <span className="text-white/30" aria-hidden="true">/</span>
                  <span className="text-[#D4D8D6]">{exp.period}</span>
                  <span className="text-white/30" aria-hidden="true">·</span>
                  <span className="text-[#88918C]">{exp.location}</span>
                </div>
                <h3 className="mt-2.5 font-display text-xl font-semibold text-white">
                  {exp.company}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#A1A8A4]">{exp.role}</p>
              </div>

              {/* Right Description & Highlights */}
              <div className="lg:col-span-8">
                <p className="text-[15px] leading-relaxed text-[#D4D8D6]">
                  {exp.description}
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#9CA39F]">
                  {exp.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-3 shrink-0 bg-[#00E676]/70"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

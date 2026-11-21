import { useState } from 'react';
import { motion } from 'motion/react';
import { PROFILE, SKILL_GROUPS, type SkillGroup } from '../data/portfolioData';

type FilterCategory = 'All' | SkillGroup['category'];

const FILTER_OPTIONS: FilterCategory[] = ['All', 'Backend', 'Databases', 'DevOps', 'Mobile'];

export function AboutSkills() {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('All');

  const visibleGroups =
    selectedCategory === 'All'
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((group) => group.category === selectedCategory);

  return (
    <section id="about" className="border-b border-white/10 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="font-mono text-xs text-[#00E676]">01 · About</p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Backend architecture built for reliability
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[#B4BBB7] sm:text-base">
              {PROFILE.about}
            </p>

            <div className="mt-8 border-t border-white/10 pt-6">
              <dl className="grid grid-cols-2 gap-6">
                <div>
                  <dt className="font-mono text-xs text-[#88918C]">Primary Domain</dt>
                  <dd className="mt-1 text-sm font-medium text-white">Fintech &amp; VTU Rails</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-[#88918C]">Teaching</dt>
                  <dd className="mt-1 text-sm font-medium text-white">PHP for Beginners</dd>
                </div>
              </dl>
            </div>
          </motion.div>

          {/* Skills Column */}
          <motion.div
            id="skills"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-xs text-[#00E676]">02 · Skills</p>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Technical Stack
                </h2>
              </div>

              {/* Interactive Filter Tabs */}
              <div
                role="tablist"
                aria-label="Filter skills by category"
                className="flex flex-wrap items-center gap-1 rounded-lg border border-white/10 bg-[#0D100E] p-1"
              >
                {FILTER_OPTIONS.map((category) => {
                  const isActive = selectedCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setSelectedCategory(category)}
                      className={`min-h-9 rounded-md px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E676] ${
                        isActive
                          ? 'bg-[#00E676] text-[#050706] font-semibold'
                          : 'text-[#A1A8A4] hover:text-white'
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Grouped Skill Tiles (Zero-Pill architectural boxes) */}
            <div className="mt-6 grid grid-cols-1 gap-4">
              {visibleGroups.map((group) => (
                <div
                  key={group.category}
                  className="rounded-xl border border-white/10 bg-[#0D100E] p-5"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-display text-base font-semibold text-white">
                      {group.category}
                    </h3>
                    <p className="text-xs text-[#88918C]">{group.summary}</p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-md border border-white/12 bg-[#141815] px-3 py-1.5 font-mono text-xs font-medium text-[#E5E9E7] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#00E676]/50 hover:text-[#00E676]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

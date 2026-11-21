import { ArrowUp } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050706] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p className="text-xs text-[#88918C]">
          © 2026 TOMMYTECH — Software Solutions
        </p>

        <div className="flex flex-wrap items-center gap-6 text-xs text-[#A1A8A4]">
          <span>{PROFILE.location}</span>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-white transition-colors hover:text-[#00E676]"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

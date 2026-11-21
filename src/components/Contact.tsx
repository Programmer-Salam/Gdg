import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, Send } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  const validate = (values: FormState): Partial<FormState> => {
    const nextErrors: Partial<FormState> = {};
    if (!values.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!values.subject.trim()) nextErrors.subject = 'Please add a short subject.';
    if (values.message.trim().length < 10) {
      nextErrors.message = 'Please include at least 10 characters about your project.';
    }
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmittedData(form);
    setForm(INITIAL_FORM);
  };

  const buildMailtoHref = (data: FormState) => {
    const subject = encodeURIComponent(data.subject);
    const body = encodeURIComponent(
      `Hi Badmus,\n\nFrom: ${data.name} (${data.email})\n\n${data.message}`
    );
    return `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Direct Channels Column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="font-mono text-xs text-[#00E676]">05 · Contact</p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Start a conversation
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#A1A8A4]">
              Available for backend engineering contracts, fintech &amp; payment integrations, and
              PHP mentorship through {PROFILE.brand}.
            </p>

            <div className="mt-8 space-y-4">
              {/* Email Card */}
              <div className="rounded-xl border border-white/10 bg-[#0D100E] p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs text-[#88918C]">Email</span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex min-h-8 items-center gap-1.5 rounded-md border border-white/10 px-2.5 py-1 text-xs font-medium text-[#D4D8D6] transition-colors hover:border-[#00E676]/50 hover:text-[#00E676] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E676]"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-[#00E676]" aria-hidden="true" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#00E676] break-all"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#00E676]" aria-hidden="true" />
                  {PROFILE.email}
                </a>
              </div>

              {/* GitHub Profiles */}
              <div className="rounded-xl border border-white/10 bg-[#0D100E] p-4">
                <span className="font-mono text-xs text-[#88918C]">GitHub</span>
                <div className="mt-3 flex flex-col gap-2.5">
                  {PROFILE.githubProfiles.map((gh) => (
                    <a
                      key={gh.url}
                      href={gh.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-10 items-center justify-between rounded-lg border border-white/10 bg-[#121613] px-3.5 py-2 text-sm font-medium text-white transition-colors hover:border-[#00E676]/50 hover:text-[#00E676]"
                    >
                      <span className="inline-flex items-center gap-2.5">
                        <Github className="h-4 w-4 text-[#00E676]" aria-hidden="true" />
                        {gh.label}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-[#88918C]" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href={PROFILE.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-center justify-between rounded-xl border border-white/10 bg-[#0D100E] p-4 text-sm font-medium text-white transition-colors hover:border-[#00E676]/50 hover:text-[#00E676]"
              >
                <span className="inline-flex items-center gap-2.5">
                  <Linkedin className="h-4 w-4 text-[#00E676]" aria-hidden="true" />
                  LinkedIn — {PROFILE.name}
                </span>
                <ArrowUpRight className="h-4 w-4 text-[#88918C]" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* Right Frontend-Only Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl border border-white/10 bg-[#0D100E] p-6 sm:p-8">
              {submittedData ? (
                <div className="space-y-5">
                  <div className="inline-flex items-center gap-2 rounded-lg border border-[#00E676]/30 bg-[#00E676]/10 px-3 py-1.5 text-xs font-medium text-[#00E676]">
                    <Check className="h-4 w-4" aria-hidden="true" />
                    Message Prepared
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white">
                    Thanks, {submittedData.name}
                  </h3>

                  <p className="text-sm leading-relaxed text-[#B4BBB7]">
                    Your inquiry has been validated locally in the browser. Send it directly via
                    your email client below, or reset the form to compose another note.
                  </p>

                  <div className="rounded-xl border border-white/10 bg-[#060807] p-4 text-sm text-[#D4D8D6]">
                    <p className="font-mono text-xs text-[#88918C]">Subject</p>
                    <p className="mt-1 font-medium text-white">{submittedData.subject}</p>
                    <p className="mt-3 font-mono text-xs text-[#88918C]">Message</p>
                    <p className="mt-1 whitespace-pre-line text-[#B4BBB7]">
                      {submittedData.message}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={buildMailtoHref(submittedData)}
                      className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#00E676] px-5 py-2.5 text-sm font-semibold text-[#050706] transition-colors hover:bg-[#22F28A]"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      Open in Email App
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmittedData(null)}
                      className="inline-flex min-h-11 items-center rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-[#D4D8D6] transition-colors hover:text-white"
                    >
                      Send Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      Send a direct message
                    </h3>
                    <p className="mt-1 text-xs text-[#88918C]">
                      Share project scope, timeline, or mentorship questions.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-medium text-[#D4D8D6]"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="mt-2 w-full rounded-lg border border-white/15 bg-[#060807] px-3.5 py-2.5 text-sm text-white placeholder-[#68706B] transition-colors focus:border-[#00E676] focus:outline-none"
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-rose-400">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-medium text-[#D4D8D6]"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@example.com"
                        className="mt-2 w-full rounded-lg border border-white/15 bg-[#060807] px-3.5 py-2.5 text-sm text-white placeholder-[#68706B] transition-colors focus:border-[#00E676] focus:outline-none"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-rose-400">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-medium text-[#D4D8D6]"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="Laravel VTU backend, API project, or PHP mentoring"
                      className="mt-2 w-full rounded-lg border border-white/15 bg-[#060807] px-3.5 py-2.5 text-sm text-white placeholder-[#68706B] transition-colors focus:border-[#00E676] focus:outline-none"
                    />
                    {errors.subject && (
                      <p className="mt-1.5 text-xs text-rose-400">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium text-[#D4D8D6]"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about the system you want to build or integrate..."
                      className="mt-2 w-full resize-y rounded-lg border border-white/15 bg-[#060807] px-3.5 py-2.5 text-sm text-white placeholder-[#68706B] transition-colors focus:border-[#00E676] focus:outline-none"
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-rose-400">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#00E676] px-6 py-3 text-sm font-semibold text-[#050706] transition-colors duration-150 hover:bg-[#22F28A] sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E676]"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Check, Copy, ExternalLink, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const email = 'monsifelouarat@gmail.com';

const contactLinks = [
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/your-profile',
    href: 'https://linkedin.com/in/your-profile',
  },
  {
    label: 'GitHub',
    value: 'github.com/monseeef',
    href: 'https://github.com/monseeef',
  },
];

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative scroll-mt-28 py-20 sm:py-28">
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/12 blur-3xl sm:h-[30rem] sm:w-[30rem]"
        animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.34, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-center shadow-2xl shadow-slate-950/40 backdrop-blur-md sm:p-10 lg:p-12"
        initial={{ y: 28, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-300/10 text-emerald-200 shadow-[0_0_30px_rgba(52,211,153,0.2)]">
          <Mail aria-hidden="true" size={22} />
        </div>

        <h2 id="contact-title" className="mt-6 text-3xl font-bold tracking-normal text-white sm:text-5xl">
          Let&apos;s build something great
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
          Open to junior full-stack opportunities, React Native projects, and
          UI-focused collaborations.
        </p>

        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-4 text-left">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                Email
              </p>
              <a
                href={`mailto:${email}`}
                className="mt-1 block text-sm font-medium text-slate-100 transition hover:text-emerald-200 sm:text-base"
              >
                {email}
              </a>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              aria-live="polite"
            >
              {copied ? <Check aria-hidden="true" size={17} /> : <Copy aria-hidden="true" size={17} />}
              {copied ? 'Copied' : 'Copy Email'}
            </button>
          </div>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-300 transition duration-300 hover:border-emerald-300/40 hover:bg-emerald-300/10 hover:text-emerald-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  aria-label={`Open ${link.label} profile`}
                >
                  <span>
                    <span className="block font-semibold text-white">{link.label}</span>
                    <span className="mt-1 block text-xs text-slate-400">{link.value}</span>
                  </span>
                  <ExternalLink aria-hidden="true" size={17} className="shrink-0" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;

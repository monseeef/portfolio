import { Code2, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton.jsx';

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow-[0_24px_80px_rgba(2,6,23,0.38)] backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-emerald-300/25 hover:shadow-[0_30px_100px_rgba(2,6,23,0.5)]"
      initial={{ y: 28, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{
        duration: 0.58,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -right-20 top-12 h-40 w-40 rounded-full bg-emerald-400/15 blur-3xl" />
        <div className="absolute -bottom-20 left-8 h-48 w-48 rounded-full bg-teal-300/10 blur-3xl" />
      </div>

      <div className="relative">
        <div
          className={`relative mb-6 aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${project.gradient}`}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.28),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.35),transparent_24%),linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:auto,auto,2rem_2rem,2rem_2rem]" />
          <div className="absolute bottom-4 left-4 right-4 h-16 rounded-lg border border-white/10 bg-slate-950/40 backdrop-blur-sm" />
        </div>

        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 min-h-24 text-sm leading-7 text-slate-300">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} tech stack`}>
          {project.tech.map((item) => (
            <li
              key={item}
              className="rounded-full border border-emerald-300/15 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-200"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <MagneticButton
            href={project.githubUrl}
            aria-label={`View ${project.title} on GitHub`}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-100 transition duration-300 hover:border-emerald-300/50 hover:bg-emerald-300/10 hover:text-emerald-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <Code2 aria-hidden="true" size={17} />
            GitHub
          </MagneticButton>
          <MagneticButton
            href={project.demoUrl}
            aria-label={`Open ${project.title} live demo`}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-300 px-4 py-2.5 text-sm font-semibold text-slate-950 transition duration-300 hover:shadow-lg hover:shadow-emerald-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <ExternalLink aria-hidden="true" size={17} />
            Live Demo
          </MagneticButton>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;

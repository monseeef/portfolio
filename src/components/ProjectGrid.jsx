import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard.jsx';

const projects = [
  {
    title: 'Audiophile',
    description:
      'Modular e-commerce platform focused on clean architecture, cart logic, and responsive product pages.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    githubUrl: '#',
    demoUrl: '#',
    gradient: 'from-slate-800 via-emerald-950 to-slate-950',
  },
  {
    title: 'Athar App',
    description:
      'React Native mobile app focused on routines, spiritual consistency, Expo Router navigation, and clean mobile UX.',
    tech: ['React Native', 'Expo Router', 'TypeScript'],
    githubUrl: '#',
    demoUrl: '#',
    gradient: 'from-slate-800 via-teal-950 to-emerald-950',
  },
  {
    title: 'Pet Store E-commerce',
    description:
      'Full-stack MERN e-commerce app with authentication, products, cart flow, and backend API integration.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    githubUrl: '#',
    demoUrl: '#',
    gradient: 'from-slate-800 via-cyan-950 to-slate-950',
  },
];

function ProjectGrid() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-28 py-24 sm:py-32">
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial={{ y: 18, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
          Selected Work
        </p>
        <h2 id="projects-title" className="mt-4 text-4xl font-bold tracking-normal text-white sm:text-5xl">
          Projects built with clarity and polish
        </h2>
        <p className="mt-5 text-base leading-8 text-slate-300">
          Practical applications shaped around clean implementation, thoughtful
          user flows, and responsive interfaces.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default ProjectGrid;

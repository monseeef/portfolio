import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT'],
  },
  {
    title: 'Mobile',
    skills: ['React Native', 'Expo', 'Expo Router'],
  },
  {
    title: 'Design',
    skills: ['Figma', 'Adobe Illustrator', 'UI/UX Design', 'Responsive Design'],
  },
];

function Skills() {
  return (
    <section id="about" aria-labelledby="skills-title" className="relative scroll-mt-28 py-24 sm:py-32">
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.18, 0.3, 0.18] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial={{ y: 18, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
          About
        </p>
        <h2 id="skills-title" className="mt-4 text-4xl font-bold tracking-normal text-white sm:text-5xl">
          Tech Stack
        </h2>
        <p className="mt-5 text-base leading-8 text-slate-300">
          Tools and technologies I use to build modern web and mobile experiences.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-[0_24px_80px_rgba(2,6,23,0.36)] backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-emerald-300/30 hover:shadow-[0_30px_100px_rgba(2,6,23,0.5)]"
            initial={{ y: 28, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.58,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-emerald-400/10 blur-3xl transition duration-500 group-hover:bg-emerald-400/20" />

            <div className="relative">
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="flex h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(52,211,153,0.85)]"
                  aria-hidden="true"
                />
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              </div>

              <ul className="flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-300 transition duration-300 group-hover:border-emerald-300/20 group-hover:text-emerald-100"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Skills;

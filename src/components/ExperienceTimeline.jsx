import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'HNG Internship',
    role: 'Frontend Developer Intern',
    date: '2024',
    achievements: [
      'Built responsive UI components with React',
      'Collaborated in agile team workflows',
      'Improved frontend performance and accessibility',
    ],
  },
  {
    company: 'Ark-X',
    role: 'UI/UX & Frontend Developer',
    date: '2025',
    achievements: [
      'Designed clean user-focused interfaces in Figma',
      'Developed scalable frontend layouts',
      'Improved UX consistency across multiple screens',
    ],
  },
];

function ExperienceTimeline() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="relative scroll-mt-28 py-24 sm:py-32"
    >
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial={{ y: 18, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
          Experience
        </p>
        <h2
          id="experience-title"
          className="mt-4 text-4xl font-bold tracking-normal text-white sm:text-5xl"
        >
          My professional journey building modern digital experiences.
        </h2>
      </motion.div>

      <div className="relative mx-auto mt-16 max-w-5xl">
        <div
          className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-emerald-300/60 to-transparent shadow-[0_0_24px_rgba(52,211,153,0.45)] lg:left-1/2 lg:-translate-x-1/2"
          aria-hidden="true"
        />

        <div className="space-y-10 lg:space-y-0">
          {experiences.map((experience, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.article
                key={`${experience.company}-${experience.date}`}
                className="relative grid gap-6 pl-12 lg:grid-cols-[1fr_4rem_1fr] lg:gap-8 lg:pl-0"
                initial={{ x: isLeft ? -36 : 36, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className={isLeft ? 'lg:col-start-1' : 'lg:col-start-3'}>
                  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-[0_24px_80px_rgba(2,6,23,0.36)] backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-emerald-300/30 hover:shadow-[0_30px_100px_rgba(2,6,23,0.5)]">
                    <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-emerald-400/10 blur-3xl transition duration-500 group-hover:bg-emerald-400/20" />

                    <div className="relative">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-white">
                            {experience.company}
                          </h3>
                          <p className="mt-2 text-sm font-medium text-emerald-300">
                            {experience.role}
                          </p>
                        </div>
                        <time
                          dateTime={experience.date}
                          className="inline-flex w-fit rounded-full border border-emerald-300/15 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200"
                        >
                          {experience.date}
                        </time>
                      </div>

                      <ul className="mt-6 space-y-3">
                        {experience.achievements.map((achievement) => (
                          <li key={achievement} className="flex gap-3 text-sm leading-7 text-slate-300">
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(52,211,153,0.8)]"
                              aria-hidden="true"
                            />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute left-4 top-7 -translate-x-1/2 lg:static lg:col-start-2 lg:flex lg:translate-x-0 lg:justify-center"
                  aria-hidden="true"
                >
                  <motion.span
                    className="relative flex h-4 w-4 rounded-full bg-emerald-300 shadow-[0_0_24px_rgba(52,211,153,0.9)]"
                    animate={{ scale: [1, 1.18, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{
                      duration: 2.4,
                      delay: index * 0.25,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <span className="absolute inset-[-0.55rem] rounded-full border border-emerald-300/25" />
                  </motion.span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ExperienceTimeline;

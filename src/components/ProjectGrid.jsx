import { motion } from "framer-motion";
import audiophileImage from "../assets/projects/audiophile.png";
import ticketAppImage from "../assets/projects/ticket-app.png";
import ProjectCard from "./ProjectCard.jsx";

const projects = [
  {
    title: "ContentFlow AI",
    description:
      "AI SaaS content workflow platform positioned around faster ideation, clean user flows, and practical automation for creators and small teams.",
    tech: ["MERN Stack", "React", "Node.js", "AI SaaS", "Tailwind CSS"],
    image: "",
    imageAlt: "ContentFlow AI project preview",
    githubUrl: "",
    demoUrl: "",
    gradient: "from-slate-800 via-emerald-950 to-cyan-950",
  },
  {
    title: "Petopia — MERN Pet E-commerce Platform",
    description:
      "Production-ready MERN pet commerce platform with customer storefront, admin dashboard, authentication, product management, cart and checkout flows, and deployed full-stack infrastructure.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Redux Toolkit", "Stripe", "Vercel"],
    image: "",
    imageAlt: "Petopia MERN pet e-commerce platform preview",
    githubUrl: "https://github.com/monseeef/pawmerce-mern-ecommerce",
    demoUrl: "https://petopia-store.vercel.app",
    adminUrl: "https://petopia-store-admin.vercel.app",
    gradient: "from-slate-800 via-cyan-950 to-slate-950",
  },
  {
    title: "Audiophile",
    description:
      "Production-style e-commerce interface demonstrating reusable React architecture, cart state management, responsive product pages, and polished conversion-focused UI.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    image: audiophileImage,
    imageAlt: "Audiophile e-commerce homepage screenshot",
    githubUrl: "https://github.com/monseeef/audiophile",
    demoUrl: "https://audiophile-hng.netlify.app/",
    gradient: "from-slate-800 via-emerald-950 to-slate-950",
  },
  {
    title: "Ticket App",
    description:
      "Responsive ticket management interface with clear component architecture, clean information hierarchy, and a smooth workflow-oriented user experience.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    image: ticketAppImage,
    imageAlt: "Ticket App landing page screenshot",
    githubUrl: "https://github.com/monseeef/Tickets-react-app",
    demoUrl: "https://ticket-reactapp.netlify.app/",
    gradient: "from-slate-800 via-cyan-950 to-emerald-950",
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
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">Selected Work</p>
        <h2 id="projects-title" className="mt-4 text-4xl font-bold tracking-normal text-white sm:text-5xl">
          Projects built with clarity and polish
        </h2>
        <p className="mt-5 text-base leading-8 text-slate-300">
          Practical applications shaped around clean implementation, thoughtful user flows, and responsive interfaces.
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

import { motion } from "framer-motion";
import audiophileImage from "../assets/projects/audiophile.png";
import ticketAppImage from "../assets/projects/ticket-app.png";
import ProjectCard from "./ProjectCard.jsx";

const projects = [
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
    title: "Pet Store E-commerce",
    description:
      "Modern full-stack pet ecommerce platform built with the MERN stack, featuring a premium storefront experience, secure authentication, Stripe checkout integration, wishlist/cart flows, responsive admin dashboard, and production deployment with MongoDB Atlas, Render, and Vercel.",
    tech: [
      "React",
      "Express",
      "Node.js",
      "MongoDB Atlas",
      "Stripe",
      "Tailwind CSS",
      "Redux Toolkit",
      "Vercel",
      "Render",
    ],
    image: "",
    imageAlt: "Pet Store E-commerce project preview",
    githubUrl: "https://github.com/monseeef/pet-store-ecommerce",
    demoUrl: "https://petopia-store.vercel.app/",
    gradient: "from-slate-800 via-cyan-950 to-slate-950",
  },
  {
    title: "Ticket App",
    description:
      "Customer support ticket dashboard built with responsive React components, clear information hierarchy, and a smooth workflow-oriented user experience.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    image: ticketAppImage,
    imageAlt: "Ticket App landing page screenshot",
    githubUrl: "https://github.com/monseeef/Tickets-react-app",
    demoUrl: "https://ticket-reactapp.netlify.app/",
    gradient: "from-slate-800 via-cyan-950 to-emerald-950",
  },
  {
    title: "Athar App",
    description:
      "React Native mobile experience focused on habit consistency, Expo Router navigation, clean screen architecture, and a calm mobile-first UX.",
    tech: ["React Native", "Expo Router", "TypeScript"],
    image: "",
    imageAlt: "Athar App project preview",
    githubUrl: "",
    demoUrl: "",
    gradient: "from-slate-800 via-teal-950 to-emerald-950",
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

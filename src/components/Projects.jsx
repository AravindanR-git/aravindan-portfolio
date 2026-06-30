import { motion } from "framer-motion";
import { useState } from "react";
import MagneticButton from "./MagneticButton";
import Reveal from "./Reveal";

const projects = [
  {
    title: "VTruck Billing App",
    icon: "🚚",
    description:
      "Android application for generating and printing truck delivery bills using POS receipt printers. Supports multiple bill types, delivery tracking, and bill history management.",
    technologies: [
      "Android",
      "Java",
      "SQLite",
      "POS Printing",
    ],
  },
  {
    title: "Inventory Management System",
    icon: "📦",
    description:
      "Inventory management solution for tracking stock, managing products, monitoring quantities, and generating reports for business operations.",
    technologies: [
      "React",
      "Flask",
      "SQLite",
      "REST API",
    ],
  },
  {
    title: "Healthcare Appointment System",
    icon: "🏥",
    description:
      "Appointment booking platform allowing patients to browse doctors, view availability, and schedule appointments through a modern responsive interface.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind",
      "Node.js",
    ],
  },
];

function ProjectCard({ project }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const handleMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 18;
    const rotateX = -((y / rect.height) - 0.5) * 18;

    setRotate({
      x: rotateX,
      y: rotateY,
    });

    setGlow({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const resetRotation = () => {
    setRotate({
      x: 0,
      y: 0,
    });
  };

  return (
    <motion.div
      
  onMouseMove={handleMove}
  animate={{
    rotateX: rotate.x,
    rotateY: rotate.y,
    y: [0, -8, 0],
  }}
  transition={{
    rotateX: {
      type: "spring",
      stiffness: 150,
      damping: 18,
    },
    rotateY: {
      type: "spring",
      stiffness: 150,
      damping: 18,
    },
    y: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
      onMouseLeave={resetRotation}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 18,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      whileHover={{
        y: -15,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-lg
        p-8
      "
    >
      {/* Cursor Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(
              circle at ${glow.x}% ${glow.y}%,
              rgba(34,211,238,0.25),
              transparent 35%
            )
          `,
        }}
      />

      {/* Existing Hover Glow */}
      <div
  className="
    absolute
    inset-0
    rounded-3xl
    opacity-0
    group-hover:opacity-100
    transition-all
    duration-500
    border
    border-cyan-400/40
    shadow-[0_0_30px_rgba(34,211,238,0.4)]
  "
/>
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-500
          bg-gradient-to-br
          from-cyan-500/10
          via-transparent
          to-violet-500/10
        "
      />

      <div
        className="relative z-10"
        style={{
          transform: "translateZ(40px)",
        }}
      >
        <motion.div
  className="text-6xl mb-6"
  animate={{
    y: [0, -10, 0],
    rotate: [0, 5, 0, -5, 0],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
  }}
>
  {project.icon}
</motion.div>

        <h3 className="text-2xl font-bold mb-4 text-cyan-400">
          {project.title}
        </h3>

        <p className="text-slate-300 leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                px-3
                py-1
                rounded-full
                bg-cyan-500/10
                border
                border-cyan-400/20
                text-cyan-300
                text-sm
              "
            >
              {tech}
            </span>
          ))}
        </div>

        <MagneticButton>
  View Details →
</MagneticButton>
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <Reveal>
    <section
      id="projects"
      className="min-h-screen bg-[#050816] text-white px-6 py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-20"
      >
        <motion.span
  animate={{
    textShadow: [
      "0 0 10px rgba(34,211,238,0.2)",
      "0 0 30px rgba(34,211,238,0.8)",
      "0 0 10px rgba(34,211,238,0.2)",
    ],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
  }}
>
  Featured Projects
</motion.span>
      </motion.h2>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
    </Reveal>
  );
}

export default Projects;
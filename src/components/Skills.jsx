import { motion } from "framer-motion";
import Reveal from "./Reveal";

const skills = [
  {
    title: "Frontend",
    tech: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend",
    tech: ["Flask", "Node.js", "Express"],
  },
  {
    title: "Database",
    tech: ["MongoDB", "SQLite"],
  },
  {
    title: "Tools",
    tech: ["Git", "REST APIs", "Postman"],
  },
];

function Skills() {
  return (
    <Reveal>
    <section
      id="skills"
      className="bg-[#050816] text-white px-6 py-24 overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Skills Cosmos
      </motion.h2>

      {/* MOBILE LAYOUT */}
      <div className="lg:hidden max-w-md mx-auto space-y-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{
              scale: 1.02,
            }}
            className="
              bg-white/5
              backdrop-blur-lg
              border
              border-white/10
              rounded-3xl
              p-6
            "
          >
            <h3 className="text-xl font-bold text-cyan-400 mb-4">
              {skill.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {skill.tech.map((tech) => (
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
          </motion.div>
        ))}
      </div>

      {/* DESKTOP COSMOS */}
      <div className="hidden lg:block relative w-full max-w-6xl h-[700px] mx-auto">

        {/* Glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-3xl" />
        </div>

        {/* Connection Lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 700"
        >
          <motion.line
            x1="500"
            y1="350"
            x2="500"
            y2="130"
            stroke="#22d3ee"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />

          <motion.line
            x1="500"
            y1="350"
            x2="220"
            y2="350"
            stroke="#22d3ee"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.2 }}
          />

          <motion.line
            x1="500"
            y1="350"
            x2="780"
            y2="350"
            stroke="#22d3ee"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.4 }}
          />

          <motion.line
            x1="500"
            y1="350"
            x2="500"
            y2="570"
            stroke="#22d3ee"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.6 }}
          />
        </svg>

        {/* Core */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            type: "spring",
          }}
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-40
            h-40
            rounded-full
            bg-cyan-500/20
            border
            border-cyan-400/30
            shadow-[0_0_50px_rgba(34,211,238,0.5)]
            backdrop-blur-lg
            flex
            items-center
            justify-center
            z-10
          "
        >
          <div className="text-center">
            <h3 className="font-bold text-xl">
              Aravindan
            </h3>

            <p className="text-xs text-cyan-300 mt-2">
              Full Stack Developer
            </p>
          </div>
        </motion.div>

        {/* Top */}
        <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-72">
          <SkillCard skill={skills[0]} />
        </div>

        {/* Left */}
        <div className="absolute left-[5%] top-1/2 -translate-y-1/2 w-72">
          <SkillCard skill={skills[1]} />
        </div>

        {/* Right */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-72">
          <SkillCard skill={skills[2]} />
        </div>

        {/* Bottom */}
        <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-72">
          <SkillCard skill={skills[3]} />
        </div>

      </div>
    </section>
    </Reveal>
  );
}

function SkillCard({ skill }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -8,
      }}
      className="
        bg-white/5
        backdrop-blur-lg
        border
        border-white/10
        rounded-3xl
        p-6
        hover:border-cyan-400/30
        transition-all
      "
    >
      <h3 className="text-xl font-bold text-cyan-400 mb-4">
        {skill.title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {skill.tech.map((tech) => (
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
    </motion.div>
  );
}

export default Skills;
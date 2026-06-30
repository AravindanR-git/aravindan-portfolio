import { motion } from "framer-motion";
import Reveal from "./Reveal";

const timeline = [
  {
    year: "2016",
    title: "SSLC",
    subtitle: "95%",
  },
  {
    year: "2018",
    title: "HSC",
    subtitle: "90%",
  },
  {
    year: "2022",
    title: "B.E Mechanical Engineering",
    subtitle: "87%",
  },
  {
    year: "2024",
    title: "MBA - Human Resource Management",
    subtitle: "70%",
  },
  {
    year: "2026",
    title: "Full Stack Development",
    subtitle: "Professional Training",
  },
];

function Timeline() {
  return (
    <Reveal>
    <section
      id="timeline"
      className="min-h-screen bg-[#050816] text-white px-6 py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-center mb-24"
      >
        My Journey
      </motion.h2>

      <div className="max-w-5xl mx-auto relative">

        {/* Center Line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="
            absolute
            left-1/2
            top-0
            w-[3px]
            bg-cyan-400
            -translate-x-1/2
            rounded-full
          "
        />

        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            className={`
              relative
              flex
              items-center
              mb-20
              ${
                index % 2 === 0
                  ? "justify-start"
                  : "justify-end"
              }
            `}
          >
            {/* Timeline Node */}
            <div
              className="
                absolute
                left-1/2
                -translate-x-1/2
                w-6
                h-6
                rounded-full
                bg-cyan-400
                shadow-[0_0_20px_rgba(34,211,238,0.8)]
                z-10
              "
            />

            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              className="
                w-[42%]
                bg-white/5
                backdrop-blur-lg
                border
                border-white/10
                rounded-3xl
                p-6
              "
            >
              <p className="text-cyan-400 text-sm mb-2">
                {item.year}
              </p>

              <h3 className="text-xl font-bold mb-2">
                {item.title}
              </h3>

              <p className="text-slate-300">
                {item.subtitle}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
    </Reveal>
  );
}

export default Timeline;
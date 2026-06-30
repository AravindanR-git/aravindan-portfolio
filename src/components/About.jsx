import { motion } from "framer-motion";
import Reveal from "./Reveal";

function About() {
  const facts = [
    "B.E Mechanical Engineering",
    "MBA - Human Resource Management",
    "Full Stack Developer",
    "Android App Developer",
    "Creator of VTruck Billing",
    "Exploring AI Automation",
  ];

  return (
    <Reveal>
    <section
      id="about"
      className="min-h-screen bg-[#050816] text-white px-6 py-24 flex items-center"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            About Me
          </p>

          <h2 className="text-5xl font-bold mb-8">
            Building Digital Solutions
            For Real Problems
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            I am a Full Stack Developer with a background in
            Mechanical Engineering and MBA in Human Resource
            Management.
          </p>

          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            My passion is building practical software solutions
            that solve real-world business challenges. From truck
            billing applications and POS printing systems to web
            applications and automation tools, I enjoy transforming
            ideas into working products.
          </p>

          <p className="text-slate-300 text-lg leading-relaxed">
            I continuously learn new technologies and explore
            AI-powered solutions to create smarter and more
            efficient digital experiences.
          </p>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            bg-white/5
            backdrop-blur-lg
            border
            border-white/10
            rounded-3xl
            p-8
          "
        >
          <h3 className="text-2xl font-bold text-cyan-400 mb-8">
            Quick Facts
          </h3>

          <div className="flex flex-wrap gap-3">
            {facts.map((fact) => (
              <motion.span
                key={fact}
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-cyan-500/10
                  border
                  border-cyan-400/20
                  text-cyan-300
                "
              >
                {fact}
              </motion.span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="text-center">
              <h4 className="text-4xl font-bold text-cyan-400">
                10+
              </h4>
              <p className="text-slate-400 mt-2">
                Projects
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-4xl font-bold text-cyan-400">
                15+
              </h4>
              <p className="text-slate-400 mt-2">
                Technologies
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-4xl font-bold text-cyan-400">
                3+
              </h4>
              <p className="text-slate-400 mt-2">
                Years Learning
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-4xl font-bold text-cyan-400">
                ∞
              </h4>
              <p className="text-slate-400 mt-2">
                Curiosity
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
    /</Reveal>
  );
}

export default About;
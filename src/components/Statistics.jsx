import { motion } from "framer-motion";

const stats = [
  { number: "10+", label: "Projects Built" },
  { number: "15+", label: "Technologies" },
  { number: "3+", label: "Years Learning" },
  { number: "20+", label: "Assignments Completed" },
];

function Statistics() {
  return (
    <section
      id="statistics"
      className="min-h-screen bg-[#050816] text-white px-6 py-24"
    >
      <h2 className="text-5xl font-bold text-center mb-20">
        Statistics
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            whileHover={{ scale: 1.05 }}
            className="
              bg-white/5
              backdrop-blur-lg
              border
              border-white/10
              rounded-3xl
              p-8
              text-center
            "
          >
            <h3 className="text-5xl font-bold text-cyan-400 mb-4">
              {stat.number}
            </h3>

            <p className="text-slate-300">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Statistics;
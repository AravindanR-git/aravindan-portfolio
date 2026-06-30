import { motion } from "framer-motion";

function ParticlesBackground() {
  const particles = Array.from({ length: 40 }, () => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 4 + 2,
    opacity: Math.random() * 0.5 + 0.2,
    duration: 4 + Math.random() * 6,
  }));

  return (
    <>
      {/* Constellation Lines */}

      <motion.div
  className="
    absolute
    top-[25%]
    left-[20%]
    w-[250px]
    h-[1px]
    bg-cyan-400/20
    rotate-12
  "
  animate={{
    opacity: [0.05, 0.3, 0.05],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

<motion.div
  className="
    absolute
    top-[40%]
    right-[15%]
    w-[200px]
    h-[1px]
    bg-cyan-400/20
    -rotate-12
  "
  animate={{
    opacity: [0.05, 0.25, 0.05],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

<motion.div
  className="
    absolute
    bottom-[30%]
    left-[30%]
    w-[180px]
    h-[1px]
    bg-cyan-400/20
  "
  animate={{
    opacity: [0.05, 0.35, 0.05],
  }}
  transition={{
    duration: 7,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

      {/* Floating Particles */}

      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="
            absolute
            rounded-full
            bg-cyan-400
            shadow-[0_0_8px_rgba(34,211,238,0.8)]
          "
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}

export default ParticlesBackground;
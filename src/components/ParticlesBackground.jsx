import { motion } from "framer-motion";

const particles = Array.from({ length: 48 }, (_, index) => {
  const depth = index % 3;
  return {
    id: index,
    depth,
    left: (index * 37 + depth * 11) % 100,
    top: (index * 61 + depth * 17) % 100,
    size: [2, 3, 4][depth] + (index % 4 === 0 ? 1 : 0),
    opacity: [0.24, 0.42, 0.68][depth],
    duration: [10, 7, 5][depth] + (index % 5) * 0.6,
    drift: [8, 16, 24][depth] * (index % 2 === 0 ? 1 : -1),
    delay: -(index % 12) * 0.4,
  };
});

function ParticlesBackground() {
  return (
    <>
      <div className="starfield-grid" aria-hidden="true" />
      <motion.span className="particle-orbit particle-orbit-a" aria-hidden="true" animate={{ rotate: 360 }} transition={{ duration: 84, repeat: Infinity, ease: "linear" }} />
      <motion.span className="particle-orbit particle-orbit-b" aria-hidden="true" animate={{ rotate: -360 }} transition={{ duration: 112, repeat: Infinity, ease: "linear" }} />
      <div className="constellation constellation-one" aria-hidden="true"><span /><span /><span /></div>
      <div className="constellation constellation-two" aria-hidden="true"><span /><span /><span /></div>
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className={`cosmic-particle depth-${particle.depth}`}
          aria-hidden="true"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
          animate={{ y: [0, -particle.drift, 0], x: [0, particle.drift * 0.3, 0], opacity: [particle.opacity * 0.55, particle.opacity, particle.opacity * 0.55] }}
          transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </>
  );
}

export default ParticlesBackground;

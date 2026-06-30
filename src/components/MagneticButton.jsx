import { motion } from "framer-motion";
import { useState } from "react";

function MagneticButton({ children }) {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setPosition({
      x: x * 0.25,
      y: y * 0.25,
    });
  };

  const handleMouseLeave = () => {
    setPosition({
      x: 0,
      y: 0,
    });
  };

  return (
    <motion.button
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 12,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{
        scale: 0.95,
      }}
      className="
        px-8
        py-3
        rounded-full
        border
        border-cyan-400
        text-cyan-400
        hover:bg-cyan-400
        hover:text-black
        transition-all
      "
    >
      {children}
    </motion.button>
  );
}

export default MagneticButton;
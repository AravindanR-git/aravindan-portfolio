import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

return (
  <motion.div
    className="
      hidden
      md:block
      fixed
      top-0
      left-0
      w-96
      h-96
      rounded-full
      pointer-events-none
      z-0
    "
    animate={{
      x: position.x - 192,
      y: position.y - 192,
    }}
    transition={{
      type: "spring",
      stiffness: 120,
      damping: 25,
    }}
    style={{
      background: `
        radial-gradient(
          circle,
          rgba(34,211,238,0.20) 0%,
          rgba(124,58,237,0.10) 35%,
          transparent 75%
        )
      `,
      filter: "blur(30px)",
    }}
  />
);
}

export default CustomCursor;
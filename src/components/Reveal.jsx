import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Reveal({ children }) {
  const container = useRef();

  useGSAP(() => {
    gsap.from(container.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",

      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });

  return (
    <div ref={container}>
      {children}
    </div>
  );
}

export default Reveal;
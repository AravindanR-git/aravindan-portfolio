import { useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Reveal({ children }) {
  const container = useRef(null);
  const reduceMotion = useReducedMotion();

  useGSAP(() => {
    const section = container.current?.querySelector(".universe-section");
    if (reduceMotion || !section) return undefined;

    const revealTargets = gsap.utils.toArray("[data-scroll-reveal]", section);
    if (revealTargets.length) {
      gsap.fromTo(revealTargets,
        { y: 24, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.65,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: { trigger: section, start: "top 82%", once: true },
        },
      );
    }

    const atmosphere = section.querySelector(".section-atmosphere");
    if (atmosphere) {
      gsap.to(atmosphere, {
        yPercent: -18,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 1 },
      });
    }
  }, { scope: container, dependencies: [reduceMotion], revertOnUpdate: true });

  return <div ref={container}>{children}</div>;
}

export default Reveal;

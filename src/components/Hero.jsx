import { useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import portrait from "../assets/aravindan-suit-portrait.jpg";
import ParticlesBackground from "./ParticlesBackground";

const titleWords = ["Aravindan", "Y"];
const careerObjective = "Aspiring Full Stack Developer passionate about building scalable, user-focused applications. I combine modern web technologies with practical problem-solving to transform ideas into impactful digital experiences.";

function Hero() {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useGSAP(() => {
    const hero = heroRef.current;
    if (!hero || reduceMotion) return undefined;

    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    intro
      .fromTo(".hero-eyebrow", { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.42 }, 0.02)
      .fromTo(".hero-title-char", { yPercent: 110, rotateX: -42, autoAlpha: 0 }, { yPercent: 0, rotateX: 0, autoAlpha: 1, duration: 0.55, stagger: 0.026, ease: "back.out(1.25)" }, 0.08)
      .fromTo(".hero-role", { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.4 }, 0.28)
      .fromTo(".hero-summary", { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.46 }, 0.36)
      .fromTo(".hero-actions .button", { y: 10, scale: 0.98, autoAlpha: 0 }, { y: 0, scale: 1, autoAlpha: 1, duration: 0.38, stagger: 0.08 }, 0.48)
      .fromTo(".hero-social-link", { y: 8, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.32, stagger: 0.05 }, 0.67)
      .fromTo(".hero-portrait-wrap", { y: 18, scale: 0.975, autoAlpha: 0 }, { y: 0, scale: 1, autoAlpha: 1, duration: 0.68, ease: "power2.out" }, 0.16)
      .fromTo(".scroll-cue", { y: 8, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.32 }, 0.86);

    const media = gsap.matchMedia();
    media.add("(hover: hover) and (pointer: fine) and (min-width: 900px)", () => {
      const layers = gsap.utils.toArray("[data-parallax]", hero);
      const xTo = layers.map((layer) => gsap.quickTo(layer, "x", { duration: 0.8, ease: "power3.out" }));
      const yTo = layers.map((layer) => gsap.quickTo(layer, "y", { duration: 0.8, ease: "power3.out" }));
      const onPointerMove = (event) => {
        const bounds = hero.getBoundingClientRect();
        const px = (event.clientX - bounds.left) / bounds.width - 0.5;
        const py = (event.clientY - bounds.top) / bounds.height - 0.5;
        layers.forEach((layer, index) => {
          const depth = Number(layer.dataset.parallax) || 1;
          xTo[index](px * depth);
          yTo[index](py * depth);
        });
      };
      const onPointerLeave = () => layers.forEach((_, index) => { xTo[index](0); yTo[index](0); });
      hero.addEventListener("pointermove", onPointerMove, { passive: true });
      hero.addEventListener("pointerleave", onPointerLeave, { passive: true });
      return () => {
        hero.removeEventListener("pointermove", onPointerMove);
        hero.removeEventListener("pointerleave", onPointerLeave);
        [...xTo, ...yTo].forEach((tween) => tween.tween?.kill());
      };
    });

    return () => media.revert();
  }, { scope: heroRef, dependencies: [reduceMotion], revertOnUpdate: true });

  return (
    <section ref={heroRef} id="hero" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-sky" aria-hidden="true" />
      <div className="nebula-glow nebula-glow-cyan" data-parallax="12" aria-hidden="true" />
      <div className="nebula-glow nebula-glow-violet" data-parallax="-18" aria-hidden="true" />
      <div className="hero-particles" data-parallax="7" aria-hidden="true">{reduceMotion ? <div className="starfield-grid" /> : <ParticlesBackground />}</div>
      <div className="hero-orbit hero-orbit-one" data-parallax="-10" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" data-parallax="14" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="status-dot" /> Digital Universe / Portfolio</p>
          <h1 id="hero-title" aria-label="Aravindan Y">
            <span className="hero-title-line" aria-hidden="true">
              {titleWords.map((word) => (
                <span className="hero-title-word" key={word}>
                  {Array.from(word).map((character, index) => <span className="hero-title-char" key={`${word}-${index}`}>{character}</span>)}
                </span>
              ))}
            </span>
          </h1>
          <p className="hero-role">Aspiring Full Stack Developer</p>
          <p className="hero-summary">{careerObjective}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore projects <span aria-hidden="true">↗</span></a>
            <a className="button button-quiet" href={`${import.meta.env.BASE_URL}Aravindan_Resume_Updated.pdf`} download>Download résumé <span aria-hidden="true">↓</span></a>
          </div>
          <nav className="hero-socials" aria-label="Professional links">
            <a className="hero-social-link" href="https://github.com/AravindanR-git" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            <a className="hero-social-link" href="https://www.linkedin.com/in/aravindan-y-developer/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a className="hero-social-link" href="mailto:aravindan017@gmail.com">Email <span aria-hidden="true">↗</span></a>
          </nav>
        </div>
        <div className="hero-portrait-wrap" data-parallax="-8">
          <div className="portrait-halo" aria-hidden="true" />
          <div className="portrait-frame"><img src={portrait} alt="Aravindan Y in a navy suit" fetchPriority="high" /></div>
          <span className="portrait-label"><span className="status-dot" /> Full Stack Development · 2024–2025</span>
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to About"><span aria-hidden="true" /> Scroll to explore</a>
    </section>
  );
}

export default Hero;

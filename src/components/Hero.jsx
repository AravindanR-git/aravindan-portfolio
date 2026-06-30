import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ParticlesBackground from "./ParticlesBackground";
import profile from "../assets/profile.jpg";
import MagneticButton from "./MagneticButton";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function Hero() {
     const heroRef = useRef();

  useGSAP(() => {
    gsap.to(".hero-content", {
      scale: 0.75,
      opacity: 0,
      y: -100,

      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "+=1200",
        scrub: true,
      },
    });
  });
  return (
    <section
     ref={heroRef}
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#050816] flex items-center justify-center"
    >
        < ParticlesBackground />
      {/* Background Glow 1 */}
      <div
        className="
          absolute
          w-[500px]
          h-[500px]
          bg-cyan-500/20
          blur-[150px]
          rounded-full
          top-[-100px]
          left-[-100px]
        "
      />

      {/* Background Glow 2 */}
      <div
        className="
          absolute
          w-[500px]
          h-[500px]
          bg-violet-500/20
          blur-[150px]
          rounded-full
          bottom-[-150px]
          right-[-100px]
        "
      />

      {/* Small Floating Dot */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="
          absolute
          top-1/3
          left-1/2
          w-3
          h-3
          bg-cyan-400
          rounded-full
          shadow-[0_0_30px_10px_rgba(34,211,238,0.7)]
        "
      />

     
      {/* Main Content */}
<div className="hero-content relative z-10 text-center px-6">

  <motion.p
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-cyan-400 tracking-[0.3em] uppercase mb-5"
  >
    Digital Cosmos
  </motion.p>

  {/* Profile Image */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    className="flex justify-center mb-8"
  >
    <div className="relative">

      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          rounded-full
          bg-cyan-400/30
          blur-2xl
          scale-125
        "
      />

      <motion.img
        src={profile}
        alt="Aravindan"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="
          relative
          w-40
          h-40
          md:w-52
          md:h-52
          rounded-full
          object-cover
          border-4
          border-cyan-400/40
          shadow-[0_0_40px_rgba(34,211,238,0.5)]
        "
      />
    </div>
  </motion.div>

  {/* Name */}
  <motion.h1
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    className="
      text-white
      font-bold
      text-5xl
      md:text-8xl
    "
  >
    ARAVINDAN Y
  </motion.h1>

  {/* Tech Stack */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5 }}
    className="
      mt-6
      inline-flex
      flex-wrap
      gap-3
      justify-center
      px-6
      py-4
      rounded-2xl
      bg-white/5
      backdrop-blur-lg
      border
      border-white/10
    "
  >
    <span>React</span>
    <span>•</span>
    <span>Flask</span>
    <span>•</span>
    <span>MERN</span>
    <span>•</span>
    <span>REST APIs</span>
  </motion.div>

  {/* Typing Animation */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1 }}
    className="mt-8 text-xl md:text-3xl text-slate-300 h-[50px]"
  >
    <TypeAnimation
      sequence={[
        "Full Stack Developer",
        2000,
        "Building Digital Solutions",
        2000,
        "Creating Modern Applications",
        2000,
        "Transforming Ideas Into Products",
        2000,
      ]}
      wrapper="span"
      repeat={Infinity}
    />
  </motion.div>

  {/* Button */}
  <MagneticButton>
  Explore Universe →
</MagneticButton>

</div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
          absolute
          bottom-8
          text-white
          text-3xl
        "
      >
        ↓
      </motion.div>
    </section>
  );
}

export default Hero;
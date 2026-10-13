import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";

function Contact() {
  const reduceMotion = useReducedMotion();
  return (
    <Reveal>
      <section id="contact" className="universe-section contact-section" aria-labelledby="contact-title">
        <div className="section-atmosphere atmosphere-violet" aria-hidden="true" />
        <div className="section-shell contact-shell">
          <div className="section-intro" data-scroll-reveal>
            <p className="section-kicker">The next connection</p>
            <h2 id="contact-title">Let’s build something <span>useful</span></h2>
            <p>For opportunities and conversations about practical software, reach out through one of these verified portfolio links.</p>
          </div>
          <motion.div
            className="contact-card"
            data-scroll-reveal
            whileHover={reduceMotion ? undefined : { y: -3 }}
            transition={{ duration: 0.2 }}
          >
            <div className="contact-method"><span className="contact-label">Email</span><a href="mailto:aravindan017@gmail.com">aravindan017@gmail.com <span aria-hidden="true">↗</span></a></div>
            <div className="contact-method"><span className="contact-label">GitHub</span><a href="https://github.com/AravindanR-git" target="_blank" rel="noreferrer">github.com/AravindanR-git <span aria-hidden="true">↗</span></a></div>
            <div className="contact-method"><span className="contact-label">LinkedIn</span><a href="https://www.linkedin.com/in/aravindan-y-developer/" target="_blank" rel="noreferrer">linkedin.com/in/aravindan-y-developer <span aria-hidden="true">↗</span></a></div>
          </motion.div>
        </div>
      </section>
    </Reveal>
  );
}

export default Contact;

import Reveal from "./Reveal";

function About() {
  const facts = [
    "B.E. Mechanical Engineering",
    "MBA · Human Resource Management",
    "Full Stack Developer",
    "Android App Developer",
    "Creator of VTruck Billing",
    "Exploring AI Automation",
  ];

  return (
    <Reveal>
      <section id="about" className="universe-section about-section" aria-labelledby="about-title">
        <div className="section-atmosphere atmosphere-blue" aria-hidden="true" />
        <div className="section-shell about-layout">
          <div data-scroll-reveal>
            <p className="section-kicker">About me</p>
            <h2 id="about-title">Building digital solutions <span>for real problems</span></h2>
            <p className="about-lead">I am a Full Stack Developer with a background in Mechanical Engineering and Human Resource Management.</p>
            <p className="about-copy">My focus is practical software for real-world workflows, from truck billing and POS printing to web applications and automation tools. I enjoy taking an idea through to a working product.</p>
            <p className="about-copy">I continue to learn and explore AI-powered solutions. Project details and technical claims are being checked against source repositories before they are expanded here.</p>
          </div>
          <aside className="about-facts" data-scroll-reveal aria-label="Background and focus">
            <p className="section-kicker">Background & focus</p>
            <div className="fact-list">{facts.map((fact) => <span key={fact}>{fact}</span>)}</div>
            <div className="about-note"><span className="status-dot" /> Practical tools, considered details, continuous learning.</div>
          </aside>
        </div>
      </section>
    </Reveal>
  );
}

export default About;

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import Reveal from "./Reveal";

const ecosystem = [
  { title: "Programming languages", note: "Résumé and project showcase references.", technologies: [
    { name: "JavaScript", description: "Used in the listed React and vanilla JavaScript projects.", evidence: "Résumé and project showcase notes name JavaScript.", projects: [{ name: "Task Manager App", id: "project-02" }, { name: "User Management Dashboard", id: "project-07" }] },
    { name: "Python", description: "Used with Flask for API and CRUD project work.", evidence: "Project showcase notes name Python and Flask for the URL Shortener API.", projects: [{ name: "URL Shortener API", id: "project-06" }] },
  ] },
  { title: "Frontend", note: "Interface technologies tied to listed projects.", technologies: [
    { name: "React", description: "Used in the live inventory, task, product display, and healthcare projects.", evidence: "Project showcase notes explicitly list React for these projects.", projects: [{ name: "Inventory Management App", id: "project-01" }, { name: "Task Manager App", id: "project-02" }, { name: "Product Display Page", id: "project-03" }, { name: "Healthcare Appointment Booking System", id: "project-04" }] },
    { name: "HTML", description: "Markup used in the user management dashboard.", evidence: "Project showcase notes list HTML in the User Management Dashboard stack.", projects: [{ name: "User Management Dashboard", id: "project-07" }] },
    { name: "CSS", description: "Styling technology listed in the résumé.", evidence: "CSS3 appears in the résumé technical skills.", projects: [] },
    { name: "Tailwind CSS", description: "Used across the inventory, product display, healthcare, and dashboard interfaces.", evidence: "Project showcase notes list Tailwind CSS for those projects.", projects: [{ name: "Inventory Management App", id: "project-01" }, { name: "Product Display Page", id: "project-03" }, { name: "Healthcare Appointment Booking System", id: "project-04" }, { name: "User Management Dashboard", id: "project-07" }] },
    { name: "TypeScript", description: "Used in the healthcare appointment project.", evidence: "Project showcase notes list React with TypeScript for this project.", projects: [{ name: "Healthcare Appointment Booking System", id: "project-04" }] },
    { name: "Bootstrap", description: "Used to style the task manager interface.", evidence: "Project showcase notes list Bootstrap for this project.", projects: [{ name: "Task Manager App", id: "project-02" }] },
  ] },
  { title: "Backend & APIs", note: "Server-side technologies from project notes.", technologies: [
    { name: "Node.js / Express", description: "Listed as an optional backend for the healthcare project.", evidence: "Project showcase explicitly marks Node.js/Express as optional; implementation is not confirmed.", projects: [{ name: "Healthcare Appointment Booking System", id: "project-04", status: "Optional stack in project notes; implementation not confirmed." }] },
    { name: "Flask", description: "Used in the URL Shortener API and user management dashboard.", evidence: "Project showcase notes list Flask for both in-progress projects.", projects: [{ name: "URL Shortener API", id: "project-06" }, { name: "User Management Dashboard", id: "project-07" }] },
    { name: "REST APIs", description: "A URL-shortening API project is listed in progress.", evidence: "Project showcase notes describe the Flask URL Shortener API and its endpoints.", projects: [{ name: "URL Shortener API", id: "project-06" }] },
  ] },
  { title: "Databases & storage", note: "Storage technologies named in résumé or project notes.", technologies: [
    { name: "SQLite", description: "Used in the user management dashboard; planned for the truck app.", evidence: "Project showcase notes list SQLite for the dashboard and mark it planned for Truck Management.", projects: [{ name: "User Management Dashboard", id: "project-07" }, { name: "Truck Management App", id: "project-05", status: "SQLite is planned, not listed as implemented." }] },
    { name: "Local Storage", description: "Used for local persistence in the live inventory and task manager apps.", evidence: "Project showcase notes list Local Storage in both stacks.", projects: [{ name: "Inventory Management App", id: "project-01" }, { name: "Task Manager App", id: "project-02" }] },
    { name: "MongoDB", description: "Listed in the résumé; no project-specific implementation is documented in the supplied showcase notes.", evidence: "Résumé technical-skills section.", projects: [] },
    { name: "Supabase", description: "Listed in the résumé; a project implementation is not established by the supplied showcase notes.", evidence: "Résumé lists Supabase; no implementation evidence in the project notes provided here.", projects: [] },
  ] },
  { title: "Mobile development", note: "Mobile and print technologies from the project showcase.", technologies: [
    { name: "Android WebView", description: "The in-progress truck app is described as a React and Android hybrid.", evidence: "Project showcase notes list Android WebView.", projects: [{ name: "Truck Management App", id: "project-05" }] },
    { name: "Capacitor", description: "Listed in the résumé; no project-specific use is documented in the supplied showcase notes.", evidence: "Résumé technical-skills section.", projects: [] },
    { name: "POS Printing", description: "Listed for inventory receipt printing and transport billing workflows.", evidence: "Project showcase notes mention POS printer optimization and printing.", projects: [{ name: "Inventory Management App", id: "project-01" }, { name: "Truck Management App", id: "project-05" }] },
  ] },
  { title: "Developer tools", note: "Tools named in résumé or portfolio materials.", technologies: [
    { name: "Vite", description: "A frontend build tool listed in the résumé.", evidence: "Résumé frontend skills.", projects: [] },
    { name: "Git", description: "Version control listed in the résumé.", evidence: "Résumé technical-skills section.", projects: [] },
    { name: "GitHub", description: "Code hosting profile linked from the supplied project notes.", evidence: "Project showcase includes the GitHub profile URL.", projects: [] },
  ] },
];
const connectionPaths = [
  "M500 500 C400 390 280 270 170 180",
  "M500 500 C500 370 500 270 500 175",
  "M500 500 C600 390 720 270 830 180",
  "M500 500 C400 610 280 730 170 820",
  "M500 500 C500 630 500 740 500 825",
  "M500 500 C600 610 720 730 830 820",
];

function Skills() {
  const [selectedName, setSelectedName] = useState("React");
  const stageRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const selected = useMemo(
    () => ecosystem.flatMap((group) => group.technologies).find((technology) => technology.name === selectedName),
    [selectedName],
  );

  const moveSelection = (event) => {
    const direction = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
    if (!direction) return;
    const nodes = Array.from(stageRef.current?.querySelectorAll("[data-skill-node]") ?? []);
    const current = nodes.indexOf(event.currentTarget);
    if (current < 0) return;
    event.preventDefault();
    const next = nodes[(current + direction + nodes.length) % nodes.length];
    next.focus();
    setSelectedName(next.dataset.skillNode);
  };

  return (
    <Reveal>
      <section id="skills" className="universe-section skills-section" aria-labelledby="skills-title">
        <div className="section-atmosphere atmosphere-blue" aria-hidden="true" />
        <div className="section-shell">
          <div className="section-intro" data-scroll-reveal>
            <p className="section-kicker">The toolkit</p>
            <h2 id="skills-title">Technologies &amp; <span>Skills</span></h2>
            <p>Select a node to see the résumé or portfolio references behind each technology.</p>
          </div>
          <div className="skills-visual" ref={stageRef}>
            <svg className="skills-wireframe" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true">
              {connectionPaths.map((path, index) => (
                <motion.path key={path} d={path} initial={{ pathLength: reduceMotion ? 1 : 0, opacity: reduceMotion ? 0.46 : 0 }} whileInView={{ pathLength: 1, opacity: 0.46 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : 0.9, delay: reduceMotion ? 0 : index * 0.08 }} />
              ))}
            </svg>
          <aside className="skill-evidence skills-hub" aria-live="polite" aria-atomic="true">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={selected.name}
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduceMotion ? 0 : -6 }}
                transition={{ duration: reduceMotion ? 0 : 0.18 }}
              >
                <p className="section-kicker">TECHNOLOGIES &amp; SKILLS</p>
                <h3>{selected.name}</h3>
                <p>{selected.description}</p>
                <p className="skill-source-line">{selected.evidence}</p>
                <div className="evidence-divider" />
                <h4>Project references</h4>
                {selected.projects.length ? (
                  <ul>{selected.projects.map((project) => <li key={`${selected.name}-${project.id}`}><span aria-hidden="true">↗</span><div><a href={`#${project.id}`}>{project.name}</a>{project.status && <p className="reference-status">{project.status}</p>}</div></li>)}</ul>
                ) : (
                  <p className="evidence-empty">No project-specific association is documented in the available résumé or portfolio copy.</p>
                )}
                <p className="evidence-note">References come from the résumé or existing portfolio descriptions. Project repositories were not available for source-level confirmation.</p>
              </motion.div>
            </AnimatePresence>
          </aside>
            {ecosystem.map((group, groupIndex) => (
              <motion.section
                className={`skill-group skill-orbit-${groupIndex + 1}`}
                key={group.title}
                aria-labelledby={`skill-group-${groupIndex}`}
                initial={reduceMotion ? false : { opacity: 0, y: 13 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.16 }}
                transition={{ duration: reduceMotion ? 0 : 0.42, delay: reduceMotion ? 0 : groupIndex * 0.06 }}
              >
                <div className="skill-group-heading">
                  <span className="skill-index">0{groupIndex + 1}</span>
                  <div><h3 id={`skill-group-${groupIndex}`}>{group.title}</h3><p>{group.note}</p></div>
                </div>
                <div className="skill-nodes">
                  {group.technologies.map((technology) => (
                    <button
                      key={technology.name}
                      type="button"
                      data-skill-node={technology.name}
                      className={`skill-node${selectedName === technology.name ? " is-selected" : ""}`}
                      aria-pressed={selectedName === technology.name}
                      onClick={() => setSelectedName(technology.name)}
                      onKeyDown={moveSelection}
                    ><span className="node-spark" aria-hidden="true" />{technology.name}</button>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>

        </div>
      </section>
    </Reveal>
  );
}

export default Skills;

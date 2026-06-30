import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#050816] text-white px-6 py-24"
    >
      <h2 className="text-5xl font-bold text-center mb-20">
        Let's Connect
      </h2>

      <div className="max-w-3xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="
            bg-white/5
            backdrop-blur-lg
            border
            border-white/10
            rounded-3xl
            p-10
            space-y-8
          "
        >
          <div>
            <h3 className="text-cyan-400 text-sm mb-2">
              EMAIL
            </h3>
            <p className="text-xl">
              aravindan017@gmail.com
            </p>
          </div>

          <div>
            <h3 className="text-cyan-400 text-sm mb-2">
              GITHUB
            </h3>

            <a
              href="https://github.com/AravindanR-git"
              target="_blank"
              rel="noreferrer"
              className="text-xl hover:text-cyan-400"
            >
              github.com/AravindanR-git
            </a>
          </div>

          <div>
            <h3 className="text-cyan-400 text-sm mb-2">
              LINKEDIN
            </h3>

            <a
              href="https://www.linkedin.com/in/aravindan-y-developer/"
              target="_blank"
              rel="noreferrer"
              className="text-xl hover:text-cyan-400"
            >
              linkedin.com/in/aravindan-y-developer
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
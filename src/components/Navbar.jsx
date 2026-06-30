import { Link } from "react-scroll";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { name: "Core", target: "hero", icon: "☀" },
    { name: "About", target: "about", icon: "👨‍💻" },
    { name: "Skills", target: "skills", icon: "🪐" },
    { name: "Projects", target: "projects", icon: "🌌" },
    { name: "Education", target: "timeline", icon: "🎓" },
    { name: "Contact", target: "contact", icon: "📡" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <div
        className="
          hidden
          md:flex
          fixed
          top-0
          left-0
          w-full
          z-50
          backdrop-blur-md
          bg-black/30
          border-b
          border-cyan-500/20
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            w-full
            flex
            justify-between
            items-center
            px-8
            py-4
          "
        >
          <h1
            className="
              text-cyan-400
              font-bold
              text-xl
              tracking-wider
            "
          >
            ARAVINDAN.OS
          </h1>

          <div className="flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.target}
                to={item.target}
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                onSetActive={(section) => {
                  setActiveSection(section);
                }}
                className={`
                  cursor-pointer
                  transition-all
                  duration-300
                  relative
                  ${
                    activeSection === item.target
                      ? "text-cyan-400 drop-shadow-[0_0_10px_#22d3ee]"
                      : "text-gray-300 hover:text-cyan-400"
                  }
                `}
              >
                {item.icon} {item.name}

                {activeSection === item.target && (
                  <span
                    className="
                      absolute
                      left-0
                      -bottom-2
                      w-full
                      h-[2px]
                      bg-cyan-400
                      shadow-[0_0_12px_#22d3ee]
                    "
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className="
          md:hidden
          fixed
          top-0
          left-0
          w-full
          z-50
          backdrop-blur-md
          bg-black/30
          border-b
          border-cyan-500/20
        "
      >
        <div className="flex justify-between items-center px-5 py-4">
          <h1 className="text-cyan-400 font-bold">
            ARAVINDAN.OS
          </h1>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-3xl"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {menuOpen && (
          <div className="bg-black/95 p-5 flex flex-col gap-5">
            {navItems.map((item) => (
              <Link
                key={item.target}
                to={item.target}
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                onSetActive={(section) => {
                  setActiveSection(section);
                }}
                onClick={() => setMenuOpen(false)}
                className={`
                  cursor-pointer
                  text-lg
                  transition-all
                  ${
                    activeSection === item.target
                      ? "text-cyan-400"
                      : "text-white"
                  }
                `}
              >
                {item.icon} {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
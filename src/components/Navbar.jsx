import { FiMoon, FiSun, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Navbar({ dark, setDark }) {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/60 dark:bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#" className="font-extrabold text-xl tracking-tight">
          <span className="text-blue-600">Geethika</span> A
        </a>

        <ul className="hidden md:flex items-center gap-6 font-medium">
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
          <li><a href="#experience" className="hover:text-blue-600">Experience</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/"
            target="_blank" rel="noreferrer"
            className="p-2 rounded-lg hover:bg-white/50 dark:hover:bg-white/10"
            aria-label="GitHub"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/saiakkineni"
            target="_blank" rel="noreferrer"
            className="p-2 rounded-lg hover:bg-white/50 dark:hover:bg-white/10"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={20} />
          </a>
          <button
            onClick={() => setDark(d => !d)}
            className="ml-1 px-3 py-2 rounded-xl border border-white/20 hover:bg-white/50 dark:hover:bg-white/10"
            aria-label="Toggle theme"
            title="Toggle dark mode"
          >
            {dark ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
}

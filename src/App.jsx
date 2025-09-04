import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const [dark, setDark] = useState(() => {
    // remember preference
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="min-h-screen relative bg-grid-pattern bg-[length:28px_28px] dark:bg-[length:28px_28px]">
      {/* subtle radial glow */}
      <div className="pointer-events-none fixed inset-0 bg-radial-glow" />
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <footer className="text-center text-sm py-8 opacity-70">
        © {new Date().getFullYear()} Geethika A — Built with React & Tailwind
      </footer>
    </div>
  );
}

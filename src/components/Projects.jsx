const projects = [
  {
    title: "ContentSparkAI",
    description:
      "AI-driven content platform using Google Gemini + Spring Boot; reduced content creation time by 40%.",
    href: "#",
    stack: ["Spring Boot","React","MongoDB","AWS"],
  },
  {
    title: "Pet Health Management",
    description:
      "Health records & reminders for pets; improved care adherence and UX.",
    href: "#",
    stack: ["React","Node","Postgres"],
  },
  {
    title: "SQL vs NoSQL Research",
    description:
      "Comparative performance and scalability analysis for enterprise use.",
    href: "#",
    stack: ["Research","Benchmarks"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="max-w-6xl mx-auto">
        <h2 className="h-section mb-6">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map(p => (
            <a
              key={p.title}
              href={p.href}
              className="glass p-6 hover:-translate-y-1 hover:shadow-2xl transition block"
            >
              <h3 className="text-xl font-bold text-blue-600">{p.title}</h3>
              <p className="mt-2 opacity-90">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map(t => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/60 dark:bg-white/10 border border-white/20">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

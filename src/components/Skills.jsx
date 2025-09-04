const skills = [
  "Java","Python","TypeScript","React","Spring Boot","GraphQL","MongoDB",
  "SQL","AWS","GCP","Docker","Kubernetes","CI/CD","Jenkins","Kafka"
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="max-w-5xl mx-auto">
        <h2 className="h-section mb-6">Skills</h2>
        <div className="glass p-6">
          <div className="flex flex-wrap gap-3">
            {skills.map(s => (
              <span
                key={s}
                className="px-4 py-2 rounded-full bg-white/60 dark:bg-white/10 border border-white/20 shadow-sm hover:shadow-lg transition"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const jobs = [
  {
    role: "Software Developer",
    company: "Quartet Ai",
    time: "Mar 2025 – Present",
    details: [
      "Built REST & GraphQL APIs with Spring Boot",
      "MongoDB for flexible schemas",
      "CI/CD with Jenkins & SonarQube",
      "Authored technical docs",
    ],
  },
  {
    role: "Software Engineer",
    company: "Accenture",
    time: "Oct 2022 – Jun 2023",
    details: [
      "Spring Boot microservices with OAuth2",
      "Kafka event-driven flows",
      "Oracle & DynamoDB persistence",
      "CI/CD on AWS with Docker",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "Aditya Precitech",
    time: "Jun 2020 – Jul 2022",
    details: [
      "Inventory system in Django",
      "LSTM stock model (92% acc)",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="max-w-5xl mx-auto">
        <h2 className="h-section mb-6">Experience</h2>
        <div className="relative before:absolute before:left-4 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-blue-500/50 before:to-indigo-500/50">
          {jobs.map((j, idx) => (
            <div key={j.company} className="pl-10 mb-6">
              <div className="glass p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-blue-600">{j.role} · {j.company}</h3>
                  <span className="text-sm opacity-70">{j.time}</span>
                </div>
                <ul className="list-disc ml-5 mt-2 opacity-90">
                  {j.details.map((d,i) => <li key={i}>{d}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

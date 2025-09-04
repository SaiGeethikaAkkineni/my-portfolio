const projects = [
  {
    title: "ContentSparkAI",
    description: "AI-driven content generation platform with Google Gemini + Spring Boot, reduced content creation time by 40%.",
  },
  {
    title: "Pet Health Management",
    description: "Web app for pet health tracking and reminders, improving care adherence.",
  },
  {
    title: "SQL vs NoSQL Research",
    description: "Research comparing SQL vs NoSQL performance, scalability, and enterprise use cases.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-blue-600">{proj.title}</h3>
              <p className="mt-2 text-gray-600">{proj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

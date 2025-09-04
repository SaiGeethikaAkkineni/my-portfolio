const skills = [
  "Java", "Python", "React", "Spring Boot", "GraphQL", "MongoDB",
  "AWS", "Docker", "Kubernetes", "CI/CD", "SQL", "GCP"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="p-6 bg-white shadow-md rounded-lg text-center font-semibold text-gray-700 hover:shadow-xl transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

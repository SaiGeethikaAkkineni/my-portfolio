const jobs = [
  {
    role: "Software Developer",
    company: "Quartet Ai",
    time: "March 2025 – Present",
    details: [
      "Developed REST & GraphQL APIs with Spring Boot.",
      "Integrated MongoDB for flexible schema models.",
      "Maintained CI/CD pipelines with Jenkins & SonarQube.",
      "Created technical documentation to improve onboarding."
    ],
  },
  {
    role: "Software Engineer",
    company: "Accenture",
    time: "Oct 2022 – June 2023",
    details: [
      "Built Spring Boot microservices with OAuth2 security.",
      "Integrated Apache Kafka for event-driven workflows.",
      "Managed Oracle & DynamoDB persistence.",
      "Automated CI/CD and deployed on AWS."
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "Aditya Precitech PVT LTD",
    time: "Jun 2020 – July 2022",
    details: [
      "Developed inventory management system using Django.",
      "Built LSTM stock prediction model with 92% accuracy."
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">Experience</h2>
      {jobs.map((job) => (
        <div key={job.company} className="mb-8 p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold text-blue-600">
            {job.role} | {job.company}
          </h3>
          <p className="text-gray-500">{job.time}</p>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            {job.details.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}

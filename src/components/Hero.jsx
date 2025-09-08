export default function Hero() {
  const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <section className="relative section flex flex-col items-center justify-center text-center min-h-[88vh]">
      {/* animated orb background */}
      <div className="orb -z-10" />

      <h1 className="h-section">
        Hi, I’m <span className="text-blue-600">Geethika 👋</span>
      </h1>
      <p className="mt-4 text-lg md:text-xl max-w-2xl opacity-80">
        Full-Stack Developer · Cloud Engineer · Problem Solver
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          📄 Resume
        </a>

        <a
          href="https://github.com/"
          target="_blank" rel="noreferrer"
          className="btn btn-outline"
        >
          💻 GitHub
        </a>
        <a
          href="https://linkedin.com/in/saiakkineni"
          target="_blank" rel="noreferrer"
          className="btn btn-outline"
        >
          🔗 LinkedIn
        </a>
        <a href="mailto:akkinesa@mail.uc.edu" className="btn btn-outline">
          ✉️ Email
        </a>
        <a href="tel:+15134886621" className="btn btn-outline">
          📞 Call
        </a>
      </div>

      {/* subtle card with quick facts */}
      <div className="mt-10 glass max-w-3xl w-full p-6 mx-auto">
        <ul className="grid sm:grid-cols-3 gap-3 text-sm md:text-base">
          <li><span className="font-semibold">Stack:</span> React, Spring Boot, GraphQL</li>
          <li><span className="font-semibold">Cloud:</span> AWS · GCP</li>
          <li><span className="font-semibold">Focus:</span> Microservices · CI/CD</li>
        </ul>
      </div>
    </section>
  );
}

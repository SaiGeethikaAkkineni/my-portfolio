export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-50 to-indigo-100">
      <h2 className="text-5xl md:text-6xl font-bold text-gray-800">
        Hi, I'm <span className="text-blue-600">Geethika 👋</span>
      </h2>
      <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
        Full-Stack Developer | Cloud Engineer | Problem Solver
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <a
          href="/resume.pdf"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          📄 Resume
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-800 transition"
        >
          💻 GitHub
        </a>
        <a
          href="https://linkedin.com/in/saiakkineni"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          🔗 LinkedIn
        </a>
        <a
          href="mailto:akkinesa@mail.uc.edu"
          className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
        >
          ✉️ Email
        </a>
        <a
          href="tel:+15134886621"
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
        >
          📞 Call
        </a>
      </div>
    </section>
  );
}

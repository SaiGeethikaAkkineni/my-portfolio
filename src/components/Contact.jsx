export default function Contact() {
  return (
    <section id="contact" className="py-20 container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">Contact</h2>
      <p className="text-lg mb-6 text-gray-600">Let’s connect and collaborate!</p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="mailto:akkinesa@mail.uc.edu"
          className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
        >
          ✉️ Email
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
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-800 transition"
        >
          💻 GitHub
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

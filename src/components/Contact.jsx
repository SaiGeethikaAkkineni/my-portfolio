export default function Contact() {
  const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <section id="contact" className="section">
      <div className="max-w-4xl mx-auto text-center glass p-10">
        <h2 className="h-section">Let’s build something great</h2>
        <p className="mt-3 opacity-80">
          I’m open to full-time roles, internships, and impactful collaborations.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href="mailto:akkinesa@mail.uc.edu" className="btn btn-primary">✉️ Email</a>
          <a href="tel:+15134886621" className="btn btn-outline">📞 Call</a>
          <a href="https://linkedin.com/in/saiakkineni" target="_blank" rel="noreferrer" className="btn btn-outline">🔗 LinkedIn</a>
          <a href={resumeHref} className="btn btn-outline">📄 Resume</a>
        </div>
      </div>
    </section>
  );
}

import ScrollReveal from "../components/ScrollReveal"

export default function Resume() {
  return (
    <section className="py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">

        <ScrollReveal>
          <h1 className="text-4xl font-bold mb-6">Resume</h1>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-secondary mb-8">
            Download my complete resume for detailed academic background,
            skills, and project experience.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <a
            href="/Almas_Batool_Resume.pdf"
            download
            className="bg-primary text-dark px-8 py-4 rounded-lg hover:opacity-90 transition"
          >
            Download Resume (PDF)
          </a>
        </ScrollReveal>

      </div>
    </section>
  )
}

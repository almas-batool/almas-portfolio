import ScrollReveal from "./ScrollReveal"

export default function Education() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">

        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-12">
            Education & Certifications
          </h2>
        </ScrollReveal>

        <div className="space-y-10">

          <ScrollReveal>
            <div className="border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-primary">
                B.E – Computer Science Engineering
              </h3>
              <p className="text-secondary">
                Lingaraj Appa Engineering College (VTU) · 2023 – 2027  
                <br />
                CGPA: 8.5
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Certifications
              </h3>
              <ul className="list-disc list-inside text-secondary space-y-1">
                <li>Gen AI Academy – Google Cloud & Hack2Skill</li>
                <li>Agentic AI Day – Google Cloud</li>
                <li>Data Analysis Masterclass – NoviTech R&D</li>
                <li>Full Stack Development – NoviTech R&D</li>
                <li>Python for Beginners – Microsoft Learn</li>
                <li>ICAT Certification</li>
              </ul>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}

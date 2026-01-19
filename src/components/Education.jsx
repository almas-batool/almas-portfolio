import { motion } from "framer-motion"

export default function Education() {
  return (
    <section id="education" className="py-24 bg-dark">

      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12"
        >
          Education & Certifications
        </motion.h2>

        <div className="space-y-8">

          <div className="border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-primary">
              B.E in Computer Science (2023 – 2027)
            </h3>
            <p className="text-secondary">
              Lingaraj Appa Engineering College (VTU) · CGPA: 8.5
            </p>
          </div>

          <div className="border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-primary mb-2">
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

        </div>

      </div>
    </section>
  )
}

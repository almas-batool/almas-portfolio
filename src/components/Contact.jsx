import { motion } from "framer-motion"
import ScrollReveal from "./ScrollReveal"

const cardMotion = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 }
}

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Contact
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-secondary max-w-2xl mb-14">
            I’m open to internships, entry-level roles, collaborations,
            and learning opportunities. Feel free to reach out.
          </p>
        </ScrollReveal>

        {/* Contact Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {/* Email */}
          <ScrollReveal delay={0.15}>
            <motion.a
              {...cardMotion}
              href="mailto:almas.shaik.108@gmail.com"
              className="border border-white/10 rounded-xl p-6 block"
            >
              <h3 className="text-lg font-semibold text-primary mb-2">
                Email
              </h3>
              <p className="text-secondary text-sm break-all">
                almas.shaik.108@gmail.com
              </p>
            </motion.a>
          </ScrollReveal>

          {/* LinkedIn */}
          <ScrollReveal delay={0.2}>
            <motion.a
              {...cardMotion}
              href="https://www.linkedin.com/in/almas-batool-aa518925"
              target="_blank"
              rel="noreferrer"
              className="border border-white/10 rounded-xl p-6 block"
            >
              <h3 className="text-lg font-semibold text-primary mb-2">
                LinkedIn
              </h3>
              <p className="text-secondary text-sm">
                Connect with me professionally
              </p>
            </motion.a>
          </ScrollReveal>

          {/* GitHub */}
          <ScrollReveal delay={0.25}>
            <motion.a
              {...cardMotion}
              href="https://github.com/almas-batool"
              target="_blank"
              rel="noreferrer"
              className="border border-white/10 rounded-xl p-6 block"
            >
              <h3 className="text-lg font-semibold text-primary mb-2">
                GitHub
              </h3>
              <p className="text-secondary text-sm">
                View my projects & code
              </p>
            </motion.a>
          </ScrollReveal>

        </div>

        {/* Footer CTA */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 text-center">
            <p className="text-secondary mb-6">
              Prefer email? I usually reply within 24 hours.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href="mailto:almas.shaik.108@gmail.com"
              className="inline-block bg-primary text-dark px-8 py-3 rounded-lg font-medium shadow-lg shadow-primary/20"
            >
              Send Email
            </motion.a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}

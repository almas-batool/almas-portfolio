import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 pt-32">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Hi, I’m <span className="text-primary">Almas Batool</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-secondary max-w-2xl"
        >
          Software Engineer · Full-Stack Developer · Data & AI Engineer
          <br />
          I build secure, intelligent, and data-driven applications using
          Python, Cloud, and Generative AI.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 flex gap-4 flex-wrap"
        >
          {/* View Projects */}
          <a
            href="#projects"
            className="bg-primary text-dark px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            View Projects
          </a>

          {/* Download Resume */}
          <a
            href="/Almas_Batool_Resume.pdf"
            download
            className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-dark transition"
          >
            Download Resume
          </a>
        </motion.div>

      </div>
    </section>
  )
}

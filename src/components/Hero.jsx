import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid gap-14 md:grid-cols-2 items-center">

        {/* Text */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            Hi, I’m{" "}
            <span className="text-primary">Almas Batool</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-5 max-w-xl text-sm sm:text-base"
          >
            Software Engineer · Full-Stack Developer · Data & AI Engineer  
            <br />
            Building secure, intelligent, and data-driven applications.
          </motion.p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="bg-primary text-dark px-6 py-3 rounded-lg text-center font-medium"
            >
              View Projects
            </a>

            <a
              href="/Almas_Batool_Resume.pdf"
              download
              className="border border-primary text-primary px-6 py-3 rounded-lg text-center font-medium"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/profile.jpg"
            alt="Almas Batool"
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary"
          />
        </div>

      </div>
    </section>
  )
}

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid gap-16 md:grid-cols-2 items-center relative z-10">

        {/* LEFT: TEXT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Hi, I’m{" "}
            <span className="text-primary relative">
              Almas Batool
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-primary/40" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-6 max-w-xl text-secondary text-sm sm:text-base"
          >
            Software Engineer · Full-Stack Developer · Data & AI Engineer  
            <br />
            Building secure, intelligent, and data-driven applications.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="bg-primary text-dark px-7 py-3 rounded-lg font-medium text-center shadow-lg shadow-primary/20"
            >
              View Projects
            </motion.a>

            <motion.a
              href="/Almas_Batool_Resume.pdf"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="border border-primary/70 text-primary px-7 py-3 rounded-lg font-medium text-center hover:bg-primary/10 transition"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT: IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="flex justify-center relative"
        >
          {/* Glow */}
          <div className="absolute w-72 h-72 rounded-full bg-primary/20 blur-3xl" />

          <img
            src="/profile.jpg"
            alt="Almas Batool"
            className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary/80"
          />
        </motion.div>

      </div>
    </section>
  )
}

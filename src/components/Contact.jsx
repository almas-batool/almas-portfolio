import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-dark">
      <div className="max-w-3xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
        >
          Contact Me
        </motion.h2>

        <p className="text-secondary mb-10">
          Feel free to reach out for internships, projects, or collaboration.
        </p>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-transparent border border-white/10 rounded-lg"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-transparent border border-white/10 rounded-lg"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 bg-transparent border border-white/10 rounded-lg"
          />

          <button
            type="submit"
            className="bg-primary text-dark px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-secondary">
          <p>Email: <span className="text-primary">almas.shaik.108@gmail.com</span></p>
          <p>Location: <span className="text-primary">Bidar, Karnataka</span></p>
        </div>

      </div>
    </section>
  )
}

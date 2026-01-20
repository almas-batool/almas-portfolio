import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import ScrollReveal from "./ScrollReveal"
import { projects } from "../data/projects"

export default function Projects() {
  if (!projects || projects.length === 0) return null

  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Title */}
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">
            Projects
          </h2>
        </ScrollReveal>

        {/* Responsive Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal key={project.slug} delay={index * 0.05}>
              <motion.div
                whileTap={{ scale: 0.97 }}
                className="border border-white/10 rounded-xl p-5 sm:p-6 flex flex-col justify-between h-full bg-white/0"
              >
                {/* Title */}
                <Link to={`/projects/${project.slug}`}>
                  <h3 className="text-lg sm:text-xl font-semibold text-primary">
                    {project.title}
                  </h3>
                </Link>

                {/* Description */}
                <p className="text-secondary text-sm mt-3 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 flex gap-4 text-sm">
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    GitHub
                  </motion.a>

                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    Live
                  </motion.a>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}

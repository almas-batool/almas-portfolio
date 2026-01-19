import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import ScrollReveal from "./ScrollReveal"
import { projects } from "../data/projects"

export default function Projects() {
  if (!projects || projects.length === 0) return null

  return (
    <section id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">
            Projects
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ScrollReveal key={project.slug} delay={index * 0.05}>
              <motion.div
                whileTap={{ scale: 0.97 }}
                className="card p-6 hover:border-primary transition-colors"
              >
                <Link to={`/projects/${project.slug}`}>
                  <h3 className="text-xl font-semibold text-primary">
                    {project.title}
                  </h3>
                </Link>

                <p className="mt-3 text-sm">
                  {project.shortDescription}
                </p>

                <div className="mt-5 flex gap-4 text-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    className="underline"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="underline"
                  >
                    Live
                  </a>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}

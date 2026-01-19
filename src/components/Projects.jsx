import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { projects } from "../data/projects"

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-dark">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12"
        >
          Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-white/10 rounded-xl p-6 cursor-pointer hover:border-primary transition"
              >
                {/* Project Title */}
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-secondary mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 text-sm">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 border border-white/10 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

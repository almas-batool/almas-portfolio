import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { projects } from "../data/projects"

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) return null

  return (
    <section>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        <Link to="/" className="text-primary underline text-sm">
          ← Back to Projects
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold mt-6"
        >
          {project.title}
        </motion.h1>

        <p className="mt-6 max-w-2xl">
          {project.description}
        </p>

        <Section title="Key Features">
          <ul className="list-disc list-inside space-y-2">
            {project.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </Section>

        <Section title="Challenges & Solutions">
          <div className="space-y-4">
            {project.challenges.map((c, i) => (
              <div key={i} className="card p-4">
                <p className="font-medium">Challenge</p>
                <p className="text-sm">{c.problem}</p>

                <p className="font-medium mt-3">Solution</p>
                <p className="text-sm">{c.solution}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Tech Stack">
          <div className="flex flex-wrap gap-3">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-4 py-2 border border-white/10 rounded-lg text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </Section>

      </div>
    </section>
  )
}

function Section({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-14"
    >
      <h2 className="text-2xl font-semibold mb-4">
        {title}
      </h2>
      {children}
    </motion.div>
  )
}

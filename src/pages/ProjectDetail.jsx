import { useParams, Link } from "react-router-dom"
import { projects } from "../data/projects"

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return <p className="text-center mt-40">Project not found</p>
  }

  return (
    <section className="min-h-screen bg-dark text-white px-6 py-32">
      <div className="max-w-3xl mx-auto">

        <Link to="/" className="text-primary underline">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold mt-6 text-primary">
          {project.title}
        </h1>

        <p className="text-secondary mt-4">
          {project.description}
        </p>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Problem</h2>
          <p className="text-secondary">{project.problem}</p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Solution</h2>
          <p className="text-secondary">{project.solution}</p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 border border-white/10 rounded-md text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mt-10 flex gap-4">
          <a
            href={project.github}
            target="_blank"
            className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-dark transition"
          >
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            className="bg-primary text-dark px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Live Demo
          </a>
        </div>

      </div>
    </section>
  )
}

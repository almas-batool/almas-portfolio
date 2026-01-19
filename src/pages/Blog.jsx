import ScrollReveal from "../components/ScrollReveal"

const posts = [
  {
    title: "Building an AI-Focused Portfolio with React",
    excerpt:
      "How I designed and developed a professional portfolio using React, Tailwind, and Framer Motion."
  },
  {
    title: "My Learning Path in AI & Cloud",
    excerpt:
      "From Python fundamentals to Generative AI, Vertex AI, and cloud-based systems."
  }
]

export default function Blog() {
  return (
    <section className="py-32">
      <div className="max-w-4xl mx-auto px-6">

        <ScrollReveal>
          <h1 className="text-4xl font-bold mb-12">Articles</h1>
        </ScrollReveal>

        <div className="space-y-8">
          {posts.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="border border-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-secondary mt-2">{p.excerpt}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}

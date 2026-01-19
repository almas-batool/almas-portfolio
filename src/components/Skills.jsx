import ScrollReveal from "./ScrollReveal"

const skills = [
  "Python", "Java", "C++", "Generative AI",
  "Vertex AI", "React", "Git", "Cloud"
]

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-10">Skills</h2>
        </ScrollReveal>

        <div className="flex flex-wrap gap-4">
          {skills.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <span className="px-4 py-2 border border-white/10 rounded-lg">
                {s}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

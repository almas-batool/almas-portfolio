import { motion } from "framer-motion"

const skills = [
  {
    title: "Programming",
    items: ["Python", "Java", "C", "C++"]
  },
  {
    title: "Full-Stack & Tools",
    items: ["Python Backend", "Streamlit", "Git", "VS Code", "PyCharm"]
  },
  {
    title: "Data, AI & Cloud",
    items: [
      "Generative AI",
      "Vertex AI",
      "Gemini APIs",
      "Multimodal RAG",
      "Prompt Engineering",
      "Data Analysis",
      "Data Visualization"
    ]
  },
  {
    title: "Other Tools",
    items: ["Jupyter Notebook", "MS Excel", "MS Word", "MS PowerPoint"]
  }
]

export default function Skills() {
  return (
   <section id="skills" className="py-24 bg-dark">

      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/10 rounded-xl p-6 hover:border-primary transition"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">
                {group.title}
              </h3>

              <ul className="flex flex-wrap gap-3 text-sm text-secondary">
                {group.items.map((skill, i) => (
                  <li
                    key={i}
                    className="px-3 py-1 border border-white/10 rounded-md"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

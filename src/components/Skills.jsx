import { motion } from "framer-motion"
import ScrollReveal from "./ScrollReveal"

const cardMotion = {
  whileHover: { scale: 1.04 },
  whileTap: { scale: 0.97 }
}

const SkillCard = ({ title, icon, skills }) => (
  <motion.div
    {...cardMotion}
    className="border border-white/10 rounded-xl p-6 h-full"
  >
    <div className="flex items-center gap-3 mb-4">
      <span className="text-primary">{icon}</span>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2 text-sm text-secondary">
      {skills.map(skill => (
        <span
          key={skill}
          className="px-3 py-1 rounded-full border border-white/10"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
)

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Skills & Experience
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-secondary max-w-2xl mb-14">
            A practical skill set built through projects, certifications,
            and continuous learning in software engineering and AI.
          </p>
        </ScrollReveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          <ScrollReveal delay={0.15}>
            <SkillCard
              title="Programming"
              icon={<span>💻</span>}
              skills={["Python", "Java", "C", "C++"]}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <SkillCard
              title="Web & Frontend"
              icon={<span>🌐</span>}
              skills={["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <SkillCard
              title="AI & Data"
              icon={<span>🤖</span>}
              skills={[
                "Generative AI",
                "Prompt Engineering",
                "Data Analysis",
                "Data Visualization"
              ]}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <SkillCard
              title="Cloud & Tools"
              icon={<span>☁️</span>}
              skills={[
                "Google Cloud",
                "Vertex AI",
                "Git & GitHub",
                "Vercel"
              ]}
            />
          </ScrollReveal>

        </div>

        {/* Certifications */}
        <ScrollReveal delay={0.35}>
          <div className="mt-20">
            <h3 className="text-2xl font-semibold mb-6">
              Certifications
            </h3>
            <ul className="space-y-3 text-secondary">
              <li>• Generative AI – Google Cloud & Hack2Skill</li>
              <li>• Machine Learning Operations (MLOps)</li>
              <li>• Google Cloud Fundamentals</li>
              <li>• Google Cloud AI Fundamentals</li>
              <li>• Data Analysis Masterclass – NoviTech R&D</li>
              <li>• Full Stack Development – NoviTech R&D</li>
              <li>• Python for Beginners – Microsoft Learn</li>
            </ul>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}

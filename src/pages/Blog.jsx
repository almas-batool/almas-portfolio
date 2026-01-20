import ScrollReveal from "../components/ScrollReveal"

export default function Blog() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Page Title */}
        <ScrollReveal>
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">
            Blog
          </h1>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal delay={0.1}>
          <p className="text-secondary max-w-2xl mb-12">
            I share my learnings, thoughts, and experiences related to
            software engineering, AI, cloud, and technology.
          </p>
        </ScrollReveal>

        {/* Placeholder Posts */}
        <div className="space-y-8">
          <ScrollReveal delay={0.15}>
            <article className="border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-primary">
                Coming Soon 🚀
              </h2>
              <p className="text-secondary mt-3">
                Blog posts will be added here soon. Stay tuned!
              </p>
            </article>
          </ScrollReveal>
        </div>

      </div>
    </section>
  )
}

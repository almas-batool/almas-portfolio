import { useRef } from "react"
import emailjs from "@emailjs/browser"
import ScrollReveal from "./ScrollReveal"

export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      form.current,
      "YOUR_PUBLIC_KEY"
    )
    .then(
      () => {
        alert("Message sent successfully!")
        form.current.reset()
      },
      () => {
        alert("Failed to send message. Please try again.")
      }
    )
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Contact Me
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-transparent border border-white/10"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-transparent border border-white/10"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-lg bg-transparent border border-white/10"
            />

            <button
              type="submit"
              className="w-full bg-primary text-dark py-3 rounded-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </ScrollReveal>

      </div>
    </section>
  )
}

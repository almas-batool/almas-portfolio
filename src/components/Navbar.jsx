import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark/95 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        <span className="font-bold text-primary text-lg">
          Almas Batool
        </span>

        {/* Desktop */}
        <div className="hidden md:flex gap-6 text-sm text-secondary">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="/blog">Blog</a>
          <a href="/resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 space-y-4 text-secondary bg-dark">
          {["home", "skills", "projects", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="block py-2"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <a href="/blog" className="block py-2">Blog</a>
          <a href="/resume" className="block py-2">Resume</a>
        </div>
      )}
    </nav>
  )
}

import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  const location = useLocation()

  const isActive = (path) => {
    if (path.startsWith("#")) return false
    return location.pathname === path
  }

  const linkClass = (active) =>
    `relative transition ${
      active ? "text-primary" : "text-secondary"
    } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px]
     after:bg-primary after:transition-all after:duration-300 ${
       active ? "after:w-full" : "after:w-0"
     }`

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark/90 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        <Link to="/" className="text-primary font-bold">
          Almas Batool
        </Link>

        <div className="hidden md:flex gap-6 text-sm">
          <a href="/#skills" className="text-secondary hover:text-primary">
            Skills
          </a>
          <a href="/#projects" className="text-secondary hover:text-primary">
            Projects
          </a>
          <Link to="/blog" className={linkClass(isActive("/blog"))}>
            Blog
          </Link>
          <Link to="/resume" className={linkClass(isActive("/resume"))}>
            Resume
          </Link>
          <a href="/#contact" className="text-secondary hover:text-primary">
            Contact
          </a>
        </div>

      </div>
    </nav>
  )
}

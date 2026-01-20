import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import AnimatedBackground from "./components/AnimatedBackground"

import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

import Blog from "./pages/Blog"
import Resume from "./pages/Resume"
import ProjectDetail from "./pages/ProjectDetail"

export default function App() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Skills />
              <Projects />
              <Contact />
            </>
          }
        />

        {/* PAGES */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </>
  )
}

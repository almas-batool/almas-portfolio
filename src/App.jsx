import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Contact from "./components/Contact"
import ProjectDetail from "./pages/ProjectDetail"
import Blog from "./pages/Blog"
import Resume from "./pages/Resume"
import PageWrapper from "./components/PageWrapper"

export default function App() {
  const location = useLocation()

  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <Hero />
                <Skills />
                <Projects />
                <Education />
                <Contact />
              </PageWrapper>
            }
          />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

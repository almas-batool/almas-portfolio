import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Contact from "./components/Contact"

import ProjectDetail from "./pages/ProjectDetail"

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Skills />
              <Projects />
              <Education />
              <Contact />
            </>
          }
        />

        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </>
  )
}

import { useEffect } from "react"

export default function Parallax() {
  useEffect(() => {
    const move = e => {
      document.documentElement.style.setProperty(
        "--x",
        `${e.clientX / 50}px`
      )
      document.documentElement.style.setProperty(
        "--y",
        `${e.clientY / 50}px`
      )
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return <div className="bg-parallax fixed inset-0 -z-10" />
}

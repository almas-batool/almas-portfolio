import { useEffect, useRef } from "react"

export default function Particles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    let w, h
    const particles = []
    const count = window.innerWidth < 768 ? 40 : 80

    function resize() {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    class Particle {
      constructor() {
        this.x = Math.random() * w
        this.y = Math.random() * h
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        if (this.x < 0 || this.x > w) this.vx *= -1
        if (this.y < 0 || this.y > h) this.vy *= -1
      }
    }

    for (let i = 0; i < count; i++) {
      particles.push(new Particle())
    }

    function draw() {
      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = "rgba(255,255,255,0.15)"

      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2)
        ctx.fill()
        p.update()
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.strokeStyle = "rgba(255,255,255,0.08)"
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(draw)
    }
    draw()

    return () => window.removeEventListener("resize", resize)
  }, [])

  return <canvas ref={canvasRef} className="bg-canvas" />
}

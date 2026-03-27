import { useEffect, useRef, useState } from 'react'
import './Hero.css'

const ROLES = [
  'DevSecOps Engineer',
  'CyberSecurity Engineer',
  'DevOps Engineer',
  'Cloud Security',
]

export default function Hero() {
  const [roleText, setRoleText] = useState('')
  const state = useRef({ ri: 0, ci: 0, deleting: false })

  useEffect(() => {
    let timer
    const tick = () => {
      const { ri, ci, deleting } = state.current
      const word = ROLES[ri]

      if (!deleting) {
        const next = ci + 1
        setRoleText(word.slice(0, next))
        state.current.ci = next
        if (next === word.length) {
          state.current.deleting = true
          timer = setTimeout(tick, 1800)
          return
        }
      } else {
        const next = ci - 1
        setRoleText(word.slice(0, next))
        state.current.ci = next
        if (next === 0) {
          state.current.deleting = false
          state.current.ri = (ri + 1) % ROLES.length
        }
      }
      timer = setTimeout(tick, deleting ? 45 : 85)
    }

    timer = setTimeout(tick, 1400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="hero-grid"  aria-hidden />
      <div className="hero-glow"  aria-hidden />
      <div className="hero-inner">
        <p className="hero-label">// Disponible pour alternance dès septembre 2026</p>
        <h1 className="hero-name">
          Lounès<br /><span>Fahem</span>
        </h1>
        <div className="hero-role-wrapper" aria-live="polite">
          <span className="hero-role">{roleText}</span>
          <span className="cursor-blink" aria-hidden />
        </div>
        <p className="hero-desc">
          Ingénieur en devenir, spécialisé dans la sécurité des infrastructures cloud et l'automatisation.
          Expérience terrain en datacenter chez OVHcloud — je comprends les systèmes de l'intérieur.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">Voir mes projets →</a>
          <a href="#contact"  className="btn btn-ghost">Me contacter</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-num">3</div>
            <div className="stat-label">Projets personnels</div>
          </div>
          <div className="stat">
            <div className="stat-num">4</div>
            <div className="stat-label">Stacks couvertes</div>
          </div>
          <div className="stat">
            <div className="stat-num">2026</div>
            <div className="stat-label">Cycle Ingénieur</div>
          </div>
        </div>
      </div>
    </section>
  )
}
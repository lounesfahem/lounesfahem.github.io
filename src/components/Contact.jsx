import useReveal from '../hooks/useReveal'
import './Contact.css'

const SOCIALS = [
  {
    href: 'https://github.com/lounesfahem',
    label: 'GitHub',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/lounès-fahem-4955ab299/',
    label: 'LinkedIn',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    href: 'https://github.com/lounesfahem/lounesfahem.github.io',
    label: 'Portfolio',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" className="contact-section">
      <div ref={ref} className="reveal">
        <p className="section-label">// 06 — Contact</p>
        <h2 className="section-title">Travaillons ensemble.</h2>
        <div className="section-line" style={{ margin: '0 auto 1.5rem' }} />
        <p className="contact-sub">
          À la recherche d'une alternance en ingénierie — DevSecOps, Cyber, DevOps ou Dev Fullstack.
          Disponible pour un entretien rapidement.
        </p>
        <a href="mailto:fahemlounes4@gmail.com" className="contact-email">
          fahemlounes4@gmail.com
        </a>
        <div className="social-links">
          {SOCIALS.map(({ href, label, icon }) => (
            <a key={label} href={href} className="social-link" target="_blank" rel="noreferrer">
              {icon}
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useEffect, useState } from 'react'
import './Navbar.css'

const LINKS = [
  { href: '#about',      label: 'À Propos'    },
  { href: '#skills',     label: 'Compétences' },
  { href: '#projects',   label: 'Projets'     },
  { href: '#experience', label: 'Parcours'    },
  { href: '#contact',    label: 'Contact'     },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="nav-logo">LF.dev</a>
      <ul className="nav-links">
        {LINKS.map(({ href, label }) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

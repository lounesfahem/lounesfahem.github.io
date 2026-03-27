import useReveal from '../hooks/useReveal'
import './Projects.css'

const PROJECTS = [
  {
    num: '001',
    title: 'Homelab Cybersécurité',
    desc: 'Architecture 3-Tier segmentée via pfSense avec isolation LAN / DMZ / IoT. SOC personnel sous Wazuh, Active Directory Windows Server 2022 durci selon les standards ANSSI.',
    tags: ['pfSense', 'Wazuh', 'VLAN', 'AD / ANSSI'],
    link: { href: 'https://github.com/lounesfahem/Cybersecurity-HomeLab-Infrastructure', label: 'Voir le projet →' },
  },
  {
    num: '002',
    title: 'Application Android Fullstack',
    desc: "Application mobile complète en Kotlin avec API REST dédiée et base de données SQL sécurisée. Architecture clean, déployée et disponible sur GitHub.",
    tags: ['Kotlin', 'REST API', 'SQL', 'Android'],
    link: { href: 'https://github.com/lounesfahem', label: 'GitHub →' },
  },
  {
    num: '003',
    title: 'Portfolio CI/CD',
    desc: 'Site portfolio moderne déployé via pipeline CI/CD entièrement automatisé. Stack Vite + Tailwind CSS + GitHub Actions.',
    tags: ['React', 'Vite', 'Tailwind', 'GitHub Actions'],
    link: { href: 'https://github.com/lounesfahem/lounesfahem.github.io', label: 'Voir le projet →' },
  },
]

export default function Projects() {
  const headRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="projects" className="section-inner">
      <div ref={headRef} className="reveal">
        <p className="section-label">// 03 — Projets</p>
        <h2 className="section-title">Ce que j'ai construit.</h2>
        <div className="section-line" />
      </div>

      <div ref={gridRef} className="projects-grid reveal">
        {PROJECTS.map((p) => (
          <article key={p.num} className="project-card">
            <div className="project-num">{p.num}</div>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tags">
              {p.tags.map((t) => (
                <span key={t} className="project-tag">{t}</span>
              ))}
            </div>
            {p.link && (
              <a href={p.link.href} className="project-link" target="_blank" rel="noreferrer">
                {p.link.label}
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

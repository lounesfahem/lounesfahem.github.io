import useReveal from '../hooks/useReveal'
import './About.css'

const INFO = [
  { key: 'Localisation', val: 'Wattrelos / Nord (59)' },
  { key: 'Mobilité',     val: 'Paris · Lille'},
  { key: 'Formation',    val: 'Cycle Ingénieur — ESIEA 2026' },
  { key: 'Statut',       val: null, badge: 'En poste · Recherche alternance' },
  { key: 'Langues',      val: 'Français · Anglais · Kabyle' },
]

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="section-inner">
      <div ref={ref} className="reveal">
        <p className="section-label">// 01 — À Propos</p>
        <h2 className="section-title">Une double expertise<br />rare sur le marché.</h2>
        <div className="section-line" />
      </div>

      <div className="about-grid reveal" ref={useReveal()}>
        <div className="about-text">
          <p>
            Je suis <strong>Lounès Fahem</strong>, 21 ans, actuellement{' '}
            <strong>Technicien RUN</strong> chez OVHcloud à Roubaix.
            Diplômé d'un <strong>BTS CIEL</strong>, j'intègre en 2026
            un cycle ingénieur en cybersécurité.
          </p>
          <p>
            Ma force : une double compétence <strong>Hardware / MCO</strong> et{' '}
            <strong>Dev / Automation</strong>. Je comprends les systèmes aussi bien à la
            main qu'à travers le code.
          </p>
          <p>
            Je vise des postes en{' '}
            <strong>DevSecOps, Cloud Security, Cybersecurity engineer ou DevOps</strong> — là où
            sécurité, infrastructure et code se croisent.
          </p>
        </div>

        <div className="about-info">
          {INFO.map(({ key, val, badge }) => (
            <div key={key} className="info-row">
              <span className="info-key">{key}</span>
              <span className="info-val">
                {badge
                  ? <span className="badge">{badge}</span>
                  : val
                }
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

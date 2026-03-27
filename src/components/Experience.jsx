import useReveal from '../hooks/useReveal'
import './Experience.css'

const JOBS = [
  {
    date:    '2025 — Présent',
    role:    'Technicien RUN — Maintenance Datacenter',
    company: 'OVHcloud · Roubaix',
    desc:    'Maintenance et supervision des infrastructures physiques en production. Diagnostic hardware, montage serveurs, câblage en baie. Gestion des incidents NOC en environnement haute disponibilité.',
    pills:   ['Hardware', 'NOC', 'Linux', 'Haute dispo'],
    current: true,
  },
  {
    date:    'Mai 2024 — Juillet 2024',
    role:    'Développeur Web — Stage',
    company: 'Nuratec',
    desc:    `Migration PHP 5 vers PHP 8 d'une application métier critique. Refactorisation du code legacy, sécurisation des endpoints, mise en place de tests.`,
    pills:   ['PHP 8', 'Migration', 'SQL'],
    current: false,
  },
]

const EDU = [
  { year: '2026 — 2029', degree: `Cycle Ingénieur — Cybersécurité', school: 'ESIEA Paris`,                    mention: 'Admis'         },
  { year: '2026 — 2029', degree: `Cycle Ingénieur — Télécoms & Réseaux' , school: 'IMT Nord Europe`, mention: 'En cours'      },
  { year: '2023 — 2025', degree: `BTS CIEL — Cyber, Informatique & Réseaux', school: 'Lycée Polyvalent Colbert`,          mention: 'Obtenu'},
  { year: '2020 — 2023', degree: `Baccalauréat STI2D',                   school: 'Lycée Privée Saint-Rémi' , mention: 'Mention Bien`, mention:'Obtenu' },
]

export default function Experience() {
  const xpHeadRef  = useReveal()
  const xpBodyRef  = useReveal()
  const eduHeadRef = useReveal()
  const eduGridRef = useReveal()

  return (
    <div id="experience" className="experience-section">
      <div className="section-inner">

        {/* Experience */}
        <div ref={xpHeadRef} className="reveal">
          <p className="section-label">// 04 — Expérience</p>
          <h2 className="section-title">Parcours professionnel.</h2>
          <div className="section-line" />
        </div>

        <div ref={xpBodyRef} className="timeline reveal">
          {JOBS.map((job) => (
            <div key={job.role} className="timeline-item">
              <div className={`timeline-dot ${job.current ? '' : 'muted'}`} />
              <div className="timeline-date">{job.date}</div>
              <div className="timeline-role">{job.role}</div>
              <div className="timeline-company">{job.company}</div>
              <p className="timeline-desc">{job.desc}</p>
              <div className="timeline-pills">
                {job.pills.map((p) => (
                  <span key={p} className="timeline-pill">{p}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div ref={eduHeadRef} className="reveal" style={{ marginTop: '5rem' }}>
          <p className="section-label">// 05 — Formation</p>
          <h2 className="section-title">Parcours académique.</h2>
          <div className="section-line" />
        </div>

        <div ref={eduGridRef} className="edu-grid reveal">
          {EDU.map((e) => (
            <div key={e.degree} className="edu-card">
              <span className="edu-mention">{e.mention}</span>
              <div className="edu-year">{e.year}</div>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-school">{e.school}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

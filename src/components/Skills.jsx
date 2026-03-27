import useReveal from '../hooks/useReveal'
import './Skills.css'

const GROUPS = [
  {
    title: 'Infrastructure & Cloud',
    items: [
      { label: 'Linux (Debian, RHEL)',    highlight: true  },
      { label: 'VMware vSphere / ESXi',   highlight: true  },
      { label: 'Docker',                  highlight: true  },
      { label: 'Proxmox',                 highlight: false },
      { label: 'OpenStack',               highlight: false },
      { label: 'Kubernetes (notions)',     highlight: false },
      { label: 'Montage serveur / câblage',highlight: false },
      { label: 'Diagnostic hardware',     highlight: false },
    ],
  },
  {
    title: 'Cybersécurité',
    items: [
      { label: 'pfSense / Iptables',         highlight: true  },
      { label: 'Zero Trust Architecture',    highlight: true  },
      { label: 'Wazuh SIEM',                 highlight: true  },
      { label: 'VLAN 802.1Q',               highlight: false },
      { label: 'IDS / IPS',                  highlight: false },
      { label: 'CIS Benchmarks',             highlight: false },
      { label: 'Standards ANSSI',            highlight: false },
      { label: 'AD Hardening',               highlight: false },
    ],
  },
  {
    title: 'Dev & Automatisation',
    items: [
      { label: 'Python',                  highlight: true  },
      { label: 'GitLab CI / GitHub Actions',highlight: true },
      { label: 'PHP',                   highlight: true },
      { label: 'Kotlin (Android)',         highlight: true },
      { label: 'Ansible / Terraform',     highlight: false  },
      { label: 'Java',                    highlight: false },
      { label: 'C++',                     highlight: false },
      { label: 'SQL',                     highlight: false },
    ],
  },
  {
    title: 'Observabilité & Monitoring',
    items: [
      { label: 'Grafana',             highlight: true  },
      { label: 'Prometheus',          highlight: true  },
      { label: 'NOC / SRE Monitoring',highlight: false },
      { label: 'Dashboards temps réel',highlight: false },
      { label: 'Alerting',            highlight: false },
    ],
  },
]

export default function Skills() {
  const headRef  = useReveal()
  const gridRef  = useReveal()

  return (
    <div id="skills" className="skills-section">
      <div className="section-inner">
        <div ref={headRef} className="reveal">
          <p className="section-label">// 02 — Compétences</p>
          <h2 className="section-title">Stack technique.</h2>
          <div className="section-line" />
        </div>

        <div ref={gridRef} className="skills-grid reveal">
          {GROUPS.map((group) => (
            <div key={group.title} className="skill-group">
              <div className="skill-group-title">{group.title}</div>
              <div className="skill-tags">
                {group.items.map(({ label, highlight }) => (
                  <span
                    key={label}
                    className={`skill-tag ${highlight ? 'highlight' : ''}`}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

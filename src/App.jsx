import React, { useState } from 'react';
import { 
  Shield, 
  Server, 
  Code, 
  Activity, 
  Terminal, 
  Mail, 
  ExternalLink, 
  ChevronRight,
  Database,
  Globe,
  Lock,
  Cpu
} from 'lucide-react';

// Icônes de marques personnalisées car supprimées de lucide-react récent
const GithubIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Portfolio = () => {
  const skills = {
    "Cloud & Ops": ["Terraform", "Ansible", "Docker", "VMware", "GitLab CI"],
    "Sécurité": ["Wazuh (SIEM)", "pfSense", "Hardening ANSSI", "Zero Trust"],
    "Réseaux": ["VLAN", "VPN WireGuard", "Routing", "Wireshark"],
    "Dev": ["Python", "Bash", "Go (Notions)", "Kotlin", "SQL"]
  };

  const experiences = [
    {
      company: "OVHcloud",
      role: "Technicien RUN - Maintenance Datacentre",
      period: "Mars 2026 - Présent",
      desc: "Maintien en condition opérationnelle (MCO) d'infrastructures cloud mondiales. Monitoring intensif et diagnostic hardware."
    },
    {
      company: "Nuratec",
      role: "Développeur Web & Sécurité (Stage)",
      period: "Mai 2024 - Juillet 2024",
      desc: "Migration critique PHP 5 vers 8. Remédiation de failles SQLi et XSS."
    },
    {
      company: "Indépendant",
      role: "Administrateur Systèmes & Réseaux",
      period: "2023 - Présent",
      desc: "Audit et déploiement de solutions de stockage et sécurité pour PME."
    }
  ];

  const projects = [
    {
      title: "Infrastructure Zero Trust",
      tech: "pfSense, VLAN, Wazuh",
      desc: "Conception d'un HomeLab segmenté isolant les services critiques via micro-segmentation.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Stack Observabilité",
      tech: "Grafana, Prometheus",
      desc: "Déploiement d'une stack de monitoring pour centraliser les métriques de performance serveurs.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Application Native Android",
      tech: "Kotlin, REST API",
      desc: "Développement d'une application mobile connectée à une base de données SQL sécurisée.",
      icon: <Code className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">L</div>
            <span className="font-bold text-xl tracking-tight uppercase">Lounès Fahem</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            {['Profil', 'Expertise', 'Expérience', 'Projets'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            ))}
            <a href="mailto:fahemlounes4@gmail.com" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-all text-white">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="profil" className="pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6 uppercase tracking-widest">
              Futur Ingénieur DevSecOps
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Sécuriser le <span className="text-blue-500">Cloud</span> par l'automatisation.
            </h1>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl">
              Actuellement au RUN chez <span className="text-slate-200">OVHcloud</span> et admis à l'ESIEA. 
              Je construis des ponts entre l'infrastructure physique et la sécurité logicielle.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://linkedin.com/in/lounes-fahem" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all">
                <LinkedinIcon className="w-5 h-5 text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/lounesfahem" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all">
                <GithubIcon className="w-5 h-5 text-slate-300" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 overflow-hidden">
               <div className="flex space-x-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
               </div>
               <div className="font-mono text-sm leading-relaxed text-slate-300">
                  <p className="text-blue-400">$ whoami</p>
                  <p>Lounès Fahem</p>
                  <p className="text-blue-400 mt-2">$ current_location</p>
                  <p>OVHcloud Datacentre, Roubaix</p>
                  <p className="text-blue-400 mt-2">$ expertise</p>
                  <p>["Cloud_Arch", "DevSecOps", "Networking"]</p>
                  <p className="text-blue-400 mt-2">$ status</p>
                  <p className="animate-pulse">_ Monitoring infrastructure global...</p>
               </div>
               <Activity className="absolute bottom-4 right-4 text-blue-500/10 w-32 h-32" />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 flex items-center">
            <Terminal className="mr-4 text-blue-500" /> Expertise Technique
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="p-6 rounded-2xl bg-slate-950/50 border border-slate-800 hover:border-blue-500/50 transition-all group">
                <h3 className="text-blue-400 font-bold mb-4 uppercase tracking-wider text-xs">{category}</h3>
                <ul className="space-y-3">
                  {items.map(skill => (
                    <li key={skill} className="flex items-center text-slate-300 text-sm">
                      <ChevronRight className="w-4 h-4 mr-2 text-slate-600 group-hover:text-blue-500 transition-colors" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="expérience" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16">Parcours Professionnel</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-12 relative">
                <div className="md:w-1/4">
                  <p className="text-blue-500 font-bold">{exp.period}</p>
                  <p className="text-slate-500 text-sm font-mono mt-1 uppercase tracking-tighter">{exp.company}</p>
                </div>
                <div className="md:w-3/4 pb-12 border-l border-slate-800 pl-8 relative">
                  <div className="absolute top-0 -left-1.5 w-3 h-3 bg-blue-500 rounded-full"></div>
                  <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                  <p className="text-slate-400 leading-relaxed max-w-2xl">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-24 bg-blue-600/5 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16">Réalisations & Projets</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-xs font-mono text-blue-400 mb-4 uppercase tracking-widest">{project.tech}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
                <button className="text-sm font-bold flex items-center text-slate-200 group-hover:text-blue-500 transition-colors">
                  Détails du projet <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-900 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-slate-500 text-sm">
            © 2026 Lounès Fahem. Conçu pour l'excellence Cyber.
          </div>
          <div className="flex space-x-6">
             <a href="mailto:fahemlounes4@gmail.com" className="text-slate-400 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
             <a href="https://linkedin.com/in/lounes-fahem" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><LinkedinIcon className="w-5 h-5" /></a>
             <a href="https://github.com/lounesfahem" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><GithubIcon className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return <Portfolio />;
}
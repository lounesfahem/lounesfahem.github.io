import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Lounès Fahem</span>
      <span>Conçu & développé avec soin</span>
    </footer>
  )
}

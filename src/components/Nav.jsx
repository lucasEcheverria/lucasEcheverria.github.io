import { NavLink } from 'react-router-dom'
import './Nav.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/develop', label: 'Develop' },
  { to: '/security', label: 'Security' },
  { to: '/about', label: 'About Me' },
]

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <NavLink to="/" className="nav__brand">
          lucas<span className="nav__brand-dim">@</span>portfolio
        </NavLink>
        <nav className="nav__links" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => 'nav__link' + (isActive ? ' nav__link--active' : '')}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <a href="#contact" className="nav__contact">
          Contact
        </a>
      </div>
    </header>
  )
}

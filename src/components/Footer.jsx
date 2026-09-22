import { contact } from '../data/content'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer__inner">
        <div className="footer__block">
          <p className="footer__label">Contact</p>
          <ul className="footer__list">
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
            </li>
            <li>
              <a href={contact.githubUrl} target="_blank" rel="noreferrer">
                github.com/{contact.github}
              </a>
            </li>
            <li>
              <a href={contact.linkedinUrl} target="_blank" rel="noreferrer">
                {contact.linkedin}
              </a>
            </li>
            <li className="footer__muted">{contact.location}</li>
          </ul>
        </div>
        <a className="footer__resume" href={contact.resumeUrl} download>
          Download résumé
        </a>
      </div>
      <div className="container footer__bottom">
        <span>Lucas Echeverría Madariaga</span>
      </div>
    </footer>
  )
}

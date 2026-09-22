import { identity } from '../data/content'
import './HeroName.css'

export default function HeroName() {
  return (
    <div className="hero-name">
      <h1 className="hero-name__first" data-text={identity.first}>
        {identity.first}
      </h1>
      <p className="hero-name__last">{identity.last}</p>
      <span className="hero-name__badge">Based in {identity.location}</span>
    </div>
  )
}

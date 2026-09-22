import SkillTag from './SkillTag'
import ProjectCard from './ProjectCard'
import TerminalPanel from './TerminalPanel'
import './TrackPage.css'

export default function TrackPage({ title, featured, breakdown, projects }) {
  return (
    <div className="track">
      <h1 className="track__title">{title}</h1>

      <section className="track__row">
        <p className="section-title">Featured skills</p>
        <ul className="track__featured">
          {featured.map((skill) => (
            <li key={skill} className="track__featured-item">
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="track__row">
        <p className="section-title">Full breakdown</p>
        <TerminalPanel title={`~ $ skills --list --track=${title.toLowerCase()}`}>
          {breakdown}
        </TerminalPanel>
      </section>

      <section className="track__row">
        <p className="section-title">Projects</p>
        <div className="track__projects">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}

export function SkillGroup({ category, items }) {
  return (
    <div className="track__group">
      {category && <p className="track__group-label">{category}</p>}
      <ul className="track__tag-row">
        {items.map((item) => (
          <li key={item}>
            <SkillTag>{item}</SkillTag>
          </li>
        ))}
      </ul>
    </div>
  )
}

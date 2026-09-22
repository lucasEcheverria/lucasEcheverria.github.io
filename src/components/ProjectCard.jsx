import SkillTag from './SkillTag'
import './ProjectCard.css'

export default function ProjectCard({ project }) {
  return (
    <article className={`project-card project-card--${project.accent}`}>
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__description">{project.description}</p>
      <ul className="project-card__tags">
        {project.tags.map((tag) => (
          <li key={tag}>
            <SkillTag>{tag}</SkillTag>
          </li>
        ))}
      </ul>
    </article>
  )
}

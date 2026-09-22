import Timeline from '../components/Timeline'
import {
  bio,
  softSkillsFull,
  languages,
  studies,
  experienceFull,
  roadmap,
} from '../data/content'
import './About.css'

export default function About() {
  return (
    <div className="about">
      <section className="about__row about__row--first">
        <h1 className="about__title">About Me</h1>
        <p className="about__bio">{bio}</p>
      </section>

      <section className="about__row">
        <p className="section-title">Soft skills</p>
        <ul className="about__skills">
          {softSkillsFull.map((skill) => (
            <li key={skill.name} className="about__skill">
              <span className="about__skill-name">{skill.name}</span>
              <span className="about__skill-rationale">{skill.rationale}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="about__row">
        <p className="section-title">Languages</p>
        <ul className="about__languages">
          {languages.map((lang) => (
            <li key={lang.name}>
              <span className="about__language-name">{lang.name}</span>
              <span className="about__language-level">{lang.level}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="about__row">
        <p className="section-title">Studies</p>
        <ul className="about__studies">
          {studies.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="about__row">
        <p className="section-title">Experience</p>
        <ul className="about__experience">
          {experienceFull.map((job) => (
            <li key={job.role + job.company} className="about__job">
              <div className="about__job-header">
                <span className="about__job-role">
                  {job.role} — {job.company}
                </span>
                <span className="about__job-period">{job.period}</span>
              </div>
              <p className="about__job-description">{job.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="about__row">
        <p className="section-title">Roadmap</p>
        <Timeline items={roadmap} />
      </section>
    </div>
  )
}

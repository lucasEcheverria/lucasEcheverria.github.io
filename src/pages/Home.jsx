import HeroName from '../components/HeroName'
import SkillTag from '../components/SkillTag'
import ProjectCard from '../components/ProjectCard'
import {
  bio,
  softSkillsHome,
  experienceShort,
  skillsSummaryShort,
  homeProjects,
} from '../data/content'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <section className="home__hero">
        <HeroName />
        <p className="home__bio">{bio}</p>
      </section>

      <section className="home__row">
        <ul className="home__tag-row">
          {softSkillsHome.map((skill) => (
            <li key={skill}>
              <SkillTag>{skill}</SkillTag>
            </li>
          ))}
        </ul>
      </section>

      <section className="home__row">
        <p className="section-title">Experience</p>
        <p className="home__experience">{experienceShort}</p>
      </section>

      <section className="home__row">
        <p className="section-title">Skills</p>
        <ul className="home__tag-row">
          {skillsSummaryShort.map((skill) => (
            <li key={skill}>
              <SkillTag>{skill}</SkillTag>
            </li>
          ))}
        </ul>
      </section>

      <section className="home__row">
        <p className="section-title">Featured projects</p>
        <div className="home__projects">
          {homeProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}

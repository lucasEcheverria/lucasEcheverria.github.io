import TrackPage, { SkillGroup } from '../components/TrackPage'
import { developSkills, developProjects } from '../data/content'

export default function Develop() {
  return (
    <TrackPage
      title="Develop"
      featured={developSkills.featured}
      projects={developProjects}
      breakdown={developSkills.breakdown.map((group) => (
        <SkillGroup key={group.category} category={group.category} items={group.items} />
      ))}
    />
  )
}

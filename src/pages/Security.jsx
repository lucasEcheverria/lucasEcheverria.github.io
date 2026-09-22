import TrackPage, { SkillGroup } from '../components/TrackPage'
import { securitySkills, securityProjects } from '../data/content'

export default function Security() {
  return (
    <TrackPage
      title="Security"
      featured={securitySkills.featured}
      projects={securityProjects}
      breakdown={<SkillGroup items={securitySkills.breakdown} />}
    />
  )
}

import { skills } from "@/data/skills"
import SkillCard from "./SkillCard"

export default function SkillGrid() {
  return (
    <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))" }}>
      {skills.map((s) => (
        <SkillCard key={s.name} skill={s} />
      ))}
    </div>
  )
}

import type { Skill } from "@/types"
import { Card } from "@/components/ui/card"

export default function SkillCard({ skill }: { skill: Skill }) {
  return (
    <Card className="p-5">
      <div className="flex items-baseline justify-between">
        <h4 className="text-[1.08rem]">{skill.name}</h4>
        <span className="font-mono text-[0.74rem] text-muted-foreground">{skill.level}</span>
      </div>
      <div className="mt-3.5 h-1.5 overflow-hidden rounded-full bg-secondary">
        <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${skill.value}%` }} />
      </div>
      <p className="mt-3 text-[0.88rem] text-muted-foreground">{skill.note}</p>
    </Card>
  )
}

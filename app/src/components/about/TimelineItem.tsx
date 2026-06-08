import type { TimelineItem as TTimelineItem } from "@/types"

export default function TimelineItem({ item }: { item: TTimelineItem }) {
  return (
    <div className="relative pb-9 pl-8 last:pb-0">
      <span className="absolute left-[-7px] top-1 h-3 w-3 rounded-full border-2 border-primary bg-card" />
      <span className="font-mono text-[0.78rem] text-primary">{item.when}</span>
      <h4 className="mt-1.5 text-[1.12rem]">{item.role}</h4>
      <p className="mt-0.5 text-[0.9rem] text-muted-foreground">{item.org}</p>
      <p className="mt-2.5 max-w-[56ch] text-[0.94rem] text-muted-foreground">{item.body}</p>
    </div>
  )
}

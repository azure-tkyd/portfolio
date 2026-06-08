import { timeline } from "@/data/timeline"
import TimelineItem from "./TimelineItem"

export default function Timeline() {
  return (
    <div className="ml-1.5 border-l-2 border-border">
      {timeline.map((item) => (
        <TimelineItem key={item.when} item={item} />
      ))}
    </div>
  )
}

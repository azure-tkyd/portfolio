import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  right?: React.ReactNode
  className?: string
}

export default function SectionHeading({ eyebrow, title, description, right, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-9 flex flex-wrap items-end justify-between gap-5", className)}>
      <div>
        {eyebrow && (
          <span className="mb-3 inline-flex items-center gap-2.5 font-mono text-[0.74rem] font-medium uppercase tracking-[0.18em] text-primary before:block before:h-px before:w-[22px] before:bg-primary/30">
            {eyebrow}
          </span>
        )}
        <h2 className="text-[clamp(1.7rem,1.2rem+1.8vw,2.5rem)]">{title}</h2>
        {description && <p className="mt-2 max-w-[42ch] text-muted-foreground">{description}</p>}
      </div>
      {right && <div>{right}</div>}
    </div>
  )
}

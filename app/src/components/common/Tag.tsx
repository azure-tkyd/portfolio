import { cn } from "@/lib/utils"

interface TagProps {
  children: React.ReactNode
  accent?: boolean
  className?: string
}

export default function Tag({ children, accent, className }: TagProps) {
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.74rem] font-medium",
      accent
        ? "border-primary/30 bg-primary/10 text-primary"
        : "border-border bg-card text-muted-foreground",
      className
    )}>
      {accent && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
      {children}
    </span>
  )
}

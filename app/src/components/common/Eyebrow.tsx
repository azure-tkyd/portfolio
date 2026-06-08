import { cn } from "@/lib/utils"

interface EyebrowProps {
  children: React.ReactNode
  className?: string
}

export default function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span className={cn(
      "inline-flex items-center gap-2.5 font-mono text-[0.74rem] font-medium uppercase tracking-[0.18em] text-primary",
      "before:block before:h-px before:w-[22px] before:bg-primary/30",
      className
    )}>
      {children}
    </span>
  )
}

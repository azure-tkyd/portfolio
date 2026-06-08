import { cn } from "@/lib/utils"

interface ImagePlaceholderProps {
  ratio?: string
  label?: string
  className?: string
}

export default function ImagePlaceholder({ ratio = "4/5", label, className }: ImagePlaceholderProps) {
  return (
    <div
      className={cn("relative grid place-items-center overflow-hidden rounded-[var(--radius-lg)] border border-border", className)}
      style={{
        aspectRatio: ratio,
        background: "repeating-linear-gradient(135deg, color-mix(in srgb, currentColor 5%, transparent) 0 9px, transparent 9px 18px), hsl(var(--secondary))",
      }}
    >
      <code className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[0.72rem] tracking-[0.04em] text-muted-foreground">
        {label ?? `portrait / ${ratio}`}
      </code>
    </div>
  )
}

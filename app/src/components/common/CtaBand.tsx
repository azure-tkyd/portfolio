import { Link } from "react-router"
import Eyebrow from "./Eyebrow"
import { Button } from "@/components/ui/button"
import { contactEmail } from "@/data/site"

interface CtaBandProps {
  eyebrow?: string
  title: string
  description?: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function CtaBand({
  eyebrow = "Contact",
  title,
  description,
  primaryLabel = "メールする",
  primaryTo,
  secondaryLabel,
  secondaryHref,
}: CtaBandProps) {
  return (
    <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-border bg-card p-[clamp(36px,6vw,64px)]">
      <div className="pointer-events-none absolute -right-14 -top-14 h-60 w-60 rounded-full"
        style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.1), transparent 70%)" }} />
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-7">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-3 text-[clamp(1.6rem,1.2rem+1.6vw,2.3rem)] max-w-[18ch]">{title}</h2>
          {description && <p className="mt-2.5 max-w-[40ch] text-muted-foreground">{description}</p>}
        </div>
        <div className="flex flex-wrap gap-3">
          {primaryTo ? (
            <Button asChild><Link to={primaryTo}>{primaryLabel}</Link></Button>
          ) : (
            <Button asChild><a href={`mailto:${contactEmail}`}>{primaryLabel}</a></Button>
          )}
          {secondaryLabel && secondaryHref && (
            <Button variant="outline" asChild>
              <a href={secondaryHref} target="_blank" rel="noopener noreferrer">{secondaryLabel}</a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

import { Link } from "react-router"
import { siteName, siteTagline } from "@/data/site"

export default function Brand() {
  return (
    <Link to="/" aria-label="Home" className="inline-flex items-center gap-2.5 font-display font-extrabold tracking-tight text-[1.02rem]">
      <span className="relative grid h-[30px] w-[30px] place-items-center overflow-hidden rounded-lg bg-foreground font-mono text-[0.84rem] font-medium text-background">
        <span className="absolute inset-0 opacity-50"
          style={{ background: "repeating-linear-gradient(115deg, transparent 0 4px, color-mix(in srgb, #2563eb 55%, transparent) 4px 5px)" }} />
        <span className="relative z-10">rm</span>
      </span>
      <span>
        {siteName}
        <small className="mt-[-2px] block font-mono text-[0.62rem] font-normal tracking-[0.06em] text-muted-foreground">{siteTagline}</small>
      </span>
    </Link>
  )
}

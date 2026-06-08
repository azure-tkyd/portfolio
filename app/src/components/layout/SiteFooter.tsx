import { Link } from "react-router"
import { siteName, navItems, socialLinks } from "@/data/site"

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-[var(--max-w-content)] px-6 pb-9 pt-11">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div>
            <Link to="/" className="mb-3 inline-flex items-center gap-2.5 font-display font-extrabold tracking-tight">
              <span className="relative grid h-[30px] w-[30px] place-items-center overflow-hidden rounded-lg bg-foreground font-mono text-[0.84rem] font-medium text-background">
                <span className="absolute inset-0 opacity-50"
                  style={{ background: "repeating-linear-gradient(115deg, transparent 0 4px, color-mix(in srgb, #2563eb 55%, transparent) 4px 5px)" }} />
                <span className="relative z-10">rm</span>
              </span>
              <span>{siteName}</span>
            </Link>
            <p className="max-w-[34ch] text-[0.92rem] text-muted-foreground">
              フロントエンドエンジニアの制作物と技術ノート。
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href}
                className="rounded-[9px] border border-border bg-card px-3.5 py-1.5 font-mono text-[0.8rem] text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground">
                {item.label}
              </Link>
            ))}
            {socialLinks.map((link) => (
              <a key={link.href} href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer"
                className="rounded-[9px] border border-border bg-card px-3.5 py-1.5 font-mono text-[0.8rem] text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-7 flex flex-wrap justify-between gap-4 border-t border-border pt-5 font-mono text-[0.74rem] text-muted-foreground">
          <span>© {new Date().getFullYear()} {siteName}</span>
          <span>Built with React · TypeScript · TailwindCSS</span>
        </div>
      </div>
    </footer>
  )
}

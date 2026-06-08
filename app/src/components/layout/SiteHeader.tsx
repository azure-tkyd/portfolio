import { NavLink } from "react-router"
import Brand from "./Brand"
import ThemeToggle from "./ThemeToggle"
import MobileNav from "./MobileNav"
import { navItems } from "@/data/site"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border backdrop-blur-md"
      style={{ background: "color-mix(in srgb, hsl(var(--background)) 78%, transparent)" }}>
      <div className="mx-auto flex h-[66px] max-w-[var(--max-w-content)] items-center justify-between px-6">
        <Brand />
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === "/"}
              className={({ isActive }) =>
                `relative rounded-[9px] px-3.5 py-2 text-[0.92rem] font-medium transition-colors ${isActive ? "text-foreground after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-4.5 after:-translate-x-1/2 after:rounded-full after:bg-primary" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

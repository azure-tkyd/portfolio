import { NavLink } from "react-router"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { navItems } from "@/data/site"

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden" aria-label="メニュー">
          <Menu className="size-[18px]" />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="pt-16">
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === "/"}
              className={({ isActive }) =>
                `rounded-lg px-3 py-3 text-base font-medium transition-colors ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

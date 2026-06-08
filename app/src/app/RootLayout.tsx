import { Outlet } from "react-router"
import { ThemeProvider } from "next-themes"
import SiteHeader from "@/components/layout/SiteHeader"
import SiteFooter from "@/components/layout/SiteFooter"

export default function RootLayout() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </ThemeProvider>
  )
}

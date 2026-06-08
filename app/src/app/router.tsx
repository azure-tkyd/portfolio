import { createBrowserRouter } from "react-router"
import RootLayout from "./RootLayout"
import HomePage from "@/pages/HomePage"
import AboutPage from "@/pages/AboutPage"
import BlogPage from "@/pages/BlogPage"

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/blog", element: <BlogPage /> },
    ],
  },
])

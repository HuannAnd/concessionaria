import { usePathname } from "next/navigation"
import { useMemo } from "react"

const BASE_PAGES = [
  { path: "/home", alias: "Home" },
  { path: "/models", alias: "Cars & Models" },
  { path: "/contact", alias: "Contact" },
  { path: "/test-drive", alias: "Test Drive" }
]

export default function useAvailablePages() {
  const pathname = usePathname()
  const availablePages = useMemo(() => {
    const result = BASE_PAGES.filter(x => !(pathname.includes(x.path)))
    console.log("Availbable pages: ", result)

    return result
  }, [pathname])

  return availablePages
}
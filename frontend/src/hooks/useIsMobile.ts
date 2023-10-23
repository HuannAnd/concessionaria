import { useEffect, useLayoutEffect, useState } from "react"

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  useLayoutEffect(() => {
    const menageWindowResize = () => setIsMobile(window.innerWidth <= 768)

    window.addEventListener("resize", menageWindowResize)

    return () => {
      window.removeEventListener("resize", menageWindowResize)
    }
  }, [])

  return isMobile
}
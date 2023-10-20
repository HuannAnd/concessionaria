import { useLayoutEffect, useRef } from "react"

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function useAnimationScrollerRef() {
  const ref = useRef<HTMLImageElement>(null!)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: window.innerHeight / 2,
        end: "+=2000px",
        scrub: true
      }
    })

    timeline
      .to(ref.current, { transform: "scale(1.5)" })
  }, [])

  return ref
}
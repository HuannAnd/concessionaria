"use client"

import { useEffect } from 'react'
import Hero from "@/layout/Hero"
import About from "@/layout/About"
import Lenis from '@studio-freight/lenis'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  },
    []
  )


  return (
    <>
      <Hero />
      <About />
    </>
  )
}

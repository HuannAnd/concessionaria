"use client"

import { useEffect, useState } from 'react'

import Hero from "@/layout/Hero"
import About from "@/layout/About"
import Cars from "@/layout/Cars"
import Preloader from '@/layout/Preloader'

import Lenis from '@studio-freight/lenis'

import styles from './page.module.scss'
import { AnimatePresence } from 'framer-motion'

export default function Home() {
  const [isLoading, setLoad] = useState(true)
  const [lenis] = useState(new Lenis())
  useEffect(() => {
    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  },
    []
  )

  useEffect(() => {
    setTimeout(() => {
      document.body.style.cursor = "default";
      lenis.scrollTo(0, { immediate: true, })
      setLoad(false)
    }, 1000)

    return () => {
      lenis.scrollTo(0, { immediate: true, })
      document.body.style.cursor = "wait";
      setLoad(true)
    }

  }, [])


  return (
    <main className={styles.home}>
      <AnimatePresence mode='wait'>
        {
          isLoading && <Preloader />
        }
      </AnimatePresence>
      <Hero />
      <About />
      <Cars />
    </main>
  )
}

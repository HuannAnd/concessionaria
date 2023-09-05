"use client"

import { useEffect, useState } from 'react'

import Hero from "@/layout/Hero"
import About from "@/layout/About"
import Cars from "@/layout/Cars"
import Preloader from '@/layout/Preloader'
import Executive from '@/layout/Executive'
import Large from '@/layout/Large'

import Lenis from '@studio-freight/lenis'

import styles from './page.module.scss'
import { AnimatePresence } from 'framer-motion'
import useLenisScroll from '@/hooks/useLenisScroll'
import AppDemo from '@/layout/AppDemo'

export default function Home() {
  const [isLoading, setLoad] = useState(true)
  const lenis = useLenisScroll()

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

  useEffect(() => {
    window.addEventListener("resize", () => {
      lenis.resize()
    })
  }, [])


  return (
    <>
      <AnimatePresence mode='wait'>
        {
          isLoading && <Preloader />
        }
      </AnimatePresence>
      <Hero />
      <div className={styles.recovery}>
        <div className={styles.right}></div>
      </div>
      <About />
      <Cars />
      <Executive />
      <Large />
      <AppDemo />
      <div className={styles.grayBar} />
      <AppDemo />
    </>
  )
}
"use client"

import { useEffect, useState } from 'react'

import Hero from "@/layout/Hero"
import About from "@/layout/About"
import Cars from "@/layout/Cars"
import Preloader from '@/layout/Preloader'
import Executive from '@/layout/Executive'
import Large from '@/layout/Large'


import styles from './page.module.scss'
import { AnimatePresence } from 'framer-motion'
import useLenisScroll from '@/hooks/useLenisScroll'
import AppDemo from '@/layout/AppDemo'
import useSetLoad from '@/hooks/useSetLoading'

export default function Home() {
  const lenis = useLenisScroll()
  useEffect(() => {
    window.addEventListener("resize", () => {
      lenis.resize()
    })
  }, [])


  return (
    <>
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
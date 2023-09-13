"use client"

import Hero from "@/layout/Hero"
import About from "@/layout/About"
import Cars from "@/layout/Cars"
import Executive from '@/layout/Executive'
import Large from '@/layout/Large'
import AppDemo from '@/layout/AppDemo'

import styles from './page.module.scss'

export default function Home() {
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
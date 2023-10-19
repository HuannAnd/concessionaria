'use client';

import { useEffect, useState } from 'react'

import styles from './NavbarCars.module.scss'

import { motion } from 'framer-motion'

import useCarOnVision from './useCarOnVision';

interface NavbarCarDisplayProps { }

export default function NavbarCars({ }: NavbarCarDisplayProps) {
  const [model, setModel] = useState<string | null>()
  
  useEffect(() => {
    function manageScrolling() {
      const sectionOnVision = document.querySelector("section[data-scroll-is-visible='true']") as HTMLDivElement

      setModel(sectionOnVision ? sectionOnVision?.dataset.model : null)
    }

    window.addEventListener("scroll", manageScrolling)

    return () => {
      window.removeEventListener("scroll", manageScrolling)
    }
  }, [])

  return (
    <nav className={styles.NavbarCarDisplay} data-has-car-on-vision={model ? true : false}>
      <div className={styles.content}>
        <p className={styles.model}>{model}</p>
        <a className={styles.navLink}>Buy</a>
        <a className={styles.navLink}>Test Drive</a>
        <img className={styles.make} src="./nav-brand.png" alt="Brand logo" />
      </div>
    </nav>
  )
}
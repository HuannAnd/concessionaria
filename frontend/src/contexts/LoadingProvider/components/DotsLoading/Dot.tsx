"use client"

import { motion, useAnimate, usePresence, useUnmountEffect } from "framer-motion"
import { useEffect, useRef } from "react"

import styles from './style.module.scss'

import { gsap, Power3 } from "gsap"
import useisLoading from "../../useIsLoading"

interface DotProps {
  index: number
}
export default function Dot({ index }: DotProps) {
  const ref = useRef<any>()
  const isLoading = useisLoading()
  const [_, safeToRemove] = usePresence()

  useEffect(() => {
    if (!isLoading) {
      gsap.from(ref.current, {
        opacity: 1,
      })
      gsap.to(ref.current, {
        opacity: 0,
        duration: 1,
        ease: Power3.easeInOut
      })

      safeToRemove?.()
      return
    }

    gsap.to(ref.current, {
      opacity: 1,
      duration: 1,
      repeat: Infinity,
      delay: index * .1,
      ease: Power3.easeInOut
    })

    return () => {
      gsap.to(ref.current, { opacity: 0 })
    }
  }, [isLoading])

  return (
    <motion.span
      className={styles.dot}
      initial={{ scale: 1, opacity: 0 }}
      exit={{ scale: 0 }}
      ref={ref}
    >.</motion.span>
  )
}
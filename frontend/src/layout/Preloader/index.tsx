'use client';
import { motion, useTime, useTransform } from "framer-motion";

import styles from './style.module.scss'

import { slideUp } from './anim'

interface PreloaderProps {
  amount?: number
}

export default function Preloader({ amount = 3 }: PreloaderProps) {
  const time = useTime()
  const color = useTransform(
    time,
    [0, 1000],
    ["#ff0000", "#fff"],
    { clamp: false }
  )

  return (
    <motion.div
      variants={slideUp}
      transition={{ duration: .8, ease: [0.76, 0, 0.24, 1] }}
      initial="closed"
      exit="open"
      className={styles.Preloader}
    >
      <h1 className={styles.textAnimated}>
        {Array.from({ length: amount }, (_, i) => <motion.span transition={{ delay: (.3 * i) }} key={`loadDot_${i}`} style={{ color }}>.</motion.span>)}
      </h1>
    </motion.div>
  )
}
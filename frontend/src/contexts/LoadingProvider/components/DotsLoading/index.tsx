'use client';

import { motion, usePresence } from "framer-motion";

import BaseLoadingProps from "../BaseLoadingProps";

import styles from './style.module.scss'
import { useEffect, useRef } from "react";

interface DotsLoadingProps
  extends BaseLoadingProps { amount: number }

export default function DotsLoading({ amount = 3, controls }: DotsLoadingProps) {
  const ref = useRef(null)
  const [isPresent, safeToRemove] = usePresence()

  useEffect(() => {
    if (!isPresent) {
      gsap.to(ref.current, {
        opacity: 0,
        onComplete: () => safeToRemove()
      })
    }

  }, [isPresent, safeToRemove])

  return (
    <motion.div key="DotsLoading" className={styles.DotsLoading}>
      <h1 className={styles.centralize}>
        {Array.from({ length: amount }, (_, i) => <motion.span key={`dot_${i}`} className={styles.dot} initial={{opacity: 0, y: "100%"}} animate={controls} custom={i}>.</motion.span>)}
      </h1>
    </motion.div>
  )
}
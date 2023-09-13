'use client';

import { AnimationControls, motion } from "framer-motion";

import styles from './style.module.scss'

interface PreloaderProps {
  amount?: number,
  pathname: string,
  controls: AnimationControls
}

export default function Preloader({ amount = 3, controls }: PreloaderProps) {
  return (
    <motion.div
      className={styles.slideIn}
      initial={{ scaleY: 1 }}
      animate={controls}
      exit={{ scaleY: 1 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    />
  )
}
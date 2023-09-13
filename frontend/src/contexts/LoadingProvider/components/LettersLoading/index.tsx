'use client';

import { motion } from 'framer-motion'

import styles from './style.module.scss'
import BaseLoadingProps from '../BaseLoadingProps';

interface LettersLoadingProps
  extends BaseLoadingProps {
  innerText: string
}

const variants = {
  slideIn: {
    y: "0%",
    opacity: 1
  },
  slideOut: {
    y: "-100%",
    opacity: 0
  }
}

export default function LettersLoading({ innerText, controls }: LettersLoadingProps) {
  return (
    <div className={styles.LettersLoading} key="LettersLoading">
      <h1>
        {innerText.split("")
          .map((x, i) => <span className={styles.spanText}><motion.span className={styles.spanInnerText} custom={i} animate={controls}>{x}</motion.span></span>)
        }
      </h1>
    </div>
  )
}
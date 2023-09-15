'use client';

import { motion } from 'framer-motion'

import styles from './style.module.scss'

import { LoadingProps } from '../type'
import { useEffect, useState } from 'react';


export default function LettersLoading({ controls, innerText }: LoadingProps<"letters">) {
  

  useEffect(() => {
    console.log("LettersLoading fired inside useEffect")
  }, [controls])

  return (
    <div className={styles.LettersLoading} key="LettersLoading">
      <h1>
        {innerText.split("")
          .map((x, i) => <span key={`letter_${i}`} className={styles.spanText}><motion.span key={`letterSpan_${i}`} animate={controls} className={styles.spanInnerText} custom={i}>{x}</motion.span></span>)
        }
      </h1>
    </div>
  )
}
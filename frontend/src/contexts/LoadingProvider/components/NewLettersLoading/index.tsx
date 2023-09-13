'use client';

import { motion, usePresence } from 'framer-motion';

import styles from './style.module.scss'
import { useEffect, useRef } from 'react';

interface NewLettersLoadingProps {
  innerText: string
}

function useIsLoading(): boolean { return true }

export default function NewLettersLoading({ innerText }: NewLettersLoadingProps) {
  const ref = useRef<any>()
  const [isPresent, safeToRemove] = usePresence()

  useEffect(() => {
    gsap.to(ref.current, {


    })


    if (!isPresent) {
      gsap.to(ref.current, {
        y: "-100%",
        opacity: 0,
        onComplete: () => safeToRemove?.()
      }
      )
    }
  }, [isPresent, safeToRemove])

  return (
    <div className={styles.LettersLoading} key="LettersLoading">
      <h1>
        {innerText.split("")
          .map((x, i) => <span className={styles.spanText}><motion.span className={styles.spanInnerText} ref={ref}>{x}</motion.span></span>)
        }
      </h1>
    </div>
  )
}
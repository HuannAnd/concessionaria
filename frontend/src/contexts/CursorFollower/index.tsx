'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';

import styles from './style.module.scss'

import { MutableRefObject, useEffect, useRef } from 'react';

interface CursorFollowerProps {

}

export default function CursorFollower({ }: CursorFollowerProps) {
  const ref = useRef<HTMLDivElement>(null!)
  const [x, y] = useXandYValues(ref)

  return (
    <motion.div ref={ref} className={styles.CursorFollower} style={{ x, y }}></motion.div>
  )
}

const springConfig = {
  stiffness: 150,
  damping: 15,
  mass: .1
}
function useXandYValues(ref: MutableRefObject<HTMLDivElement>) {
  const left = useMotionValue(0)
  const top = useMotionValue(0)

  const x = useSpring(left, springConfig)
  const y = useSpring(top, springConfig)

  useEffect(() => {
    function handleMouseMove(e: PointerEvent) {
      const followerWidth = ref.current.offsetWidth
      const followerHeight = ref.current.offsetHeight

      const newLeft = e.clientX - followerWidth / 2;
      const newTop = e.clientY - followerHeight / 2;

      left.set(newLeft)
      top.set(newTop)
    }

    window.addEventListener("pointermove", handleMouseMove)

    return () => {
      window.removeEventListener("pointermove", handleMouseMove)
    }
  },
    []
  )

  return [x, y]
}
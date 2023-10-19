'use client';

import { useEffect, useState } from 'react';

import styles from './style.module.scss'

interface GreenLineProps
  extends React.PropsWithChildren { }



const DIMENSIONAL_RATIO = .8
const MIDDLE_ELEMENT_HEIGHT_IN_PX = 550

const pattern = [
  { left: "0%", height: `${MIDDLE_ELEMENT_HEIGHT_IN_PX * DIMENSIONAL_RATIO}px`, top: "50%", filter: "blur(3px)", zIndex: 1, opacity: .9 },
  { left: "50%", height: `${MIDDLE_ELEMENT_HEIGHT_IN_PX}px`, top: "50%", filter: "blur(0px)", zIndex: 2, opacity: 1 },
  { left: "160%", height: `${MIDDLE_ELEMENT_HEIGHT_IN_PX / DIMENSIONAL_RATIO}px`, top: "50%", filter: "blur(5px)", zIndex: 3, opacity: 1 },
]

const cars = [
  "/cars/yellow.png",
  "/cars/red.png",
  "/cars/marine.png",
  "/cars/pearlwhite.png"
]

const QUICK_INTERVAL_TIME_IN_MS = 3000
let TRANISTION_DURATION_IN_MS = 500

export default function GreenLine({ }: GreenLineProps) {
  const [index, setIndex] = useState(0)

  if (!index) {
    TRANISTION_DURATION_IN_MS = 0
  } else {
    TRANISTION_DURATION_IN_MS = 3000
  }
  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (index + 1) % pattern.length
      setIndex(newIndex)
    }, QUICK_INTERVAL_TIME_IN_MS)

    return () => {
      clearInterval(interval)
    }
  }, [index])

  return (
    <div className={styles.GreenLine}>
      {/* <BlueEntity index={index} /> */}
      {Array.from({ length: pattern.length }, (_, i) => <BlueEntity index={(index + i) % pattern.length} src={cars[i]} />)}
      {/* <div className={styles.BlueEntity} style={{ left: pattern[1].x, top: pattern[1].y, scale: pattern[1].scale, filter: pattern[1].blur }}></div>
      <div className={styles.BlueEntity} style={{ left: pattern[2].x, top: pattern[2].y, scale: pattern[2].scale, filter: pattern[2].blur }}></div> */}
    </div>
  )
}

interface BlueEntityProps
  extends React.ImgHTMLAttributes<HTMLImageElement> { index: number }

function BlueEntity({ index, ...rest }: BlueEntityProps) {
  return (
    <img
      // src={cars[index]}
      className={styles.BlueEntity}
      style={pattern[index]}
      {...rest}
    />
  )
}
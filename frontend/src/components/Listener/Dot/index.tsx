'use client';

import { motion, useTime, useTransform } from 'framer-motion';

import styles from './style.module.scss'

import { clockerCircle } from './anim'

import useCurrentDotNum from '../useCurrentDotNum';
import useDurationToEachDot from '../useDurationToEachDot';

interface DotProps
  extends React.SVGAttributes<SVGSVGElement> {
  withLabel?: boolean,
  whenInitCoutdown?: () => void,
  order: number,
  radius?: number,
  dotW?: number
}

export default function Dot({ className, withLabel = false, order, dotW = 50, radius = 30, width = 100, ...rest }: DotProps) {
  const currentDotValue = useCurrentDotNum()
  const itsTime = order === currentDotValue;
  const fill = withLabel ?
    (itsTime
      ? "rgba(255,255,255,.3)"
      : "transparent")
    : (itsTime
      ? "rgba(255,255,255,.8)"
      : "rgba(255,255,255,.3)")

  const durationInSec = useDurationToEachDot() / 1000

  return (
    <div className={styles.carouselOption}>
      <svg {...rest} height={100} width={100} className={styles.container}>
        <motion.circle
          animate={itsTime ? "clocking" : "disabled"}
          transition={{ duration: 10 }}
          initial="disabled"
          custom={durationInSec}
          variants={clockerCircle}
          cx={50}
          cy={50}
          r={40}
          stroke="white"
          strokeDasharray="0 1"
          stroke-width="3"
          fill="transparent"
        />
        <circle
          cx={50}
          cy={50}
          r={30}
          stroke="white"
          strokeDasharray="0 1"
          stroke-width="3"
          fill={fill}
        />
        Sorry, your browser does not support inline SVG.
      </svg>
      {withLabel && <h5 className={styles.label}>0{order + 1}</h5>}
    </div>
  )
}
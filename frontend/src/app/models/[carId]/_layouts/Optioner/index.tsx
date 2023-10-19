'use client';

import { Dispatch, SetStateAction, useState } from 'react';

import Link from 'next/link'

import styles from './style.module.scss'

import { AnimatePresence, motion } from 'framer-motion';

interface OptionerProps {
  color: string
}

interface ArrowProps {
  isPressed: boolean
  setIsPressed: Dispatch<SetStateAction<boolean>>
}

const colors = [
  "gold",
  "red",
  "marine",
  "pearlwhite"
]

function Arrow({ setIsPressed, isPressed }: ArrowProps) {
  return (
    <motion.svg className={styles.arrow} onClick={() => setIsPressed(!isPressed)} animate={isPressed ? { rotateZ: "180deg" } : { rotateZ: "0deg" }} width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path d="M0 14.2124L14.2124 0L28.4248 14.2124L23.0951 19.542L14.2124 10.6593L5.32964 19.542L0 14.2124Z" fill={isPressed ? "#aaa" : "#fff"} />
    </motion.svg>
  )
}

export default function Optioner({ color }: OptionerProps) {
  const [isPressed, setIsPressed] = useState(false)

  return (  
    <motion.footer
      onMouseEnter={() => setIsPressed(true)}
      onMouseLeave={() => setIsPressed(false)}
      className={styles.Optioner}
    >
      <Arrow isPressed={isPressed} setIsPressed={setIsPressed} />
      <div
        className={styles.moduler}
        data-pressed={isPressed}
      >
        <motion.div className={styles.row3} style={{ height: "auto" }}>
          <ul className={`${styles.col4} ${styles.listener}`}>
            <li className={styles.layer} style={{ opacity: 1 }} data-activated="true"><span>Color</span></li>
            <li className={styles.layer}><span>Specs</span></li>
            <li className={styles.layer}><span>Seal</span></li>
            <li className={styles.layer}><span>Test Drive</span></li>
          </ul>
          <ul className={`${styles.col4} ${styles.colors}`}>
            {colors.map(x => (
              <Link
                key={`color_${x}`}
                href={`?${new URLSearchParams({
                  color: x
                })}`}
                data-choosed={color.toLowerCase() === x}
                className={styles[x]}
              ></Link>
            ))}
          </ul>
          <ul className={`${styles.col4} ${styles.prices}`}>
            <li className={styles.between}>
              <span className={styles.price}>$102</span>
              <small className={styles.colorName}>Gold</small>
            </li>
            <li className={styles.between}>
              <span className={styles.price}>$75</span>
              <small className={styles.colorName}>Red</small>
            </li>
            <li className={styles.between}>
              <span className={styles.price}>$200</span>
              <small className={styles.colorName}>Marine</small>
            </li>
            <li className={styles.between}>
              <span className={styles.price}>$50</span>
              <small className={styles.colorName}>Pearl White</small>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.footer >
  )
}
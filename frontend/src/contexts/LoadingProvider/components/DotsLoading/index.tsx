'use client';

import { motion } from "framer-motion";

import { DotsLoadingProps } from '../type'

import styles from './style.module.scss'


export default function DotsLoading({ amount = 3, controls }: DotsLoadingProps) {
  return (
    <motion.div key="DotsLoading" className={styles.DotsLoading}>
      <h1 className={styles.centralize}>
        {Array.from({ length: amount }, (_, i) => <motion.span className={styles.dot} animate={controls} custom={i}>.</motion.span>)}
      </h1>
    </motion.div>
  )
}
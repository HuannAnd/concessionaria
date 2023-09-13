'use client';

import { motion } from "framer-motion";

import styles from './style.module.scss'
import BaseLoadingProps from "../BaseLoadingProps";

interface CurtainLoadingProps
  extends BaseLoadingProps { }

export default function CurtainLoading({ controls }: CurtainLoadingProps) {
  return (
    <motion.div
      key="CurtainLoading"
      className={styles.slideIn}
      initial={{ scaleY: 1 }}
      animate={controls}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    />
  )
}
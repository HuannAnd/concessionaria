'use client';

import { motion } from "framer-motion";

import styles from './style.module.scss'

import { CurtainLoadingProps } from "../type";


export default function CurtainLoading({ controls }: CurtainLoadingProps) {
  return (
    <motion.div
      className={styles.slideIn}
      animate={controls}
    />
  )
}
'use client';

import { useRef } from 'react';

import styles from './style.module.scss'

import { slideUp } from "./anim";
import { motion, useInView } from "framer-motion";

import cn from '@/utils/cn';


interface LettersProps
  extends React.HTMLAttributes<HTMLParagraphElement> { }

export default function Letters({ children, className, ...rest }: LettersProps) {
  const ref = useRef(null!)
  const text = children?.toString()!

  const isInVIew = useInView(ref, { once: true })

  return (
    <motion.p className={cn(styles.BaseLetters, className)} ref={ref}>
      {text.split(" ").map(((word, index) => <span className={styles.spanLine}><motion.span className={styles.spanLineInner} variants={slideUp} initial="initial" custom={index} animate={isInVIew ? "appear" : "initial"} transition={{ duration: 1 }} key={`word_${index}`}>{word}</motion.span></span>))}
    </motion.p>
  )
}
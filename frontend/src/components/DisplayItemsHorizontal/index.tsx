'use client';

import styles from './style.module.scss'

import { useRef } from 'react';

interface DisplayItemsHorizontalProps {
  // items: T
  // children: React.ReactNode
}

export default function DisplayItemsHorizontal({ }: DisplayItemsHorizontalProps) {
  const item1 = useRef<HTMLDivElement>(null!)
  const item2 = useRef<HTMLDivElement>(null!)
  const item3 = useRef<HTMLDivElement>(null!)
  const item4 = useRef<HTMLDivElement>(null!)
  const item5 = useRef<HTMLDivElement>(null!)
  const item6 = useRef<HTMLDivElement>(null!)

  const maxScaleY = 2;
  let xClient = 0;
  let requestAnimationFrameId: number | null = null;

  function manageMouseMove(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    xClient = e.clientX;

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = requestAnimationFrame(animate)
    }
  }

  function lerpingXAxis(x: number, width: number) {
    return 1 + maxScaleY * .01 * window.innerWidth / Math.abs(xClient - x - width / 2)
  }

  function animate() {
    const x1 = (item1.current)!.offsetLeft;
    const x2 = (item2.current)!.offsetLeft;
    const x3 = (item3.current)!.offsetLeft;
    const x4 = (item4.current)!.offsetLeft;
    const x5 = (item5.current)!.offsetLeft;
    const x6 = (item6.current)!.offsetLeft;

    const w1 = (item1.current)!.offsetWidth;
    const w2 = (item2.current)!.offsetWidth;
    const w3 = (item3.current)!.offsetWidth;
    const w4 = (item1.current)!.offsetWidth;
    const w5 = (item2.current)!.offsetWidth;
    const w6 = (item3.current)!.offsetWidth;

    (item1.current!).style.transform = `scaleY(${Math.min(lerpingXAxis(x1, w1), 1.5)})`;
    (item2.current!).style.transform = `scaleY(${Math.min(lerpingXAxis(x2, w2), 1.5)})`;
    (item3.current!).style.transform = `scaleY(${Math.min(lerpingXAxis(x3, w3), 1.5)})`;
    (item4.current!).style.transform = `scaleY(${Math.min(lerpingXAxis(x4, w4), 1.5)})`;
    (item5.current!).style.transform = `scaleY(${Math.min(lerpingXAxis(x5, w5), 1.5)})`;
    (item6.current!).style.transform = `scaleY(${Math.min(lerpingXAxis(x6, w6), 1.5)})`;

    requestAnimationFrame(animate)
  }

  return (
    <article onMouseMove={manageMouseMove} className={styles.displayItemsHorizontal}>
      <div ref={item1} className={styles.item}></div>
      <div ref={item2} className={styles.item}></div>
      <div ref={item3} className={styles.item}></div>
      <div ref={item4} className={styles.item}></div>
      <div ref={item5} className={styles.item}></div>
      <div ref={item6} className={styles.item}></div>
    </article>
  )
}

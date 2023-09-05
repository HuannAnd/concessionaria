'use client';

import styles from './style.module.scss'

import { useRef, useEffect } from 'react';

interface DisplayItemsHorizontalProps {
  children: React.ReactNode,
  maxScaleY?: number,

}

export default function DisplayItemsHorizontal({ children, maxScaleY = 2 }: DisplayItemsHorizontalProps) {
  const ref = useRef<HTMLDivElement>(null!)
  let xClient = 0;
  let requestAnimationFrameId: any = null;

  useEffect(() => {
    function manageMouseMove(e: React.MouseEvent<HTMLElement, MouseEvent>) {
      xClient = e.clientX;

      if (!requestAnimationFrameId) {
        requestAnimationFrameId = requestAnimationFrame(animate)
      }
    }

    const manageMouseLeave = () => xClient = 0

    function lerpingXAxis(x: number, width: number) {
      return 1 + maxScaleY * .01 * window.innerWidth / Math.abs(xClient - x - width / 2)
    }
    function animate() {
      for (let i = 0; i < ref.current.children.length; i++) {
        const element = ref.current.children.item(i) as HTMLDivElement
        const x = element.offsetLeft
        const width = element.offsetWidth      

        console.log("Animating");
        
        element.style.transform = `scaleY(${Math.min(lerpingXAxis(x, width), maxScaleY)})`
      }

      requestAnimationFrame(animate)
    }

    ref.current.addEventListener("mousemove", manageMouseMove as any)
    ref.current.addEventListener("mouseleave", () => cancelAnimationFrame(requestAnimationFrameId))
    

    return () => {
      cancelAnimationFrame(requestAnimationFrameId)
    }
  },
    []
  )


  return (
    <article ref={ref} className={styles.displayItemsHorizontal}>
      {children}
    </article>
  )
}

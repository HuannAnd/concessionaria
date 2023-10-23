'use client';

import styles from './style.module.scss'

import { useRef, useEffect } from 'react';

import cn from '@/utils/cn';

import useIsMobile from '@/hooks/useIsMobile';

interface DisplayItemsHorizontalProps
  extends React.HTMLAttributes<HTMLDivElement> {
  maxScaleY?: number,

}

export default function DisplayItemsHorizontal({ children, className, maxScaleY = 2, ...rest }: DisplayItemsHorizontalProps) {
  const ref = useRef<HTMLDivElement>(null!)
  let xClient = 0;
  let requestAnimationFrameId: any = null;
  const isMobile = useIsMobile()

  useEffect(() => {
    function manageMouseMove(e: React.MouseEvent<HTMLElement, MouseEvent>) {
      xClient = e.clientX;

      if(isMobile) return requestAnimationFrameId = null

      if (!requestAnimationFrameId) {
        requestAnimationFrameId = requestAnimationFrame(animate)
      }
    }

    const manageMouseLeave = () => {
      xClient = 0
      cancelAnimationFrame(requestAnimationFrameId)
      requestAnimationFrameId = null
    }

    function lerpingXAxis(x: number, width: number) {
      return 1 + maxScaleY * .01 * window.innerWidth / Math.abs(xClient - x - width / 2)
    }
    function animate() {
      for (let i = 0; i < ref.current.children.length; i++) {
        const element = ref.current.children.item(i) as HTMLDivElement
        const x = element.offsetLeft
        const width = element.offsetWidth

        element.style.transform = `scaleY(${Math.min(lerpingXAxis(x, width), maxScaleY)})`
      }

      if(isMobile) return requestAnimationFrameId = null
      if (!requestAnimationFrameId) return

      requestAnimationFrame(animate)
    }

    ref.current.addEventListener("mousemove", manageMouseMove as any)
    ref.current.addEventListener("mouseleave", manageMouseLeave)

    const cachedRef = ref
    return () => {
      cancelAnimationFrame(requestAnimationFrameId)

     cachedRef.current?.removeEventListener("mousemove", manageMouseMove as any)
     cachedRef.current?.removeEventListener("mouseleave", manageMouseLeave)
    }
  },
    []
  )


  return (
    <article ref={ref} className={cn(styles.BaseDisplayItemsHorizontal, className)} {...rest}>
      {children}
    </article>
  )
}

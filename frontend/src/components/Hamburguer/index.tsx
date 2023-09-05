'use client';

import { ForwardRefExoticComponent, forwardRef, useLayoutEffect, useRef } from 'react';
import styles from './style.module.scss'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface HamburguerProps { }

export default function Hamburguer({ }: HamburguerProps) {
  const ref = useRef<HTMLButtonElement>(null!)
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(ref.current, {
      scrollTrigger: {
        start: 10,
        end: window.innerHeight,
        trigger: document.documentElement,
        markers: false,
        onLeave: () => { gsap.to(ref.current, { scale: 1, duration: .25, ease: "power1.out" }) },
        onLeaveBack: () => { gsap.to(ref.current, { scale: 0, duration: .25, ease: "power1.out" }) }
      }
    })
  })

  return (
    <button ref={ref} className={styles.hamburguer}>
      <svg className={styles.icon} width="37" height="25" viewBox="0 0 37 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.9354 10.4584H2.06458C0.993381 10.4584 0.125 11.3267 0.125 12.3979V12.6021C0.125 13.6733 0.993381 14.5417 2.06458 14.5417H34.9354C36.0066 14.5417 36.875 13.6733 36.875 12.6021V12.3979C36.875 11.3267 36.0066 10.4584 34.9354 10.4584Z" fill="white" />
        <path d="M34.9354 20.6667H2.06458C0.993381 20.6667 0.125 21.5351 0.125 22.6063V22.8104C0.125 23.8816 0.993381 24.75 2.06458 24.75H34.9354C36.0066 24.75 36.875 23.8816 36.875 22.8104V22.6063C36.875 21.5351 36.0066 20.6667 34.9354 20.6667Z" fill="white" />
        <path d="M34.9354 0.249992H2.06458C0.993381 0.249992 0.125 1.11837 0.125 2.18958V2.39374C0.125 3.46495 0.993381 4.33333 2.06458 4.33333H34.9354C36.0066 4.33333 36.875 3.46495 36.875 2.39374V2.18958C36.875 1.11837 36.0066 0.249992 34.9354 0.249992Z" fill="white" />
      </svg>
    </button>
  )
}


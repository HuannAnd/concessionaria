"use client";

// import Image from 'next/image'

import Hamburguer from '@/components/Hamburguer';
import styles from './style.module.scss'

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import useLenisScroll from '@/hooks/useLenisScroll';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const links = [
  { title: "Home", href: "#" },
  { title: "About", href: "#about" },
  { title: "Cars", href: "#cars" },
  { title: "Works", href: "#works" },
  { title: "FAQ", href: "#faq" }
]

interface NavigationLinksProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> { }

export default function Navbar() {
  const navbar = useRef<HTMLDivElement>(null!)
  const lenis = useLenisScroll()
  const pathname = usePathname()

  console.log("lenis scroll value, into Navbar: ", lenis);

  useLayoutEffect(() => {
    if (pathname === "/") {
      console.log("Gsap scroll firing")
      gsap.registerPlugin(ScrollTrigger)
      gsap.to(navbar.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          start: 0,
          end: window.innerHeight,
          markers: true,
          onLeaveBack: () => { gsap.to(navbar.current, { y: "0%" }) },
          onEnter: () => { gsap.to(navbar.current, { y: "-75%", delay: 1 }) }

        }
      })
    }

    return () => {
      
    }
  },
    [pathname]
  )

  //linear-gradient(0deg, rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 1) 100%)
  return (
    <motion.nav ref={navbar} whileHover={{ y: "0%" }} initial={{ y: "-75%" }} className={styles.Navbar} transition={{ duration: .3, ease: [0.76, 0, 0.24, 1] }}>
      <div>
        <div className={styles.brand} aria-label='Brand'>
          <img
            src="/nav-brand.png"
            alt='branding'
          />
        </div>
        <ul className={styles.navigation}>
          {links.map((x) => <li onClick={() => lenis.scrollTo(x.href, { duration: 1 })} className={styles.link}><a href="#" >{x.title}</a></li>)}
        </ul>
      </div>
    </motion.nav>
  )
}
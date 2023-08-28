"use client";

// import Image from 'next/image'

import Hamburguer from '@/components/Hamburguer';
import styles from './style.module.scss'

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const links = [
  { title: "Home", href: "#" },
  { title: "About", href: "#About" },
  { title: "Cars", href: "#Cars" },
  { title: "Works", href: "#Works" },
  { title: "FAQ", href: "#FAQ" }
]

interface NavigationLinksProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> { }

export default function Navbar() {
  return (
    <>
      <nav className={styles.Navbar}>
        <div>
          <div className={styles.bradField} aria-label='Brand'>
            <img
              src="/nav-brand.png"
              alt='branding'
            />
          </div>
          <ul className={styles.navigation}>
            {links.map((x) => <li> <a className={styles.link} href="#">{x.title}</a></li>)}
          </ul>
        </div>
      </nav>
    </>
  )
}
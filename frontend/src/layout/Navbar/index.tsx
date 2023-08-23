"use client";

// import Image from 'next/image'

import styles from './style.module.scss'

import "@/utils/mapReactsComponents"

const links = [
  { title: "Home", href: "#" },
  { title: "About", href: "#About" },
  { title: "Cars", href: "#Cars" },
  { title: "Works", href: "#Works" },
  { title: "FAQ", href: "#FAQ" }
]

interface NavigationLinksProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> { }
function NavigationLinks({ children, href }: NavigationLinksProps) {
  return (
    <li className={styles.navigationLink}>
      <a href={href}>{children}</a>
    </li>
  )
}

export default function Navbar() {
  return (
    <nav className={styles.Navbar} id='Navbar'>
      <div>
        <div className={styles.brandContainer} aria-label='Brand'>
          <img
            src="/nav-brand.png"
            alt='branding'
          />
        </div>
        <ul className={styles.navigationContainer}>
          {links.map((x) => <li> <a href="#">{x.title}</a></li>)}

        </ul>
      </div>
    </nav>
  )
}
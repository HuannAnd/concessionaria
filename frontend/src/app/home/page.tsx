import Hero from "./_layouts/Hero"
import About from "./_layouts/About"
import Cars from "./_layouts/Cars"
import Executive from './_layouts/Executive'
import Large from './_layouts/Large'
import AppDemo from './_layouts/AppDemo'

import styles from './page.module.scss'

export default async function Home() {
  return (
    <>
      <Hero />
      <About />
      {/* <Cars /> */}
      <Executive />
      <Large />
      <AppDemo />
      <div className={styles.grayBar} />
      <AppDemo />
    </>
  )
} 
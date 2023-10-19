import styles from './page.module.scss'

import Optioner from './_layouts/Optioner'
import Carousel from './_layouts/Carousel'

import History from '@/components/History'
import GreenLine from './_components/GreenLine'

import { QueriesParams } from './types'

export const cars = {
  gold: "/cars/yellow.png",
  red: "/cars/red.png",
  marine: "/cars/marine.png",
  pearlwhite: "/cars/pearlwhite.png"
}

export default function CarPage({
  searchParams
}: {
  searchParams: { [key in QueriesParams]: string | string[] }
}) {
  const color = (searchParams.color || "gold") as keyof typeof cars

  return (
    <>
      <History />
      <main className={styles.CarPage}>
        {/* <div className={styles.upper}>
          <p className={styles.name}>Sedan x117</p>
          <small className={styles.carBrand}>Mercedes Benz</small>
        </div> */}
        <Carousel />
        {/* <article className={styles.action}>
          <div className={styles.leftRect}>
          </div>
          <div className={styles.rightRect}>
          </div>
          <GreenLine />
          <h2 className={styles.type}>OutBack</h2>
          <p className={styles.price}>$78.812</p>
        </article> */}
        <Optioner color={color} />
      </main>
    </>
  )
}
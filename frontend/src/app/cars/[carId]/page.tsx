import styles from './page.module.scss'

import Optioner from './optioner'
import History from '@/components/History'

const cars = {
  gold: "/cars/yellow.png",
  red: "/cars/red.png",
  marine: "/cars/marine.png",
  pearlwhite: "/cars/pearlwhite.png"
}


export default function CarPage({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] }
}) {
  const color = (searchParams.color || "gold") as keyof typeof cars

  return (
    <>
    <History />
    <main className={styles.CarPage}>
      <div className={styles.upper}>
        <p className={styles.name}>Sedan x117</p>
        <small className={styles.carBrand}>Mercedes Benz</small>
      </div>
      <article>
        <img className={styles.carImage} src={cars[color]} alt="Mercedes Benz Large" />
        <h2 className={styles.type}>OutBack</h2>
        <p className={styles.price}>$78.812</p>
      </article>
      <Optioner color={color} />
    </main>
    </>
  )
}
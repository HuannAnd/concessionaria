import styles from './style.module.scss'

import DisplayItemsHorizontal from '@/components/DisplayItemsHorizontal'

export default function Cars() {
    return (
        <section className={styles.Cars}>
            <div className={styles.centralize}>
                <div className={styles.title}>
                    <h2>MODELS IN CAR EXTRA FEATURES</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium ipsa nam modi! Eaque sed odit similique obcaecati vitae perspiciatis quibusdam qui. Veritatis ab dolorum cupiditate vero sapiente libero omnis?
                    </p>
                </div>
                <div className={styles.options}>
                    <span className={styles.carType}>Executive Car</span>
                    <span className={styles.carType}>Lowriders Car</span>
                    <span className={styles.carType}>Small Car</span>
                    <span className={styles.carType}>Large Car</span>
                </div>
                <DisplayItemsHorizontal maxScaleY={1.2}>
                    <div className={styles.item}>
                        <img className={styles.carImage} src="/cars/1.png" alt="Car image" />
                    </div>
                    <div className={styles.item}>
                        <img className={styles.carImage} src="/cars/2.png" alt="Car image" />
                    </div>
                    <div className={styles.item}>
                        <img className={styles.carImage} src="/cars/3.png" alt="Car image" />
                    </div>
                    <div className={styles.item}>
                        <img className={styles.carImage} src="/cars/4.png" alt="Car image" />
                    </div>
                    <div className={styles.item}>
                        <img className={styles.carImage} src="/cars/5.png" alt="Car image" />
                    </div>
                    <div className={styles.item}>
                        <img className={styles.carImage} src="/cars/6.png" alt="Car image" />
                    </div>
                </DisplayItemsHorizontal>
            </div>

        </section>
    )
}
import styles from './style.module.scss'

import DisplayItemsHorizontal from '@/components/DisplayItemsHorizontal'

export default function Cars() {
    return (
        <section className={styles.container}>
            <div className={styles.centralize}>
                <div className={styles.title}>
                    <h2>MODELS IN CAR EXTRA FEATURES</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium ipsa nam modi! Eaque sed odit similique obcaecati vitae perspiciatis quibusdam qui. Veritatis ab dolorum cupiditate vero sapiente libero omnis?
                    </p>
                </div>
                <div className={styles.carsOptions}>
                    <span>Executive Car</span>
                    <span>Lowriders Car</span>
                    <span>Small Car</span>
                    <span>Large Car</span>
                </div>
                <DisplayItemsHorizontal>
                    
                </DisplayItemsHorizontal>
            </div>

        </section>
    )
}
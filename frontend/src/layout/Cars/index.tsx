import styles from './style.module.scss'

export default function Cars() {
    return (
        <section className={styles.container}>
            <div className={styles.centralize}>
                <div className={styles.title}>
                    <h1>MODELS IN CAR EXTRA FEATURES</h1>
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
                <article></article>
            </div>

        </section>
    )
}
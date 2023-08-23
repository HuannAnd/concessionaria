import styles from './style.module.scss'

export default function About() {
    return (
        <section className={styles.About}>
            <div className={styles.mainContainer}>
                <article className={styles.left}>
                    <div className={styles.recovery}>
                        <h5>Discover</h5>
                        <h5>Discover</h5>
                    </div>
                    <h2>Confortable and Viabiliaty, Here</h2>
                    <div className={styles.content}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium ipsa nam modi! Eaque sed odit similique obcaecati vitae perspiciatis quibusdam qui. Veritatis ab dolorum cupiditate vero sapiente libero omnis?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium ipsa nam modi! Eaque sed odit similique obcaecati vitae perspiciatis.
                        </p>
                    </div>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium </small>
                </article>
                <article className={styles.right}>
                    <div className={styles.recovery}>
                        <h5>Previous</h5>
                        <h5>Next</h5>
                    </div>
                    <img src="" alt="" />
                </article>
            </div>

        </section>
    )
}
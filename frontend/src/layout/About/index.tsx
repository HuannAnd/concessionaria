import { motion } from 'framer-motion'

import { label } from './animation'

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
                        <motion.p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium ipsa nam modi! Eaque sed odit similique obcaecati vitae perspiciatis quibusdam qui. Veritatis ab dolorum cupiditate vero sapiente libero omnis?
                        </motion.p>
                        <motion.p >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium ipsa nam modi! Eaque sed odit similique obcaecati vitae perspiciatis.
                        </motion.p>
                    </div>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium </small>
                    <h1 className={styles.sportsTitle}>Sports</h1>
                </article>
                <article className={styles.right}>
                    <div className={styles.recovery}>
                        <h5>Previous</h5>
                        <h5>Next</h5>
                    </div>
                    <ul className={styles.dotsListener}>
                        <li>
                            <motion.span variants={label} viewport={{ once: true }} initial="desappear" whileInView="appear" >Forza Horizon</motion.span>
                            <button></button>
                        </li>
                        <li>
                            <motion.span variants={label}>Forza Horizon</motion.span>
                            <button></button>
                        </li>
                        <li>
                            <motion.span variants={label}>Forza Horizon</motion.span>
                            <button></button>
                        </li>
                        <li>
                            <motion.span variants={label}>Forza Horizon</motion.span>
                            <button></button>
                        </li>
                    </ul>
                    <img src="" alt="" />
                </article>
            </div>

        </section>
    )
}
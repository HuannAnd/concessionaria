'use client';

import styles from './style.module.scss'

import Cta from '@/components/Cta';
import MackBookMockup from '@/components/Mockups/MacbookMockup'

interface AppDemoProps {

}

export default function AppDemo({ }: AppDemoProps) {
  return (
    <section className={styles.AppDemo}>
      <div className={styles.content}>
        <p className={styles.title}>Desktop & Laptop</p>
        <MackBookMockup />
        <div>
          <small className={styles.info}>Please get a free account on Turma Automóveis <strong>here</strong></small>
          <Cta className={styles.cta}>Sign In</Cta>
        </div>
      </div>
    </section>
  )
}
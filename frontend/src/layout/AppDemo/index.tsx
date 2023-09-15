'use client';

import styles from './style.module.scss'

import Cta from '@/components/Cta';
import MackBookMockup from '@/components/Mockups/MacbookMockup'
import useRedirectWithLoading from '@/hooks/useRedirectWithLoading'

interface AppDemoProps {

}

export default function AppDemo({ }: AppDemoProps) {
  const mountingLoadingTo = useRedirectWithLoading()

  return (
    <section className={styles.AppDemo}>
      <div className={styles.content}>
        <p className={styles.title}>Desktop & Laptop</p>
        <MackBookMockup />
        <div>
          <small className={styles.info}>Please get a free account on Turma Automóveis <strong>here</strong></small>
          <Cta action={() => mountingLoadingTo("/contact", "dots", { amount: 3 })} className={styles.cta}>Sign In</Cta>
        </div>
      </div>
    </section>
  )
}
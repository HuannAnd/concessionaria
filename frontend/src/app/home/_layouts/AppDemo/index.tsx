'use client';

import styles from './style.module.scss'

import Cta from '@/components/Cta';
import MackBookMockup from '@/components/Mockups/MacbookMockup'

import useRedirectWithLoading from '@/hooks/useRedirectWithLoading'

interface AppDemoProps { }

export default function AppDemo({ }: AppDemoProps) {
  const mountingLoadingTo = useRedirectWithLoading()

  return (
    <section id='app' data-section-alias="App" className={styles.AppDemo}>
      <div className={styles.content}>
        <h2 className={styles.title}>Desktop</h2>
        <MackBookMockup />
        <div>
          <small className={styles.info}>Please get a free account on Turma Automóveis <strong>here</strong></small>
          <Cta.Root className={styles.cta}>
            <Cta.HrLine />
            <Cta.InnerText onClick={() => mountingLoadingTo("/contact", "dots", { amount: 3 })}>Contact</Cta.InnerText>
          </Cta.Root>
        </div>
      </div>
    </section>
  )
}
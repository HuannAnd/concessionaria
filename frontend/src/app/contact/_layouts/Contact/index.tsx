"use client";

import usePrepareToView from '@/hooks/useRedirectWithLoading';
import styles from './page.module.scss'

import Cta from '@/components/Cta'
import { useSearchParams } from 'next/navigation';

import Arrow from '@/components/Arrow';

export default function Contact() {
  const searchParams = useSearchParams()
  const name = searchParams.get("name")
  const email = searchParams.get("email")
  const mountLoading = usePrepareToView()

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/send-user', {
      method: 'POST',
      body: formData,
    })

    // Handle response if necessary
    const data = await response.json()
    // ...
  }

  function initRequestedParams() {

  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <legend className={styles.title}>Contact</legend>
      <fieldset>
        <div className={styles.field}>
          <small>.01</small>
          <div>
            <label className={styles.label} htmlFor="name">Name</label>
            <input className={styles.input} required placeholder='John Doe' name='name' type="text" />
          </div>
        </div>
        <div className={styles.field}>
          <small>.02</small>
          <div>
            <label className={styles.label} htmlFor="email">Email</label>
            <input className={styles.input} required placeholder='johndoe@mail.com' name='email' type="email" />
          </div>
        </div>
        <div className={styles.field}>
          <small>.03</small>
          <div>
            <label className={styles.label} htmlFor="phone">Phone</label>
            <input className={styles.input} required placeholder='******' name='phone' type="tel" />
          </div>
        </div>
        <div className={styles.field}>
          <small>.04</small>
          <div className={styles.fullWidth}>
            <label className={styles.label} htmlFor="question">Ask ur Question</label>
            <textarea className={styles.question}></textarea>
          </div>
        </div>
      </fieldset>
      <footer className={styles.bottom}>
        <Cta className={styles.cta} action={() => mountLoading("/", "dots", { amount: 3 })}>Go home</Cta>
        <button className={styles.submit}>
          {/* Confirm */}
          <Arrow className={styles.arrow} />
        </button>
      </footer>
    </form>
  )
}
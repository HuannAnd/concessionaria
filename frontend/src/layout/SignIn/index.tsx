"use client";

import usePrepareToView from '@/hooks/useRedirectWithLoading';
import styles from './page.module.scss'

import Cta from '@/components/Cta'

export default function SignIn() {
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

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <legend className={styles.title}>Sign in</legend>
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
            <label className={styles.label} htmlFor="name">Email</label>
            <input className={styles.input} required placeholder='johndoe@mail.com' name='name' type="email" />
          </div>
        </div>
        <div className={styles.field}>
          <small>.03</small>
          <div>
            <label className={styles.label} htmlFor="name">Password</label>
            <input className={styles.input} required placeholder='******' name='name' type="password" />
          </div>
        </div>
        <div className={styles.field}>
          <small>.04</small>
          <div>
            <label className={styles.label} htmlFor="name">Confirm Password</label>
            <input className={styles.input} required placeholder='******' name='name' type="password" />
          </div>
        </div>
      </fieldset>
      <footer className={styles.bottom}>
        <Cta className={styles.cta} action={() => mountLoading("/", "dots", { amount: 3 })}>Go home</Cta>
        <button className={styles.submit}>Confirm</button>
      </footer>
    </form>
  )
}
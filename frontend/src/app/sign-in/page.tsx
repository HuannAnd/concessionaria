import styles from './page.module.scss'

import Cta from '@/components/Cta'

export default async function SignInPage() {
  return (
    <form className={styles.form} action="">
      <legend className={styles.title}>Sign in</legend>
      <fieldset>
        <div className={styles.field}>
          <small>.01</small>
          <div>
            <label className={styles.label} htmlFor="name">Name</label>
            <input className={styles.input} placeholder='John Doe' name='name' type="text" />
          </div>
        </div>
        <div className={styles.field}>
          <small>.02</small>
          <div>
            <label className={styles.label} htmlFor="name">Email</label>
            <input className={styles.input} placeholder='johndoe@mail.com' name='name' type="email" />
          </div>
        </div>
        <div className={styles.field}>
          <small>.03</small>
          <div>
            <label className={styles.label} htmlFor="name">Password</label>
            <input className={styles.input} placeholder='******' name='name' type="password" />
          </div>
        </div>
        <div className={styles.field}>
          <small>.04</small>
          <div>
            <label className={styles.label} htmlFor="name">Confirm Password</label>
            <input className={styles.input} placeholder='******' name='name' type="password" />
          </div>
        </div>
      </fieldset>
      <footer className={styles.bottom}>
        <Cta className={styles.cta} href="/">Go home</Cta>
        <button className={styles.submit}>Confirm</button>
      </footer>
    </form>
  )
}
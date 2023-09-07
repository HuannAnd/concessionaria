import styles from './page.module.scss'

export default async function SignInPage() {
  
  
  return (
    <form className={styles.form} action="">
      <fieldset>
        <legend>Sign In</legend>
        <div className={styles.fullname}>
          <label htmlFor="">Name</label>
          <input type="text" className={styles.inputField} required />
          <label htmlFor="">Lastname</label>
          <input type="text" className={styles.inputField} required />  
        </div>
        <label htmlFor="">Email</label>
        <input type="text" className={styles.inputField} required />
        <label htmlFor="">Password</label>
        <input type="text" className={styles.inputField} required />
        <button>Send User</button>
      </fieldset>
    </form>
  )
}
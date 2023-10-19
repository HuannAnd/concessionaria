'use client';

import CustomButton from '@/components/CustomButton'

import styles from './CookiesPopup.module.scss'

interface CookiesPopupProps {

}

export default function CookiesPopup({ }: CookiesPopupProps) {
  return (
    <div className={styles.CookiesPopup} aria-label="Cookies Popup">
      <div className={styles.innerContent}>
        <p className={styles.title}>This website use cookies</p>
        <p className={styles.addon}>
          This site uses cookies. By continung to browse the site you are agreeing to our use of cookies.{" "}
          <span className={styles.ourCookies}>Find out more about our use of cookies</span>
        </p>
        <CustomButton variant='secondary' className={styles.acceptAndClose}>Accept & Close</CustomButton>
      </div>
    </div>
  )
}
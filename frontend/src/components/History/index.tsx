'use client';

import { usePathname } from 'next/navigation';
import styles from './style.module.scss'

import useRedirectWithLoading from "@/hooks/useRedirectWithLoading";

interface HistoryProps { }

export default function History({ }: HistoryProps) {
  const mountLoading = useRedirectWithLoading()

  const pathname = usePathname()
  

  return (
    <button className={styles.History} onClick={() => mountLoading("/cars", "dots", { amount: 3 })}>
      <svg className={styles.icon} width="58" height="40" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 14.2124L14.2124 0L28.4248 14.2124L23.0951 19.542L14.2124 10.6593L5.32964 19.542L0 14.2124Z" fill="#111" />
      </svg>
    </button>
  )
}
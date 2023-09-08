'use client';

import Image from "next/image"

import styles from './MacbookMockup.module.scss'

interface MobileMockupProps {

}

export default function MacbookMockup({ }: MobileMockupProps) {
  return (
    <div className={styles.device} aria-label="mockup of mackbook">
      <Image
        src="/mockups/macbook.png"
        alt="Mackbook site exihibition"
        fill
        quality={100}
      />
    </div>
  )
}
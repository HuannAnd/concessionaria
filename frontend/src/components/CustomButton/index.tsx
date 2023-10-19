'use client';

import styles from './style.module.scss'

import { TCustomButtonVariant } from './type';

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: TCustomButtonVariant }

export default function CustomButton({ children, variant = "normal", className, ...rest }: CustomButtonProps) {
  return <button {...rest} data-button-variant={variant} className={`${styles.BaseCustomButton} ${className}`}>{children}</button>
}
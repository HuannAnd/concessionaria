export default function cn(...classNames: (string | null | undefined)[]) {
  const concatClassNames = classNames.reduce((prevClassName, className) => {
    return `${prevClassName} ${className}`
  })

  return concatClassNames as string
}
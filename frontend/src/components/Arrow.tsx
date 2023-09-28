'use client';

interface ArrowProps
  extends React.HTMLAttributes<SVGSVGElement> {

}

export default function Arrow({ ...props }: ArrowProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
    >
      <path
        d="M10 25L40 25M40 25L30 15M40 25L30 35"
        stroke="#fff"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
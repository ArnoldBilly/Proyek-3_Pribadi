import type { ReactNode } from 'react'
import { useReveal } from './useReveal'

type Props = {
  children: ReactNode
  delay?: number
  className?: string
}

export function Reveal({ children, delay = 0, className = '' }: Props) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      data-reveal
      style={{ transitionDelay: `${delay}ms` }}
      className={className}
    >
      {children}
    </div>
  )
}
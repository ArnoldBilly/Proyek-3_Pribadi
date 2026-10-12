import { useEffect, useState } from 'react'
import { profile } from '@/data/profile'

export function RotatingRole() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || profile.roles.length < 2) return
    const id = setInterval(
      () => setIndex((i) => (i + 1) % profile.roles.length),
      2500,
    )
    return () => clearInterval(id)
  }, [paused])

  return (
    <p
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="w-fit overflow-hidden border-3 border-ink bg-white px-4 py-2 text-sm uppercase tracking-[0.3em] shadow-brutal-sm"
    >
      <span className="sr-only">{profile.roles.join(', ')}</span>

      <span aria-hidden className="grid">
        {profile.roles.map((role, i) => (
          <span
            key={role}
            className={`col-start-1 row-start-1 ${
              i === index ? 'animate-role-in motion-reduce:animate-none' : 'invisible'
            }`}
          >
            {role}
          </span>
        ))}
      </span>
    </p>
  )
}
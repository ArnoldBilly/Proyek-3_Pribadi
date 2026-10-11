import { useEffect, useRef } from 'react'
import { profile } from '@/data/profile'

export function Background() {
  const blobRef = useRef<HTMLDivElement>(null)
  const initialsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const hasMouse = window.matchMedia('(pointer: fine)').matches
    if (reduceMotion || !hasMouse) return

    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0
    let frame = 0

    const tick = () => {
      currentX += (targetX - currentX) * 0.08
      currentY += (targetY - currentY) * 0.08

      if (blobRef.current) {
        blobRef.current.style.translate = `${currentX * -40}px ${currentY * -40}px`
      }
      if (initialsRef.current) {
        initialsRef.current.style.translate = `${currentX * 25}px ${currentY * 25}px`
      }

      const settled =
        Math.abs(targetX - currentX) < 0.001 && Math.abs(targetY - currentY) < 0.001
      frame = settled ? 0 : requestAnimationFrame(tick)
    }

    const onMove = (e: PointerEvent) => {
      targetX = (e.clientX / window.innerWidth) * 2 - 1
      targetY = (e.clientY / window.innerHeight) * 2 - 1
      if (!frame) frame = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onMove)
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        ref={blobRef}
        className="absolute -right-0 top-20 h-52 w-60 rounded-[60%_40%_55%_45%/50%_60%_40%_50%] border-3 border-ink bg-brand shadow-brutal md:h-72 md:w-80"
      />
      <div
        ref={initialsRef}
        className="absolute -left-0 bottom-24 hidden size-28 -rotate-12 place-items-center border-3 border-ink bg-white font-display text-5xl shadow-brutal md:grid"
      >
        {profile.initials}
      </div>
    </div>
  )
}
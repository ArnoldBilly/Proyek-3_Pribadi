import { useEffect, useRef } from 'react'
import { sheets } from '@/data/sheets'

const tones = {
  paper: { bg: 'bg-transparent', text: 'text-ink', badge: 'border-ink bg-white text-ink' },
  brand: { bg: 'bg-brand', text: 'text-ink', badge: 'border-ink bg-white text-ink' },
  ink: { bg: 'bg-ink', text: 'text-paper', badge: 'border-paper bg-brand text-ink' },
} as const

export function SheetStack() {
  const slotRefs = useRef<(HTMLDivElement | null)[]>([])
  const sheetRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0

    const update = () => {
      frame = 0
      const maxTilt = window.innerWidth < 768 ? 8 : 18

      sheets.forEach((_, i) => {
        if (i === 0) return
        const slot = slotRefs.current[i]
        const sheet = sheetRefs.current[i]
        if (!slot || !sheet) return

        const t = Math.min(
          Math.max(slot.getBoundingClientRect().top / window.innerHeight, 0),
          1,
        )
        sheet.style.rotate = `${t * maxTilt}deg`
      })
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section id="mission" className="relative overflow-x-clip">
      {sheets.map((sheet, i) => {
        const tone = tones[sheet.tone]
        return (
          <div
            key={sheet.label}
            ref={(el) => {
              slotRefs.current[i] = el
            }}
            className="sticky top-0 h-screen"
          >
            <div
              ref={(el) => {
                sheetRefs.current[i] = el
              }}
              className="relative h-full origin-top-left"
            >
              <div
                aria-hidden
                className={`absolute left-0 top-0 h-full w-[200vw] ${tone.bg} ${i > 0 ? 'border-t-3 border-ink' : ''}`}
              />

              <div
                className={`relative mx-auto flex h-full max-w-6xl flex-col justify-center px-4 ${tone.text}`}
              >
                <p
                  className={`w-fit -rotate-3 border-3 px-3 py-1 text-xs font-bold uppercase tracking-[0.3em] ${tone.badge}`}
                >
                  {sheet.label}
                </p>
                <h2 className="mt-8 font-display text-6xl uppercase leading-[0.85] sm:text-8xl lg:text-[9rem]">
                  {sheet.headline.map((word) => (
                    <span key={word} className="block">
                      {word}
                    </span>
                  ))}
                </h2>
                <p className="mt-10 max-w-xl text-lg leading-relaxed">{sheet.body}</p>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
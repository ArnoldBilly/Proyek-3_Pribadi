import { useEffect, useRef } from 'react'
import { profile } from '@/data/profile'

export function Mission() {
  const slotRef = useRef<HTMLDivElement>(null) // kotak tata letak, tidak ikut miring
  const sheetRef = useRef<HTMLDivElement>(null) // lembar kuning, ini yang dimiringkan

  useEffect(() => {
    const slot = slotRef.current
    const sheet = sheetRef.current
    if (!slot || !sheet) return

    // Hormati pengguna yang mengurangi gerakan: lembar langsung tegak
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0

    const update = () => {
      frame = 0
      const maxTilt = window.innerWidth < 768 ? 8 : 18
      // 1 = lembar baru muncul di dasar layar, 0 = sudah menempel di atas
      const t = Math.min(
        Math.max(slot.getBoundingClientRect().top / window.innerHeight, 0),
        1,
      )
      sheet.style.rotate = `${t * maxTilt}deg`
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
      {/* Lembar 1: menempel di layar */}
      <div className="sticky top-0 flex h-screen items-center">
        <div className="mx-auto w-full max-w-6xl px-4">
          <p className="text-xs uppercase tracking-[0.4em]">{profile.about.label}</p>
          <h2 className="mt-6 font-display text-6xl uppercase leading-[0.85] sm:text-8xl lg:text-[9rem]">
            {profile.about.headline.map((word) => (
              <span key={word} className="block">
                {word}
              </span>
            ))}
          </h2>
          <p className="mt-10 max-w-xl text-lg leading-relaxed">
            {profile.about.body}
          </p>
        </div>
      </div>

      {/* Lembar 2: naik dari bawah sambil menegak */}
      <div ref={slotRef} className="relative z-10">
        <div
          ref={sheetRef}
          className="origin-top-left border-t-3 border-ink bg-brand"
        >
          <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 py-24">
            <p className="w-fit -rotate-3 border-3 border-ink bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.3em]">
              {profile.mission.label}
            </p>
            <h2 className="mt-8 font-display text-6xl uppercase leading-[0.85] sm:text-8xl lg:text-[12rem]">
              {profile.mission.headline}
            </h2>
            <p className="mt-10 max-w-xl text-lg leading-relaxed">
              {profile.mission.body}
            </p>
          </div>
        </div>
      </div>

    {/* Lembar 2: naik dari bawah sambil menegak */}
      <div ref={slotRef} className="relative z-10">
        <div
          ref={sheetRef}
          className="origin-top-left border-t-3 border-ink bg-brand"
        >
          <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 py-24">
            <p className="w-fit -rotate-3 border-3 border-ink bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.3em]">
              {profile.mission.label}
            </p>
            <h2 className="mt-8 font-display text-6xl uppercase leading-[0.85] sm:text-8xl lg:text-[12rem]">
              {profile.mission.headline}
            </h2>
            <p className="mt-10 max-w-xl text-lg leading-relaxed">
              {profile.mission.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
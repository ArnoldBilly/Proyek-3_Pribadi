import { CodeXml } from 'lucide-react'
import { profile } from '@/data/profile'

export function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 pb-24 pt-16">
      <div className="bleed grid gap-14 lg:grid-cols-2 lg:items-center">
        {/* Kiri: identitas */}
        <div>
          <div className="flex items-center gap-4">
            <span className="grid size-12 -rotate-6 place-items-center border-3 border-ink bg-brand shadow-brutal-sm">
              <CodeXml />
            </span>
            <span className="text-xs uppercase tracking-[0.4em]">
              Portfolio - {profile.year}
            </span>
          </div>

          <h1 className="mt-8 font-display uppercase leading-[0.9]">
            <span className="block text-7xl sm:text-8xl lg:text-8xl">
              {profile.firstName}
            </span>
            <span className="mt-2 inline-block -rotate-1 bg-brand px-4 text-7xl sm:text-8xl lg:text-9xl">
              {profile.lastName}
            </span>
          </h1>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <p className="border-3 border-ink bg-white px-4 py-2 text-sm uppercase tracking-[0.3em] shadow-brutal-sm">
              {profile.role}
            </p>
          </div>
        </div>

        {/* Kanan: kutipan, ringkasan, tombol */}
        <div className="relative lg:max-w-lg lg:justify-self-end">
          <blockquote className="relative rotate-1 border-3 border-ink bg-white p-6 shadow-brutal">
            <p className="font-display text-3xl uppercase leading-tight sm:text-4xl">
              “{profile.quote}”
            </p>
            <span className="absolute -right-3 -top-3 grid size-8 place-items-center rounded-full border-3 border-ink bg-white text-sm font-bold">
              !
            </span>
          </blockquote>

          <p className="mt-10 border-t-3 border-ink pt-6 leading-relaxed">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#work" className="btn-brutal bg-ink text-paper">
              View work
            </a>
            <a href="#contact" className="btn-brutal bg-white">
              Let's talk
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
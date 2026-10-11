import { highlights } from '@/data/skills'

const variants = [
  'bg-ink px-3 py-1 text-paper',
  '',
  'underline decoration-brand decoration-4 underline-offset-4'
]

export function Marquee() {
  return (
    <div className="overflow-hidden py-10">
      <div className="-rotate-1 border-y-3 border-ink bg-white py-4">
        <div className="flex w-max animate-marquee motion-reduce:animate-none hover:[animation-play-state:paused]">
          {Array.from({ length: 4 }).map((_, copy) => (
            <ul
              key={copy}
              aria-hidden={copy > 0}
              className="flex shrink-0 items-center"
            >
              {highlights.map((text, i) => (
                <li key={text} className="flex items-center">
                  <span
                    className={`mx-8 text-sm font-bold uppercase tracking-[0.3em] ${variants[i % variants.length]}`}
                  >
                    {text}
                  </span>
                  <span aria-hidden className="text-xl">✦</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  )
}
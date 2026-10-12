import { expertise } from '@/data/skills'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

const tilt = ['-rotate-1', 'rotate-1', 'rotate-0']
const fill = ['bg-brand', 'bg-white', 'bg-white']

export function Expertise() {
  return (
    <section id="EXPERTISE" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading index="01" title="Expertise" />

      <div className="grid gap-8 md:grid-cols-3">
        {expertise.map((item, i) => (
          <Reveal key={item.title} delay={i * 120} className="h-full">
            <article
              key={item.title}
              className={`border-3 border-ink p-6 shadow-brutal transition hover:rotate-0 ${tilt[i % tilt.length]} ${fill[i % fill.length]}`}
            >
              <span className="font-display text-5xl">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-display text-3xl uppercase">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed">{item.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="border-2 border-ink bg-paper px-2 py-0.5 text-xs font-bold"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
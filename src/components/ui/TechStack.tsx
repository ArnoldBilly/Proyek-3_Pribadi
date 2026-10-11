import { techstack } from '@/data/skills'
import { SectionHeading } from './SectionHeading'

export function TechStack() {
  return (
    <section id="stack" className="border-y-3 border-ink bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <SectionHeading index="02" title="Stack" />

        <div className="space-y-8">
          {techstack.map((group) => (
            <div key={group.label}>
              <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.3em]">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {group.items.map((item, i) => (
                  <li
                    key={item}
                    className={`border-3 border-ink px-3 py-1.5 text-sm font-bold shadow-brutal-sm transition hover:-translate-y-1 hover:rotate-2 ${i % 3 === 0 ? 'bg-brand' : 'bg-paper'}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
import { education } from '@/data/timeline'
import { SectionHeading } from './SectionHeading'
import { Timeline } from './Timeline'
import { Reveal } from './Reveal'

export function Education() {
  return (
    <section id="EDUCATION" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading index="04" title="Education" />
      <Reveal>
        <Timeline items={education} />
      </Reveal>
    </section>
  )
}
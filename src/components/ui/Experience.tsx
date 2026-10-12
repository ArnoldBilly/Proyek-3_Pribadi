import { experience } from '@/data/timeline'
import { SectionHeading } from './SectionHeading'
import { Timeline } from './Timeline'
import { Reveal } from './Reveal'

export function Experience() {
  return (
    <section id="EXPERIENCE" className="mx-auto max-w-6xl px-4 py-20">
        <SectionHeading index="03" title="Experience" />
        <Reveal>
          <Timeline items={experience} />
        </Reveal>
    </section>
  )
}
import { education } from '@/data/timeline'
import { SectionHeading } from './SectionHeading'
import { Timeline } from './Timeline'

export function Education() {
  return (
    <section id="EDUCATION" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading index="04" title="Education" />
      <Timeline items={education} />
    </section>
  )
}
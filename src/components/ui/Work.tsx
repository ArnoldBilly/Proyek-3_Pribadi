import { projects } from '@/data/projects'
import { ProjectCard } from './ProjectCard'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

export function Work() {
  return (
    <section id="WORK" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading index="03" title="Work" />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={(i % 3) * 120} className="h-full">
            <ProjectCard key={project.id} project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
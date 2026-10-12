import { Link } from '@tanstack/react-router'
import type { Project } from '@/data/projects'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to="/projects/$id"
      params={{ id: project.id }}
      className="group block border-3 border-ink bg-white shadow-brutal transition hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-brutal-sm"
    >
      <div className="aspect-video overflow-hidden border-b-3 border-ink bg-muted">
        <img
          src={project.image}
          alt={`Tampilan proyek ${project.title}`}
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
          className="size-full object-cover transition group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="font-display text-2xl uppercase">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="border-2 border-ink bg-paper px-2 py-0.5 text-xs font-bold"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  )
}
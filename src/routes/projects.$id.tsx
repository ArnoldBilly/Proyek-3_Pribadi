import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { getProject } from '@/data/projects'

export const Route = createFileRoute('/projects/$id')({
  loader: ({ params }) => {
    const project = getProject(params.id)
    if (!project) throw notFound()
    return project
  },
  component: ProjectDetail,
  notFoundComponent: () => (
    <main className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="font-display text-6xl uppercase">Proyek tidak ditemukan</h1>
      <Link to="/" hash="WORK" className="btn-brutal mt-8 bg-brand">
        ← Kembali ke proyek
      </Link>
    </main>
  ),
})

function ProjectDetail() {
  const project = Route.useLoaderData()

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <Link to="/" hash="WORK" className="font-bold underline">
        ← semua proyek
      </Link>

      <h1 className="mt-8 font-display text-5xl uppercase leading-none sm:text-7xl">
        {project.title}
      </h1>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="border-2 border-ink bg-brand px-2 py-0.5 text-xs font-bold"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-10 aspect-video overflow-hidden border-3 border-ink bg-muted shadow-brutal">
        <img
          src={project.image}
          alt={`Tampilan proyek ${project.title}`}
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
          className="size-full object-cover"
        />
      </div>

      <p className="mt-10 leading-relaxed">{project.description}</p>

      {(project.demo || project.repo) && (
        <div className="mt-10 flex flex-wrap gap-4">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="btn-brutal bg-ink text-paper"
            >
              Live demo ↗
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="btn-brutal bg-white"
            >
              Source code ↗
            </a>
          )}
        </div>
      )}
    </main>
  )
}
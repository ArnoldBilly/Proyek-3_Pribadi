import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute('/projects/$id')({
    component: ProjectDetail,
})

function ProjectDetail() {
    const { id } = Route.useParams()

    return (
        <main className="p-10">
            <Link to="/" className="font-bold underline">← Kembali</Link>
            <h1 className="mt-6 font-display text-6xl uppercase">Proyek: {id}</h1>
        </main>
    )
}
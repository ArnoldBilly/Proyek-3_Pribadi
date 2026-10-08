import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute('/')({
    component: Home,
})

function Home() {
    return(
        <main className="p-10">
            <h1 className="font-display text-7xl uppercase">Halo Dunia</h1>
            <div className="mt-8 inline-block border-3 border-ink bg-white p-6 shadow-brutal">
                <p className="text-sm">Halaman Utama</p>
            </div>
        </main>
    )
}
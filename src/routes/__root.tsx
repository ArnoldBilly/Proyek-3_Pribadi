import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
    component: RootLayout,
    notFoundComponent: () => (
        <div className="p-10">
            <h1 className="font-display text-6xl uppercase">404</h1>
            <Link to="/" className="underline">Kembali Ke Home</Link>
        </div>
    )
})

function RootLayout() {
    return (
        <>
        <nav className="flex gap-4 border-b-3 border-ink p-4 font-bold">
            <Link to="/">Home</Link>
            <Link to="/projects/$id" params={{id: 'demo'}}>
                proyek demo
            </Link>
        </nav>
        <Outlet />
        </>
    )
}
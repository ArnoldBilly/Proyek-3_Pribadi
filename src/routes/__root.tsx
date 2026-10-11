import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { Nav } from '@/components/ui/Nav'

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
        <Nav />
        <Outlet />
        </>
    )
}
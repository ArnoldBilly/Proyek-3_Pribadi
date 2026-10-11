import { Expertise } from "@/components/ui/Expertise"
import { Hero } from "@/components/ui/Hero"
import { Marquee } from "@/components/ui/Marquee"
import { Toolbelt } from "@/components/ui/Toolbelt"
import { Work } from "@/components/ui/Work"

import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute('/')({
    component: Home,
})

function Home() {
    return(
        <main>
            <Hero />
            <Marquee />
            <Expertise />
            <Toolbelt />
            <Work />
        </main>
    )
}
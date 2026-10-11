import { Expertise } from "@/components/ui/Expertise"
import { Hero } from "@/components/ui/Hero"
import { Marquee } from "@/components/ui/Marquee"
import { TechStack } from "@/components/ui/TechStack"
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
            <TechStack />
        </main>
    )
}
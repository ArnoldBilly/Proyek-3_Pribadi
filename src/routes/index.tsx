import { Expertise } from "@/components/ui/Expertise"
import { Hero } from "@/components/ui/Hero"
import { Marquee } from "@/components/ui/Marquee"
import { Toolbelt } from "@/components/ui/Toolbelt"
import { Work } from "@/components/ui/Work"
import { Education } from "@/components/ui/Education"
import { Experience } from "@/components/ui/Experience"
import { createFileRoute } from "@tanstack/react-router"
import { SheetStack } from "@/components/ui/SheetStack"
import { Contact } from "@/components/ui/Contact"
import { Footer } from "@/components/ui/Footer"

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
            <Experience />
            <Education />
            <SheetStack /> 
            <Contact />
            <Footer />
        </main>
    )
}
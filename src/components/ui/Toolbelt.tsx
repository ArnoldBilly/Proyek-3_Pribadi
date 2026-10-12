import { tools } from "@/data/tools";
import { Reveal } from "./Reveal";

export function Toolbelt() {
    return (
        <section id="STACK" className="mx-auto max-w-6xl px-4 py-4">
            <Reveal>
                <header className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                    <p className="text-xs uppercase tracking-[0.4em]">Toolbelt</p>
                    <h2 className="mt-3 font-display text-5xl uppercase leading-none sm:text-6xl">
                        Tools I build{' '}
                        <span className="underline decoration-brand decoration-8 underline-offset-4">
                        with
                        </span>
                    </h2>
                    </div>
                    <p className="max-w-xs text-sm leading-relaxed">
                    The languages, frameworks, and workflows I rely on from design to deployment.
                    </p>
                </header>
            </Reveal>
            

            <Reveal delay={150}>
                <div className="relative overflow-hidden border-3 border-ink bg-white py-8 shadow-brutal motion-reduce:overflow-x-auto">
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

                    <div className="flex w-max animate-marquee [animation-duration:35s] motion-reduce:animate-none hover:[animation-play-state:paused]">
                    {[0, 1].map((copy) => (
                        <ul key={copy} aria-hidden={copy > 0} className="flex shrink-0">
                        {tools.map(({ name, icon: Icon, color }) => (
                            <li
                                key={name}
                                className="group/item flex shrink-0 flex-col items-center gap-3 px-4"
                            >
                                <span className="grid size-20 place-items-center border-3 border-ink bg-white shadow-brutal-sm transition duration-200 hover:-translate-y-1 hover:shadow-brutal">
                                    <Icon
                                    size={36}
                                    color={color}
                                    aria-hidden
                                    className="transition-transform duration-200 hover:-rotate-12 hover:scale-125 hover:drop-shadow-[2px_2px_0_#0a0a0a]"
                                    />
                                </span>
                                <span className="text-xs transition group-hover/item:underline">
                                    {name}
                                </span>
                            </li>
                        ))}
                        </ul>
                    ))}
                    </div>
                </div>
            </Reveal>
        </section>
    )
}
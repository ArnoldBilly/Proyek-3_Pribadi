import type { TimelineItem } from '@/data/timeline'

export function Timeline({ items }: { items: TimelineItem[] }) {
    return (
        <ol className="space-y-8 border-l-3 border-ink pl-8">
        {items.map((item) => (
            <li key={`${item.title}-${item.period}`} className="relative">
            <span
                aria-hidden
                className="absolute -left-[42px] top-6 size-4 border-3 border-ink bg-brand"
            />
            <article className="border-3 border-ink bg-white p-5 shadow-brutal-sm">
                <p className="inline-block border-2 border-ink bg-brand px-2 py-0.5 text-xs font-bold">
                {item.period}
                </p>
                <h3 className="mt-3 font-display text-2xl uppercase">{item.title}</h3>
                <p className="text-sm font-bold">{item.place}</p>
                <p className="mt-3 text-sm leading-relaxed">{item.description}</p>
            </article>
            </li>
        ))}
        </ol>
    )
}
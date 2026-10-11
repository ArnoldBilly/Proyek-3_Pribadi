type Props = { index: string; title: string }

export function SectionHeading({ index, title }: Props) {
  return (
    <div className="mb-12 flex items-end gap-4">
      <span className="border-3 border-ink bg-brand px-2 py-1 text-xs font-bold shadow-brutal-sm">
        {index}
      </span>
      <h2 className="font-display text-5xl uppercase leading-none sm:text-6xl">
        {title}
      </h2>
      <span aria-hidden className="mb-2 hidden h-[3px] flex-1 bg-ink sm:block" />
    </div>
  )
}
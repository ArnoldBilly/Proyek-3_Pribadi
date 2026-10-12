import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { profile } from '@/data/profile'

const menu = ['HOME', 'EXPERTISE', 'WORK', 'EXPERIENCE', 'CONTACT'] as const

const external = [
  { label: 'github', href: profile.links.github },
  { label: 'linkedin', href: profile.links.linkedIn },
]

const externalLinks = external.map(({ label, href }) => (
  <a
    key={label}
    href={href}
    target="_blank"
    rel="noreferrer"
    className="btn-brutal bg-white px-3 py-1.5 text-xs"
  >
    {label} ↗
  </a>
))

export function Nav() {
  const [open, setOpen] = useState(false)

  // Tutup dengan tombol Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // Tutup otomatis kalau layar membesar ke ukuran desktop
  useEffect(() => {
    const query = window.matchMedia('(min-width: 768px)')
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false)
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return (
    <header className="sticky top-0 z-50 pt-4">
      <div className="mx-auto max-w-6xl px-4">
        <nav
          aria-label="Utama"
          className="bleed border-3 border-ink bg-white shadow-brutal"
        >
          <div className="flex items-center justify-between px-5 py-3">
            <Link to="/" className="font-bold" onClick={() => setOpen(false)}>
              {profile.firstName}
              {profile.lastName[0]}
              <span className="text-ink/50">._</span>
            </Link>

            {/* Desktop */}
            <ul className="hidden gap-6 text-sm md:flex">
              {menu.map((item) => (
                <li key={item}>
                  <Link to="/" hash={item} className="hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="hidden gap-3 md:flex">{externalLinks}</div>

            {/* Ponsel */}
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Tutup menu' : 'Buka menu'}
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center border-3 border-ink bg-brand shadow-brutal-sm md:hidden"
            >
              {open ? <X aria-hidden /> : <Menu aria-hidden />}
            </button>
          </div>

          {open && (
            <div id="mobile-menu" className="border-t-3 border-ink p-5 md:hidden">
              <ul className="space-y-1">
                {menu.map((item) => (
                  <li key={item}>
                    <Link
                      to="/"
                      hash={item}
                      onClick={() => setOpen(false)}
                      className="block py-2 font-display text-3xl uppercase"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex gap-3">{externalLinks}</div>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}
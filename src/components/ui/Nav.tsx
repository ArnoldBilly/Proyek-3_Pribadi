import { Link } from '@tanstack/react-router'
import { profile } from '@/data/profile'

const menu = ['HOME', 'EXPERTISE', 'WORK', 'EXPERIENCE', 'CONTACT'] as const

export function Nav() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav className="bleed mx-auto flex max-w-6xl items-center justify-between border-3 border-ink bg-white px-5 py-3 shadow-brutal">
        <Link to="/" className="font-bold">
          {profile.firstName}
        </Link>

        <ul className="hidden gap-6 text-sm md:flex">
          {menu.map((item) => (
            <li key={item}>
              <Link to="/" hash={item} className="hover:underline">
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="btn-brutal bg-white px-3 py-1.5 text-xs"
          >
            github ↗
          </a>
          <a
            href={profile.links.linkedIn}
            target="_blank"
            rel="noreferrer"
            className="btn-brutal bg-white px-3 py-1.5 text-xs"
          >
            linkedin ↗
          </a>
        </div>
      </nav>
    </header>
  )
}
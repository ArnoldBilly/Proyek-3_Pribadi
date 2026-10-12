import { profile } from '@/data/profile'

export function Footer() {
  return (
    <footer className="mt-10 border-t-3 border-ink bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.firstName} {profile.lastName}
        </p>
        <p>Dibuat dengan React, Tailwind, dan Keinginan Untuk Berkembang Menjadi Pribadi Yang Lebih Baik.</p>
      </div>
    </footer>
  )
}
import { useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { profile } from '@/data/profile'
// import { sendMessage } from '@/lib/contact'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

const schema = z.object({
  name: z.string().min(2, 'Nama minimal 2 karakter'),
  email: z.string().email('Format email tidak valid'),
  message: z
    .string()
    .min(10, 'Pesan minimal 10 karakter')
    .max(1000, 'Pesan maksimal 1000 karakter'),
  botField: z.string().optional(),
})

type FormValues = z.infer<typeof schema>
type Status = 'idle' | 'success' | 'error'

const field =
  'w-full border-3 border-ink bg-white px-3 py-2 text-sm shadow-brutal-sm focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ink'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors, isSubmitting },
//   } = useForm<FormValues>({ resolver: zodResolver(schema) })

  async function onSubmit(values: FormValues) {
    // setStatus('idle')
    // try {
    //   await sendMessage(values)
    //   reset()
    //   setStatus('success')
    // } catch {
    //   setStatus('error')
    // }
  }

  const links = [
    { label: 'github', href: profile.links.github },
    { label: 'linkedin', href: profile.links.linkedIn },
  ]

  return (
  <section id="CONTACT" className="mx-auto max-w-6xl px-4 py-20">
    <SectionHeading index="05" title="Contact" />

    <div className="grid gap-8 lg:grid-cols-[1fr_16rem_12rem] lg:items-stretch">
      {/* Kolom 1: form */}
      <Reveal>
        <form
          // onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col gap-6 border-3 border-ink bg-white p-6 shadow-brutal"
        >
          {/* Honeypot */}
          <div className="hidden" aria-hidden>
            <label>
              Jangan diisi
              {/* <input type="text" tabIndex={-1} autoComplete="off" {...register('website')} /> */}
            </label>
          </div>

          <div>
            <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-widest">
              Nama
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              // aria-invalid={!!errors.name}
              // aria-describedby={errors.name ? 'name-error' : undefined}
              className={field}
              // {...register('name')}
            />
            { (
              <p id="name-error" className="mt-2 text-xs font-bold text-destructive">
                {/* {errors.name.message} */}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-widest">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              // aria-invalid={!!errors.email}
              // aria-describedby={errors.email ? 'email-error' : undefined}
              className={field}
              // {...register('email')}
            />
            {(
              <p id="email-error" className="mt-2 text-xs font-bold text-destructive">
                {/* {errors.email.message} */}
              </p>
            )}
          </div>

          {/* Pesan: rows dikurangi supaya form tidak terlalu tinggi */}
          <div>
            <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-widest">
              Pesan
            </label>
            <textarea
              id="message"
              rows={4}
              // aria-invalid={!!errors.message}
              // aria-describedby={errors.message ? 'message-error' : undefined}
              className={field}
              // {...register('message')}
            />
            {(
              <p id="message-error" className="mt-2 text-xs font-bold text-destructive">
                {/* {errors.message.message} */}
              </p>
            )}
          </div>

          <button
            type="submit"
            // disabled={isSubmitting}
            className="btn-brutal bg-brand disabled:cursor-not-allowed disabled:opacity-60"
          >
            {/* {isSubmitting ? 'Mengirim...' : 'Kirim pesan'} */}
          </button>

          {status === 'success' && (
            <p role="status" className="border-3 border-ink bg-brand px-4 py-3 text-sm font-bold">
              Terkirim! Terima kasih, saya akan membalas secepatnya.
            </p>
          )}
          {status === 'error' && (
            <p role="alert" className="border-3 border-ink bg-white px-4 py-3 text-sm font-bold text-destructive">
              Pesan gagal dikirim. Coba lagi, atau kirim langsung lewat email.
            </p>
          )}
        </form>
      </Reveal>
      

      {/* Kolom 2: foto (tingginya mengikuti form di desktop) */}
      <Reveal>
          <figure className="mx-auto flex w-full max-w-xs rotate-2 flex-col border-3 border-ink bg-white p-3 shadow-brutal lg:mx-0 lg:max-w-none lg:rotate-0">
            <div className="relative aspect-[4/5] overflow-hidden border-3 border-ink bg-brand lg:aspect-auto lg:min-h-[18rem] lg:flex-1">
              <span
                aria-hidden
                className="absolute inset-0 grid place-items-center font-display text-7xl"
              >
                {profile.initials}
              </span>
              <img
                src={profile.photo}
                alt={`Foto ${profile.firstName} ${profile.lastName}`}
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs font-bold uppercase tracking-widest">
              {profile.firstName} {profile.lastName}
            </figcaption>
          </figure>
      </Reveal>

      <Reveal>
          {/* Kolom 3: link, di kanan foto */}
          <aside className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:self-start">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="btn-brutal w-full justify-between bg-white"
              >
                {link.label} <span aria-hidden>↗</span>
              </a>
            ))}
          </aside>
      </Reveal>
    </div>
  </section>
)
}
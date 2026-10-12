import { useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { profile } from '@/data/profile'
// import { sendMessage } from '@/lib/contact'
import { SectionHeading } from './SectionHeading'

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

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading index="05" title="Contact" />

      <div className="grid gap-12 lg:grid-cols-[3fr_2fr]">
        <form
        //   onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-6 border-3 border-ink bg-white p-6 shadow-brutal"
        >
          {/* Kolom jebakan untuk bot: tersembunyi dari manusia */}
          <div className="hidden" aria-hidden>
            <label>
              Jangan diisi
              {/* <input type="text" tabIndex={-1} autoComplete="off" {...register('botField')} /> */}
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
            //   aria-invalid={!!errors.name}
            //   aria-describedby={errors.name ? 'name-error' : undefined}
              className={field}
            //   {...register('name')}
            />
            {(
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
            //   aria-invalid={!!errors.email}
            //   aria-describedby={errors.email ? 'email-error' : undefined}
              className={field}
            //   {...register('email')}
            />
            { (
              <p id="email-error" className="mt-2 text-xs font-bold text-destructive">
                {/* {errors.email.message} */}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-widest">
              Pesan
            </label>
            <textarea
              id="message"
              rows={6}
            //   aria-invalid={!!errors.message}
            //   aria-describedby={errors.message ? 'message-error' : undefined}
              className={field}
            //   {...register('message')}
            />
            { (
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

        <aside className="space-y-4 self-start">
          {/* <a href={`mailto:${profile.email}`} className="btn-brutal w-full justify-between bg-ink text-paper">
            {profile.email} <span aria-hidden>↗</span>
          </a> */}
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="btn-brutal w-full justify-between bg-white">
            github <span aria-hidden>↗</span>
          </a>
          <a href={profile.links.linkedIn} target="_blank" rel="noreferrer" className="btn-brutal w-full justify-between bg-white">
            linkedin <span aria-hidden>↗</span>
          </a>
        </aside>
      </div>
    </section>
  )
}
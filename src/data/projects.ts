export type Project = {
  id: string
  title: string
  summary: string
  description: string
  tags: string[]
  image: string
  demo?: string
  repo?: string
}

export const projects: Project[] = [
    {
        id: 'proyek-satu',
        title: 'Proyek Satu',
        summary: 'Satu kalimat tentang apa yang proyek ini lakukan.',
        description:
        'Jelaskan masalah yang diselesaikan, peranmu, keputusan teknis yang menarik, dan hasilnya.',
        tags: ['React', 'TypeScript'],
        image: '/projects/proyek-satu.png',
        demo: 'https://example.com',
        repo: 'https://github.com/username/proyek-satu',
    },
    {
        id: 'proyek-satu',
        title: 'Proyek Satu',
        summary: 'Satu kalimat tentang apa yang proyek ini lakukan.',
        description:
        'Jelaskan masalah yang diselesaikan, peranmu, keputusan teknis yang menarik, dan hasilnya.',
        tags: ['React', 'TypeScript'],
        image: '/projects/proyek-satu.png',
        demo: 'https://example.com',
        repo: 'https://github.com/username/proyek-satu',
    },
    {
        id: 'proyek-satu',
        title: 'Proyek Satu',
        summary: 'Satu kalimat tentang apa yang proyek ini lakukan.',
        description:
        'Jelaskan masalah yang diselesaikan, peranmu, keputusan teknis yang menarik, dan hasilnya.',
        tags: ['React', 'TypeScript'],
        image: '/projects/proyek-satu.png',
        demo: 'https://example.com',
        repo: 'https://github.com/username/proyek-satu',
    },
    {
        id: 'proyek-satu',
        title: 'Proyek Satu',
        summary: 'Satu kalimat tentang apa yang proyek ini lakukan.',
        description:
        'Jelaskan masalah yang diselesaikan, peranmu, keputusan teknis yang menarik, dan hasilnya.',
        tags: ['React', 'TypeScript'],
        image: '/projects/proyek-satu.png',
        demo: 'https://example.com',
        repo: 'https://github.com/username/proyek-satu',
    },
]

export function getProject(id: string) {
    return projects.find((p) => p.id === id)
}
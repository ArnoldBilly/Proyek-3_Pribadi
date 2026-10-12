export type SheetData = {
  label: string
  headline: string[]
  body: string
  tone: 'paper' | 'brand' | 'ink'
}

export const sheets: SheetData[] = [
  {
    label: 'The Story',
    headline: ['Curious', 'then', 'build'],
    body: 'It all started with curiosity about how an application works. That curiosity drove me to learn by building: I would immediately turn every new concept into a real project, handling everything from design to deployment.',
    tone: 'paper',
  },
  {
    label: 'The Mission',
    headline: ['Useful', 'and', 'reliable'],
    body: 'My mission is to create software that is truly useful to its users and to ensure it remains reliable after release. For me, code is only truly finished when it runs stably in the hands of others.',
    tone: 'brand',
  },
  {
    label: 'The Next',
    headline: ['Keep', 'Learning'],
    body: 'I am currently deepening my understanding of how to become a proficient software engineer and a DevOps engineer capable of effectively managing systems, while simultaneously seeking internship opportunities or team projects to learn through hands-on experience.',
    tone: 'ink',
  },
]
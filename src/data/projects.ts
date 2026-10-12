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
        id: 'matkul-project-2',
        title: 'Project 2 Course',
        summary: 'Bricks Breaker game using C and Raylib.',
        description:
        'Developing a C-based brick-breaker game using the Raylib library to fulfill the requirements for the "Project 2" course at university.',
        tags: ['C', 'Raylib'],
        image: '/projects/proyek-satu.png',
    },
    {
        id: 'matkul-project-3',
        title: 'Project 3 Course',
        summary: 'Sharia cooperative for the campus',
        description:
        'Developing a website system for a campus Sharia cooperative, featuring key functionalities such as POS, loans, savings, and more.',
        tags: ['Laravel', 'Vue', 'PostgreSQL'],
        image: '/image.png',
    },
    {
        id: 'matkul-project-4',
        title: 'Project 4 Course',
        summary: 'Academic Project Monitoring System',
        description:
        'Developing a Flutter-based Android application to monitor the progress of group assignments that can be submitted offline (asynchronously) and remain recorded with the correct offline submission time upon synchronization once an internet connection is available.',
        tags: ['Flutter', 'Supabase', 'Docker'],
        image: '/projects/proyek-satu.png',
    },
        {
        id: 'matkul-pcd',
        title: 'Digital Image Processing Course',
        summary: 'Detecting phishing links using a mobile phone camera',
        description:
        'Developing a phishing link detection application that uses a mobile phone camera. Users simply open the app and point the camera at a link they find suspicious; the app then processes the image and informs the user whether the link is a phishing link or not.',
        tags: ['Flutter', 'Supabase', 'Python'],
        image: '/projects/proyek-satu.png',
    },
]

export function getProject(id: string) {
    return projects.find((p) => p.id === id)
}
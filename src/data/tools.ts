import type { IconType } from 'react-icons'
import {
    SiJira,
    SiConfluence,
    SiGoogledocs,
    SiDiscord,
    SiDocker,
    SiNginx,
    SiGit,
    SiGithub,
    SiGithubactions,
    SiLaravel,
    SiPostgresql,
    SiFlutter,
    SiSupabase,
    SiPython
} from 'react-icons/si'

export type Tool = {
    name: string,
    icon: IconType,
    color: string
}

export const tools: Tool[] = [
    {name: 'Jira', icon: SiJira, color: '#0052CC'},
    {name: 'Confluence', icon: SiConfluence, color: '#172B4D'},
    {name: 'Google Docs', icon: SiGoogledocs, color: '#4285F4'},
    {name: 'Discord', icon: SiDiscord, color: '#5865F2'},
    {name: 'Docker', icon: SiDocker, color: '#2496ED'},
    {name: 'Nginx', icon: SiNginx, color: '#009639'},
    {name: 'Git', icon: SiGit, color: '#F03C2E'},
    {name: 'Github', icon: SiGithub, color: '#181717'},
    {name: 'Github Actions', icon: SiGithubactions, color: '#2088FF'},
    {name: 'Laravel', icon: SiLaravel, color: '#FF2D20'},
    {name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1'},
    {name: 'Flutter', icon: SiFlutter, color: '#02569B'},
    {name: 'Supabase', icon: SiSupabase, color: '#3FCF8E'},
    {name: 'Python', icon: SiPython, color: '#3776AB'}
] 
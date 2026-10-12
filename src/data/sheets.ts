export type SheetData = {
  label: string
  headline: string[]
  body: string
  tone: 'paper' | 'brand' | 'ink'
}

export const sheets: SheetData[] = [
  {
    label: 'The Story',
    headline: ['Judul', 'baris', 'besar'],
    body: 'Satu paragraf singkat tentang siapa kamu dan cara kamu bekerja.',
    tone: 'paper',
  },
  {
    label: 'The Mission',
    headline: ['Misimu'],
    body: 'Satu atau dua kalimat tentang apa yang ingin kamu capai lewat karya.',
    tone: 'brand',
  },
  {
    label: 'The Next',
    headline: ['Arah', 'berikutnya'],
    body: 'Apa yang sedang kamu pelajari atau kejar setelah ini.',
    tone: 'ink',
  },
]
import {
  ResidencyHero,
  ResidencyInfo,
  ResidencyVideo,
  ProgramsGrid,
  ResidencyGallery,
  ResidencyCTA,
  ResidencyStructure,
} from '@/components/residencia'
import type { Program } from '@/components/residencia'

const API_URL = process.env.NEXT_PUBLIC_PAYLOAD_API_URL || 'http://localhost:3000/api'

function getMediaUrl(media: unknown): string {
  if (media && typeof media === 'object' && 'url' in media) {
    return (media as { url: string }).url || ''
  }
  return ''
}

function getMediaAlt(media: unknown): string {
  if (media && typeof media === 'object' && 'alt' in media) {
    return (media as { alt: string }).alt || ''
  }
  return ''
}

const fallbackUnifacisa: Program[] = [
  { name: 'Oftalmologia', duration: '3 anos', period: 'Integral' },
  { name: 'Medicina da Família e Comunidade', duration: '2 anos', period: 'Integral' },
  { name: 'Ortopedia e Traumatologia', duration: '3 anos', period: 'Integral' },
  { name: 'Clínica Médica', duration: '2 anos', period: 'Integral' },
  { name: 'Cirurgia Geral', duration: '2 anos', period: 'Integral' },
  { name: 'Dermatologia', duration: '3 anos', period: 'Integral' },
]

const fallbackHelp: Program[] = [
  { name: 'Cirurgia Geral', duration: '2 anos', period: 'Integral' },
  { name: 'Clínica Médica', duration: '2 anos', period: 'Integral' },
  { name: 'Dermatologia', duration: '3 anos', period: 'Integral' },
  { name: 'Medicina da Família e Comunidade', duration: '2 anos', period: 'Integral' },
  { name: 'Oftalmologia', duration: '3 anos', period: 'Integral' },
  { name: 'Ortopedia e Traumatologia', duration: '3 anos', period: 'Integral' },
  { name: 'Pediatria', duration: '3 anos', period: 'Integral' },
  { name: 'Psiquiatria', duration: '4 anos', period: 'Integral' },
]

async function getResidenciaSettings(): Promise<Record<string, unknown> | null> {
  try {
    const res = await fetch(`${API_URL}/globals/residencia-settings`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}

export default async function ResidenciaPage() {
  const data = await getResidenciaSettings()

  const hero = (data?.hero as Record<string, unknown>) || {}
  const info = (data?.info as Record<string, unknown>) || {}
  const video = (data?.video as Record<string, unknown>) || {}
  const progUnifacisa = (data?.programasUnifacisa as Record<string, unknown>) || {}
  const progHelp = (data?.programasHelp as Record<string, unknown>) || {}
  const gallery = (data?.gallery as Record<string, unknown>) || {}
  const cta = (data?.cta as Record<string, unknown>) || {}
  const structure = (data?.structure as Record<string, unknown>) || {}

  const unifacisaPrograms: Program[] = Array.isArray(progUnifacisa.programs) && progUnifacisa.programs.length > 0
    ? progUnifacisa.programs.map((p: Record<string, unknown>) => ({
        name: String(p.name || ''),
        duration: String(p.duration || ''),
        period: String(p.period || ''),
        href: p.href ? String(p.href) : undefined,
      }))
    : fallbackUnifacisa

  const helpPrograms: Program[] = Array.isArray(progHelp.programs) && progHelp.programs.length > 0
    ? progHelp.programs.map((p: Record<string, unknown>) => ({
        name: String(p.name || ''),
        duration: String(p.duration || ''),
        period: String(p.period || ''),
        href: p.href ? String(p.href) : undefined,
      }))
    : fallbackHelp

  const galleryImages = Array.isArray(gallery.images) && gallery.images.length > 0
    ? gallery.images.map((item: Record<string, unknown>) => ({
        url: getMediaUrl(item.image),
        alt: (item.alt as string) || getMediaAlt(item.image) || 'Foto da residência',
      }))
    : undefined

  return (
    <main>
      <ResidencyHero
        title={hero.title ? String(hero.title) : undefined}
      />
      <ResidencyInfo
        overline={info.overline ? String(info.overline) : undefined}
        subtitle={info.subtitle ? String(info.subtitle) : undefined}
        description={info.description ? String(info.description) : undefined}
        whatsappHref={info.whatsappHref ? String(info.whatsappHref) : undefined}
        siteHref={info.siteHref ? String(info.siteHref) : undefined}
        quote={info.quote ? String(info.quote) : undefined}
        author={info.author ? String(info.author) : undefined}
      />
      <ResidencyVideo
        text={video.text ? String(video.text) : undefined}
        backgroundImage={getMediaUrl(video.backgroundImage) || null}
      />
      <ProgramsGrid
        title={progUnifacisa.title ? String(progUnifacisa.title) : 'UNIFACISA/CESED'}
        programs={unifacisaPrograms}
      />
      <ProgramsGrid
        title={progHelp.title ? String(progHelp.title) : 'Fundação Pedro Américo/HELP'}
        programs={helpPrograms}
        variant="purple"
      />
      <ResidencyGallery
        overline={gallery.overline ? String(gallery.overline) : undefined}
        title={gallery.title ? String(gallery.title) : undefined}
        images={galleryImages}
      />
      <ResidencyCTA
        label={cta.label ? String(cta.label) : undefined}
        href={cta.href ? String(cta.href) : undefined}
      />
      <ResidencyStructure
        overline={structure.overline ? String(structure.overline) : undefined}
        title={structure.title ? String(structure.title) : undefined}
        cardTitle={structure.cardTitle ? String(structure.cardTitle) : undefined}
        cardSubtitle={structure.cardSubtitle ? String(structure.cardSubtitle) : undefined}
        backgroundImage={getMediaUrl(structure.backgroundImage) || null}
        disclaimer={structure.disclaimer ? String(structure.disclaimer) : undefined}
      />
    </main>
  )
}

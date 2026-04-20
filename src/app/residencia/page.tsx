import { payloadFindGlobal, mediaUrl } from '@/lib/payload'
import {
  ResidencyHero,
  ResidencyInfo,
  ResidencyVideo,
  ProgramsGrid,
  ResidencyGallery,
  ResidencyStructure,
} from '@/components/residencia'
import type { Program } from '@/components/residencia'

export const dynamic = 'force-dynamic'

function getMediaUrl(media: unknown): string {
  if (media && typeof media === 'object' && 'url' in media) {
    return mediaUrl((media as { url: string }).url) || ''
  }
  return ''
}

function getMediaAlt(media: unknown): string {
  if (media && typeof media === 'object' && 'alt' in media) {
    return (media as { alt: string }).alt || ''
  }
  return ''
}

// Fallback data caso o CMS ainda não tenha sido preenchido
const fallbackUnifacisa: Program[] = [
  { name: 'Oftalmologia', vagas: '2 vagas', duration: '3 anos' },
  { name: 'Medicina da Família e Comunidade', vagas: '2 vagas', duration: '3 anos' },
  { name: 'Ortopedia e Traumatologia', vagas: '2 vagas', duration: '3 anos' },
  { name: 'Clínica Médica', vagas: '2 vagas', duration: '3 anos' },
  { name: 'Cirurgia Geral', vagas: '2 vagas', duration: '3 anos' },
]

const fallbackHelp: Program[] = [
  { name: 'Cirurgia Geral', vagas: '2 vagas', duration: '2 anos' },
  { name: 'Clínica Médica', vagas: '2 vagas', duration: '2 anos' },
  { name: 'Dermatologia', vagas: '1 vaga', duration: '3 anos' },
  { name: 'Medicina da Família e Comunidade', vagas: '2 vagas', duration: '2 anos' },
  { name: 'Oftalmologia', vagas: '2 vagas', duration: '3 anos' },
  { name: 'Ortopedia e Traumatologia', vagas: '2 vagas', duration: '3 anos' },
  { name: 'Pediatria', vagas: '2 vagas', duration: '3 anos' },
  { name: 'Psiquiatria', vagas: '1 vaga', duration: '4 anos' },
]

export default async function ResidenciaPage() {
  let data: Record<string, unknown> | null = null
  try {
    data = await payloadFindGlobal('residencia-settings')
  } catch {
    // fallback to defaults
  }

  const hero = (data?.hero as Record<string, unknown>) || {}
  const info = (data?.info as Record<string, unknown>) || {}
  const video = (data?.video as Record<string, unknown>) || {}
  const progUnifacisa = (data?.programasUnifacisa as Record<string, unknown>) || {}
  const progHelp = (data?.programasHelp as Record<string, unknown>) || {}
  const gallery = (data?.gallery as Record<string, unknown>) || {}
  const cta = (data?.cta as Record<string, unknown>) || {}
  const structure = (data?.structure as Record<string, unknown>) || {}

  // Programas
  const unifacisaPrograms: Program[] = Array.isArray(progUnifacisa.programs) && progUnifacisa.programs.length > 0
    ? progUnifacisa.programs.map((p: Record<string, unknown>) => ({
        name: String(p.name || ''),
        duration: String(p.duration || ''),
        vagas: String(p.vagas || ''),
        href: p.href ? String(p.href) : undefined,
      }))
    : fallbackUnifacisa

  const helpPrograms: Program[] = Array.isArray(progHelp.programs) && progHelp.programs.length > 0
    ? progHelp.programs.map((p: Record<string, unknown>) => ({
        name: String(p.name || ''),
        duration: String(p.duration || ''),
        vagas: String(p.vagas || ''),
        href: p.href ? String(p.href) : undefined,
      }))
    : fallbackHelp

  // Galeria
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
        href={hero.href ? String(hero.href) : undefined}
      />
      <ResidencyInfo
        overline={typeof info.overline === 'string' ? info.overline : undefined}
        subtitle={info.subtitle ? String(info.subtitle) : undefined}
        description={info.description ? String(info.description) : undefined}
        whatsappHref={info.whatsappHref ? String(info.whatsappHref) : undefined}
        siteHref={info.siteHref ? String(info.siteHref) : undefined}
        whatsappLabel={info.whatsappLabel ? String(info.whatsappLabel) : undefined}
        siteLabel={info.siteLabel ? String(info.siteLabel) : undefined}
        quote={info.quote ? String(info.quote) : undefined}
        author={info.author ? String(info.author) : undefined}
      />
      <ResidencyVideo
        text={video.text ? String(video.text) : undefined}
        backgroundImage={getMediaUrl(video.backgroundImage) || null}
        videoUrl={video.videoUrl ? mediaUrl(String(video.videoUrl)) : null}
      />
      <hr style={{ border: 'none', borderTop: '1px solid rgba(135, 135, 135, 0.5)', margin: '0 var(--content-padding, 128px)' }} />
      <ProgramsGrid
        title={progUnifacisa.title ? String(progUnifacisa.title) : 'UNIFACISA/CESED'}
        programs={unifacisaPrograms}
      />
      <ProgramsGrid
        title={progHelp.title ? String(progHelp.title) : 'Fundação Pedro Américo/HELP'}
        programs={helpPrograms}
        variant="purple"
      />
      <hr style={{ border: 'none', borderTop: '1px solid rgba(135, 135, 135, 0.5)', margin: '0 var(--content-padding, 128px)' }} />
      <ResidencyGallery
        overline={gallery.overline ? String(gallery.overline) : undefined}
        title={gallery.title ? String(gallery.title) : undefined}
        images={galleryImages}
        ctaLabel={cta.label ? String(cta.label) : undefined}
        ctaHref={cta.href ? String(cta.href) : undefined}
      />
      <ResidencyStructure
        overline={structure.overline ? String(structure.overline) : undefined}
        title={structure.title ? String(structure.title) : undefined}
        cardTitle={structure.cardTitle ? String(structure.cardTitle) : undefined}
        cardSubtitle={structure.cardSubtitle ? String(structure.cardSubtitle) : undefined}
        backgroundImage={getMediaUrl(structure.backgroundImage) || null}
        videoUrl={structure.videoUrl ? mediaUrl(String(structure.videoUrl)) : null}
        disclaimer={structure.disclaimer ? String(structure.disclaimer) : undefined}
      />
    </main>
  )
}

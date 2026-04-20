import { payloadFindGlobal, mediaUrl } from '@/lib/payload'
import { AboutHero, PeopleGrid } from '@/components/sobre-nos'
import type { TeamMember } from '@/components/sobre-nos'
import { AcademicVision } from '@/components/curso/AcademicVision'
import { Mission } from '@/components/home/Mission'
import { CourseNumbers } from '@/components/curso/CourseNumbers'
import { Structure } from '@/components/curso/Structure'
import { HospitalBanner } from '@/components/curso/HospitalBanner'
import { Partnerships } from '@/components/home/Partnerships'
import { NewsSection } from '@/components/home/NewsSection'
import { VestibularCTA } from '@/components/home/VestibularCTA'

export const dynamic = 'force-dynamic'

function getMediaUrl(media: unknown): string {
  if (media && typeof media === 'object' && 'url' in media) {
    return mediaUrl((media as { url: string }).url) || ''
  }
  return ''
}

export default async function SobreNosPage() {
  let data: Record<string, unknown> | null = null
  try {
    data = await payloadFindGlobal('sobre-nos-settings')
  } catch {
    // fallback to defaults
  }

  const hero = (data?.hero as Record<string, unknown>) || {}
  const intro = (data?.intro as Record<string, unknown>) || {}
  const mission = (data?.mission as Record<string, unknown>) || {}
  const team = (data?.team as Record<string, unknown>) || {}
  const stats = (data?.stats as Record<string, unknown>) || {}
  const structure = (data?.structure as Record<string, unknown>) || {}
  const partnerships = (data?.partnerships as Record<string, unknown>) || {}
  const ecosystem = (data?.ecosystem as Record<string, unknown>) || {}
  const cta = (data?.cta as Record<string, unknown>) || {}

  const teamMembers: TeamMember[] = Array.isArray(team.members) && team.members.length > 0
    ? team.members.map((m: Record<string, unknown>) => ({
        name: String(m.name || ''),
        role: m.role ? String(m.role) : undefined,
        imageSrc: getMediaUrl(m.image) || undefined,
      }))
    : []

  const statsItems = Array.isArray(stats.items) && stats.items.length > 0
    ? stats.items.map((s: Record<string, unknown>) => ({
        value: String(s.value || ''),
        description: String(s.description || ''),
      }))
    : [
        { value: '97%', description: 'dos formandos conquistaram posições de destaque no mercado' },
        { value: '4.800', description: 'alunos formados até hoje' },
        { value: '58', description: 'anos de história' },
      ]

  const structureCards = Array.isArray(structure.cards) && structure.cards.length > 0
    ? structure.cards.map((c: Record<string, unknown>) => ({
        label: String(c.label || ''),
        image: c.image ? { url: getMediaUrl(c.image) } : null,
        href: c.href ? String(c.href) : '#',
      }))
    : []

  const partnerLogos = Array.isArray(partnerships.logos) && partnerships.logos.length > 0
    ? partnerships.logos.map((l: Record<string, unknown>) => ({
        image: { url: getMediaUrl(l.image) },
        name: l.name ? String(l.name) : undefined,
      }))
    : undefined

  const partnerNews = Array.isArray(partnerships.news) && partnerships.news.length > 0
    ? partnerships.news.map((n: Record<string, unknown>) => ({
        headline: String(n.headline || ''),
        href: n.href ? String(n.href) : undefined,
      }))
    : undefined

  const ecoLeftItems = Array.isArray(ecosystem.leftItems) && ecosystem.leftItems.length > 0
    ? ecosystem.leftItems.map((item: Record<string, unknown>) => ({
        date: '',
        headline: String(item.text || ''),
        href: item.href ? String(item.href) : undefined,
      }))
    : undefined

  return (
    <main>
      <AboutHero
        heading={hero.heading ? String(hero.heading) : undefined}
        backgroundImage={getMediaUrl(hero.backgroundImage) || null}
        videoUrl={hero.videoUrl ? mediaUrl(String(hero.videoUrl)) : '/videos/sobre-nos-hero.mp4'}
      />

      <div style={{ overflow: 'hidden' }} className="sobre-nos-intro">
        <style>{`.sobre-nos-intro > section > div:first-child { display: none; }`}</style>
        <AcademicVision
          title={intro.title ? String(intro.title) : 'Transformando talentos em protagonistas do futuro'}
          descriptionLeft={intro.description ? String(intro.description) : 'A Unifacisa é uma instituição de ensino superior que acredita no poder transformador da educação. Há mais de duas décadas, estamos comprometidos com a formação de profissionais preparados para os desafios do mercado e pelo desenvolvimento da região, com uma proposta pedagógica inovadora e práticas que vão além da sala de aula.'}
          descriptionRight={intro.cardOverline ? String(intro.cardOverline) : 'Estudar na UNIFACISA é o diferencial que vai transformar sua carreira e sua vida pessoal. A estrutura é a melhor e a tecnologia mais avançada foram desenvolvidas para otorgar resultados reais.'}
          testimonialAuthor={intro.cardAuthor ? String(intro.cardAuthor) : 'Igor Ingênuo, estudante do 4º período de Administração'}
        />
      </div>

      <div className="sobre-nos-mission">
        <style>{`.sobre-nos-mission a[class*="visionBtn"] { display: none !important; }`}</style>
        <Mission
          quote={mission.quote ? String(mission.quote) : undefined}
          author={mission.author ? String(mission.author) : undefined}
          buttonLabel=""
          buttonHref=""
        />
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid rgba(135, 135, 135, 0.5)', margin: '0 var(--content-padding, 128px)' }} />
      <PeopleGrid
        title={team.title ? String(team.title) : undefined}
        members={teamMembers}
      />

      <CourseNumbers
        stats={statsItems}
        imageSrc={stats.image ? getMediaUrl(stats.image) : ''}
        imageCaption={stats.imageCaption ? String(stats.imageCaption) : 'Hospital Help: Uma parceria que transforma a formação médica e atende a região de Campina Grande'}
      />

      <Structure
        title={structure.title ? String(structure.title) : 'Estrutura de ensino realmente superior'}
        items={structureCards.map(c => ({ name: c.label, imageSrc: c.image?.url || undefined }))}
      />
      <HospitalBanner
        title={structure.bannerTitle ? String(structure.bannerTitle) : 'Estude no hospital escola referência do nordeste'}
        linkText={structure.bannerSubtitle ? String(structure.bannerSubtitle) : 'Conheça o Hospital Help'}
        linkHref="#"
        imageSrc={structure.bannerImage ? getMediaUrl(structure.bannerImage) : ''}
        videoUrl={structure.bannerVideoUrl ? mediaUrl(String(structure.bannerVideoUrl)) : '/videos/hospital-help.mp4'}
        disclaimer={structure.disclaimer ? String(structure.disclaimer) : 'Aviso Legal: O uso exclusivo do Hospital Help é uma colaboração técnica entre a fundação Pedro Américo e a Unifacisa'}
      />

      <hr style={{ border: 'none', borderTop: '1px solid rgba(135, 135, 135, 0.5)', margin: '0 var(--content-padding, 128px)' }} />
      <Partnerships
        overline={partnerships.overline ? String(partnerships.overline) : undefined}
        title={partnerships.title ? String(partnerships.title) : 'Parcerias que ampliam suas oportunidades'}
        description={partnerships.description ? String(partnerships.description) : undefined}
        logos={partnerLogos}
        news={partnerNews}
        buttonLabel={partnerships.buttonLabel ? String(partnerships.buttonLabel) : undefined}
        buttonHref={partnerships.buttonHref ? String(partnerships.buttonHref) : undefined}
        previewOverline=""
        previewCards={[]}
      />

      <NewsSection
        newsOverline={ecosystem.title ? String(ecosystem.title) : 'Nosso ecossistema em movimento'}
        newsImage={ecosystem.leftImage ? { url: getMediaUrl(ecosystem.leftImage) } : undefined}
        newsItems={ecoLeftItems}
      />

      <VestibularCTA
        headline={cta.headline ? String(cta.headline) : undefined}
        vestibularInfo={cta.vestibularInfo ? String(cta.vestibularInfo) : undefined}
        cardOverline={cta.cardOverline ? String(cta.cardOverline) : undefined}
        cardTitle={cta.cardTitle ? String(cta.cardTitle) : undefined}
        greenBtnLabel={cta.greenBtnLabel ? String(cta.greenBtnLabel) : undefined}
        greenBtnHref={cta.greenBtnHref ? String(cta.greenBtnHref) : undefined}
        outlineBtnLabel={cta.outlineBtnLabel ? String(cta.outlineBtnLabel) : undefined}
        outlineBtnHref={cta.outlineBtnHref ? String(cta.outlineBtnHref) : undefined}
      />
    </main>
  )
}

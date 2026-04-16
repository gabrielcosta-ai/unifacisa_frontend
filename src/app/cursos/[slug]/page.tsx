import { payloadFind } from '@/lib/payload'
import { notFound } from 'next/navigation'

import { HeroSection } from '@/components/curso/HeroSection'
import { CourseInfoCard } from '@/components/curso/CourseInfoCard'
import { AISummary } from '@/components/curso/AISummary'
import { PhotoGallery } from '@/components/curso/PhotoGallery'
import { AcademicVision } from '@/components/curso/AcademicVision'
import { CourseVideo } from '@/components/curso/CourseVideo'
import { CourseNumbers } from '@/components/curso/CourseNumbers'
import { Curriculum } from '@/components/curso/Curriculum'
import { Structure } from '@/components/curso/Structure'
import { HospitalBanner } from '@/components/curso/HospitalBanner'
import { Faculty } from '@/components/curso/Faculty'
import { CTASection } from '@/components/curso/CTASection'
import { RelatedCourses } from '@/components/curso/RelatedCourses'
import { SideNav } from '@/components/curso/SideNav'

type Props = {
  params: Promise<{ slug: string }>
}

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

export const dynamic = 'force-dynamic'

export default async function CursoPage({ params }: Props) {
  const { slug } = await params

  const data = await payloadFind('courses', {
    'where[slug][equals]': slug,
    'where[status][equals]': 'publicado',
    limit: '1',
    depth: '2',
  })

  const course = data.docs[0]
  if (!course) notFound()

  // Preparar dados dos professores (vem como relationship populated)
  const coordinatorData = course.coordinator && typeof course.coordinator === 'object'
    ? {
        name: course.coordinator.name,
        email: course.coordinator.email || undefined,
        imageSrc: getMediaUrl(course.coordinator.photo),
      }
    : { name: '' }

  const professorsData = Array.isArray(course.professors)
    ? course.professors
        .filter((p: unknown): p is Record<string, unknown> & { name: string } => typeof p === 'object' && p !== null && 'name' in (p as Record<string, unknown>))
        .map((p: Record<string, unknown>) => ({
          name: p.name as string,
          role: (p.role as string) || '',
        }))
    : []

  // Preparar dados de estrutura
  const structuresData = Array.isArray(course.structures)
    ? course.structures
        .filter((s: unknown): s is Record<string, unknown> & { name: string } => typeof s === 'object' && s !== null && 'name' in (s as Record<string, unknown>))
        .map((s: Record<string, unknown>) => ({
          name: s.name as string,
          imageSrc: getMediaUrl(s.image),
        }))
    : []

  // Preparar galeria
  const galleryData = Array.isArray(course.gallery)
    ? course.gallery.map((item: Record<string, unknown>) => ({
        src: getMediaUrl(item.image),
        alt: (getMediaAlt(item.image) || 'Foto do curso'),
      }))
    : []

  // Preparar modalidade/destaques/investimento
  const modalityLabels: Record<string, string> = { presencial: 'Presencial', semipresencial: 'Semipresencial', ead: 'EAD' }
  const periodLabels: Record<string, string> = { integral: 'Periodo Integral', parcial: 'Periodo Parcial' }
  const durationLabel = course.duration ? `${course.duration} ${Number(course.duration) === 1 ? 'ano' : 'anos'}` : ''

  const modalidade = [
    course.modality ? { label: 'Modalidade', value: modalityLabels[course.modality] || course.modality } : null,
    durationLabel ? { label: 'Duracao', value: durationLabel } : null,
    course.period ? { label: 'Periodo', value: periodLabels[course.period] || course.period } : null,
  ].filter(Boolean) as { label: string; value: string }[]

  const destaques = Array.isArray(course.overview?.highlights)
    ? course.overview.highlights.map((h: { label: string }) => ({ label: h.label, value: h.label }))
    : []

  const investimento = course.overview?.investmentLabel
    ? [{ label: 'Investimento', value: course.overview.investmentLabel, outlined: true }]
    : []

  const formasIngresso = Array.isArray(course.admissionLinks)
    ? course.admissionLinks.map((l: { label: string; href: string }) => ({ label: l.label, href: l.href }))
    : []

  const vestibularDates = Array.isArray(course.vestibulares)
    ? course.vestibulares.map((v: { date: string; href?: string }) => ({ date: v.date, href: v.href || '#' }))
    : []

  const stats = Array.isArray(course.stats)
    ? course.stats.map((s: { value: string; description: string }) => ({ value: s.value, description: s.description }))
    : []

  const semesters = Array.isArray(course.semesters)
    ? course.semesters.map((s: { name: string; subjects?: Array<{ name: string; hours?: string }> }) => ({
        name: s.name,
        subjects: Array.isArray(s.subjects)
          ? s.subjects.map((sub: { name: string; hours?: string }) => ({ name: sub.name, hours: sub.hours || '' }))
          : [],
      }))
    : []

  // Cursos relacionados
  const courseTypeLabels: Record<string, string> = { graduacao: 'graduacao', 'pos-graduacao': 'pos graduacao' }
  const relatedCoursesData = Array.isArray(course.relatedCourses)
    ? course.relatedCourses
        .filter((c: unknown): c is Record<string, unknown> & { name: string; slug: string } => typeof c === 'object' && c !== null && 'name' in (c as Record<string, unknown>))
        .map((c: Record<string, unknown>) => ({
          name: c.name as string,
          type: courseTypeLabels[c.type as string] || (c.type as string) || '',
          href: `/cursos/${c.slug}`,
        }))
    : []

  const typeLabels: Record<string, string> = { graduacao: 'GRADUACAO', 'pos-graduacao': 'POS GRADUACAO' }
  const breadcrumbLabel = typeLabels[course.type] || 'GRADUACAO'

  return (
    <>
      <main id="content">
      <SideNav />

      <HeroSection
        courseName={course.name}
        subtitle={course.hero?.subtitle || ''}
        admissionsOpen={course.hero?.admissionsOpen ?? false}
        heroImage={getMediaUrl(course.hero?.heroImage)}
        vestibularDates={vestibularDates}
        whatsappLink={course.whatsappLink || undefined}
        siteLink={course.siteLink || undefined}
      />

      <section id="experiencia">
        <CourseInfoCard
          headline={course.overview?.headline || ''}
          modalidade={modalidade}
          destaques={destaques}
          investimento={investimento}
          formasIngresso={formasIngresso}
          mecNote={course.overview?.mecGrade || undefined}
        />
      </section>

      <AISummary />

      <PhotoGallery
        title="Sinta a atmosfera da sua formacao"
        photos={galleryData.length > 0 ? galleryData : [
          { src: '', alt: 'Foto 1' },
          { src: '', alt: 'Foto 2' },
          { src: '', alt: 'Foto 3' },
        ]}
      />

      <section id="abordagem">
        <AcademicVision
          title={course.academicVision?.title || ''}
          descriptionLeft={course.academicVision?.descriptionLeft || ''}
          descriptionRight={course.academicVision?.descriptionRight || ''}
          testimonialAuthor={course.academicVision?.testimonialAuthor || undefined}
          whatsappLink={course.whatsappLink || undefined}
          siteLink={course.siteLink || undefined}
        />
      </section>

      {(course.video?.title || course.video?.url) && (
        <CourseVideo
          title={course.video.title || ''}
          imageSrc={getMediaUrl(course.video.thumbnail)}
        />
      )}

      {stats.length > 0 && (
        <section id="numeros">
          <CourseNumbers
            stats={stats}
            imageSrc={getMediaUrl(course.statsImage)}
            imageCaption={course.statsImageCaption || undefined}
          />
        </section>
      )}

      {semesters.length > 0 && (
        <section id="matriz">
          <Curriculum
            title="Descubra o que voce vai aprender"
            semesters={semesters}
          />
        </section>
      )}

      {structuresData.length > 0 && (
        <section id="estrutura">
          <Structure
            title="Estrutura que eleva o padrao da sua formacao"
            items={structuresData}
          />
        </section>
      )}

      {course.featureBanner?.title && (
        <HospitalBanner
          title={course.featureBanner.title}
          linkText={course.featureBanner.linkText || ''}
          linkHref={course.featureBanner.linkHref || '#'}
          imageSrc={getMediaUrl(course.featureBanner.image)}
          disclaimer={course.featureBanner.disclaimer || undefined}
        />
      )}

      {coordinatorData.name && (
        <section id="corpo-docente">
          <Faculty
            title="Aprenda com quem e referencia"
            coordinator={coordinatorData}
            professors={professorsData}
          />
        </section>
      )}

      <CTASection
        headline="Pronto para fazer parte? Inscreva-se agora no vestibular Unifacisa."
        vestibularDates={vestibularDates}
        vestibularInfo={`Vestibular ${course.name}: Provas 16 e 22 de maio`}
        siteLink={course.siteLink || undefined}
      />

      <RelatedCourses
        courses={relatedCoursesData}
        programs={[
          { name: 'Acesse uma residencia na melhor estrutura da Paraiba', type: 'residencia', href: '#', tag: 'Ver vagas' },
          { name: 'Acesse uma residencia na melhor estrutura da Paraiba', type: 'fellowship', href: '#', tag: 'Ver vagas' },
        ]}
        ctaText="Veja agora todos os cursos de saude"
        ctaHref="/cursos"
      />
    </main>
    </>
  )
}

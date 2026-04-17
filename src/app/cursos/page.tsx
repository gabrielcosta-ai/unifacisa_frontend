import { payloadFind } from '@/lib/payload'

import { CoursesHero } from '@/components/cursos/CoursesHero'
import { CoursesGrid, type CourseItem } from '@/components/cursos/CoursesGrid'

export const dynamic = 'force-dynamic'

export default async function CursosPage() {
  const data = await payloadFind('courses', {
    'where[status][equals]': 'publicado',
    'where[type][equals]': 'graduacao',
    limit: '200',
    depth: '1',
  })
  const courses = data.docs

  // Ordem fixa das áreas conforme wireframe
  const AREA_ORDER = ['Engenharias', 'Negócios & Justiça', 'Saúde', 'Tecnologia e Design']

  const courseItems: CourseItem[] = []

  for (const course of courses) {
    const areaName =
      course.area && typeof course.area === 'object' && 'name' in course.area
        ? (course.area as { name: string }).name
        : 'Outros'

    courseItems.push({
      name: course.name,
      slug: course.slug,
      modality: course.modality,
      period: course.period,
      duration: course.duration,
      areaName,
    })
  }

  // Usar ordem fixa do wireframe, adicionar áreas extras no final
  const areaSet = new Set(courseItems.map(c => c.areaName))
  const areas = [
    ...AREA_ORDER.filter(a => areaSet.has(a)),
    ...Array.from(areaSet).filter(a => !AREA_ORDER.includes(a)).sort((a, b) => a.localeCompare(b, 'pt-BR')),
  ]

  // Try to get vestibular dates from the first course that has them
  const vestibularDates: { date: string; href: string }[] = []
  for (const course of courses) {
    if (Array.isArray(course.vestibulares) && course.vestibulares.length > 0) {
      for (const v of course.vestibulares) {
        const entry = { date: v.date, href: v.href || '#' }
        if (!vestibularDates.some((d: { date: string }) => d.date === entry.date)) {
          vestibularDates.push(entry)
        }
      }
    }
  }

  // Get first available whatsapp / site links
  const whatsappLink = courses.find((c: { whatsappLink?: string }) => c.whatsappLink)?.whatsappLink || undefined
  const siteLink = courses.find((c: { siteLink?: string }) => c.siteLink)?.siteLink || undefined

  return (
    <>
      <main id="content">
        <CoursesHero
          vestibularDates={vestibularDates}
          whatsappLink={whatsappLink}
          siteLink={siteLink}
        />

        <CoursesGrid courses={courseItems} areas={areas} />
      </main>
    </>
  )
}

import { payloadFind } from '@/lib/payload'

import { CoursesHero } from '@/components/cursos/CoursesHero'
import { CoursesGrid, type CourseItem } from '@/components/cursos/CoursesGrid'

export const dynamic = 'force-dynamic'

export default async function CursosPage() {
  const data = await payloadFind('courses', {
    'where[status][equals]': 'publicado',
    limit: '200',
    depth: '1',
  })
  const courses = data.docs

  // Extract unique area names (from the taxonomia relationship) and build course items
  const areaSet = new Set<string>()
  const courseItems: CourseItem[] = []

  for (const course of courses) {
    const areaName =
      course.area && typeof course.area === 'object' && 'name' in course.area
        ? (course.area as { name: string }).name
        : 'Outros'

    areaSet.add(areaName)

    courseItems.push({
      name: course.name,
      slug: course.slug,
      modality: course.modality,
      period: course.period,
      duration: course.duration,
      areaName,
    })
  }

  // Sort areas alphabetically but keep a stable order
  const areas = Array.from(areaSet).sort((a, b) => a.localeCompare(b, 'pt-BR'))

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

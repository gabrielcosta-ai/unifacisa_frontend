'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import styles from './CoursesGrid.module.css'
import { CoursesFilters, type ActiveFilters } from './CoursesFilters'

export type CourseItem = {
  name: string
  slug: string
  modality: string
  period: string
  duration: string
  areaName: string
}

type CoursesGridProps = {
  courses: CourseItem[]
  areas: string[]
}

export function CoursesGrid({ courses, areas }: CoursesGridProps) {
  const [filters, setFilters] = useState<ActiveFilters>({
    modality: [],
    period: [],
    duration: [],
  })

  const handleFilterChange = useCallback((newFilters: ActiveFilters) => {
    setFilters(newFilters)
  }, [])

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      if (filters.modality.length > 0 && !filters.modality.includes(course.modality)) {
        return false
      }
      if (filters.period.length > 0 && !filters.period.includes(course.period)) {
        return false
      }
      if (filters.duration.length > 0 && !filters.duration.includes(course.duration)) {
        return false
      }
      return true
    })
  }, [courses, filters])

  const coursesByArea = useMemo(() => {
    const map: Record<string, CourseItem[]> = {}
    for (const area of areas) {
      map[area] = []
    }
    for (const course of filteredCourses) {
      const area = course.areaName
      if (!map[area]) {
        map[area] = []
      }
      map[area].push(course)
    }
    return map
  }, [filteredCourses, areas])

  // Use the provided areas order, but only show columns that have courses (or always had courses before filtering)
  const displayAreas = areas.length > 0 ? areas : Object.keys(coursesByArea)

  return (
    <>
      <CoursesFilters onFilterChange={handleFilterChange} />

      <section id="courses" className={styles.section}>
        <div className={styles.grid}>
          {displayAreas.map((area) => (
            <div key={area} className={styles.column}>
              <h3 className={styles.columnHeader}>{area}</h3>
              <ul className={styles.courseList}>
                {(coursesByArea[area] || []).length > 0 ? (
                  (coursesByArea[area] || []).map((course) => (
                    <li key={course.slug}>
                      <Link href={`/cursos/${course.slug}`} className={styles.courseLink}>
                        {course.name}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className={styles.empty}>Nenhum curso encontrado</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

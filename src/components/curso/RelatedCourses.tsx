import styles from './RelatedCourses.module.css'

type CourseCard = {
  name: string
  type: string
  imageSrc?: string
  href: string
}

type StructureCard = {
  name: string
  type: string
  imageSrc?: string
  href: string
  tag: string
}

type RelatedCoursesProps = {
  courses: CourseCard[]
  programs: StructureCard[]
  ctaText?: string
  ctaHref?: string
}

function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4 10h12" stroke="#000" strokeWidth="2" />
      <path d="M12 4l6 6-6 6" stroke="#000" strokeWidth="2" fill="none" />
    </svg>
  )
}

function ArrowIconWhite() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4 10h12" stroke="#000" strokeWidth="2" />
      <path d="M12 4l6 6-6 6" stroke="#000" strokeWidth="2" fill="none" />
    </svg>
  )
}

export function RelatedCourses({ courses, programs, ctaText, ctaHref }: RelatedCoursesProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.headers}>
          <span className={styles.headerPill}>Cursos Relacionados</span>
          {programs.length > 0 && <span className={styles.headerPill}>Programas Relacionados</span>}
        </div>

        <div className={styles.gridWrapper}>
          {/* Left: Courses + CTA */}
          <div className={styles.coursesColumn}>
            {courses.slice(0, 2).map((course, i) => (
              <a key={i} href={course.href} className={styles.courseCard} style={course.imageSrc ? { backgroundImage: `url(${course.imageSrc})` } : undefined}>
                <span className={styles.courseType}>{course.type}</span>
                <div className={styles.courseBottom}>
                  <span className={styles.courseName}>{course.name}</span>
                  <span className={styles.courseArrow}><ArrowIcon /></span>
                </div>
              </a>
            ))}

            {courses[2] && (
              <a href={courses[2].href} className={styles.courseCard} style={courses[2].imageSrc ? { backgroundImage: `url(${courses[2].imageSrc})` } : undefined}>
                <span className={styles.courseType}>{courses[2].type}</span>
                <div className={styles.courseBottom}>
                  <span className={styles.courseName}>{courses[2].name}</span>
                  <span className={styles.courseArrow}><ArrowIcon /></span>
                </div>
              </a>
            )}

            {ctaText && (
              <a href={ctaHref || '#'} className={styles.ctaCard}>
                <span className={styles.ctaText}>{ctaText}</span>
                <span className={styles.ctaArrow}><ArrowIconWhite /></span>
              </a>
            )}
          </div>

          {/* Right: Programs */}
          {programs.length > 0 && (
            <div className={styles.programsColumn}>
              {programs.map((program, i) => (
                <a key={i} href={program.href} className={styles.programCard} style={program.imageSrc ? { backgroundImage: `linear-gradient(180deg, rgba(1,83,255,0) 58.21%, rgba(0,0,0,0.4) 100%), url(${program.imageSrc})` } : undefined}>
                  <span className={styles.courseType}>{program.type}</span>
                  <div className={styles.programBottom}>
                    <span className={styles.programName}>{program.name}</span>
                    <span className={styles.programTag}>{program.tag}</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

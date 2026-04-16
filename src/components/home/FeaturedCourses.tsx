import styles from './FeaturedCourses.module.css'

const courses = [
  {
    area: 'Saúde',
    course: 'Medicina',
    pillClass: 'coursePillBlue' as const,
    bgImage: '/images/home/aluna-sorrindo-tablet.png',
  },
  {
    area: 'Negócios',
    course: 'Administração',
    pillClass: 'coursePillOrange' as const,
    bgImage: '/images/home/sala-estudo-colaborativa.png',
  },
  {
    area: 'Tecnologia',
    course: 'Sistemas de Informação',
    pillClass: 'coursePillPurple' as const,
    bgImage: '/images/home/laboratorio-metodologia-inovadora.png',
  },
]

export function FeaturedCourses() {
  return (
    <section className={styles.section}>
      <p className={styles.overline}>Cursos em destaque</p>

      <div className={styles.grid}>
        {courses.map((item) => (
          <div key={item.course}>
            <div
              className={styles.card}
              style={{ backgroundImage: `url(${item.bgImage})` }}
            >
              <div className={styles.cardOverlay}>
                <div className={styles.cardTop}>
                  <span className={styles.areaName}>{item.area}</span>
                  <span className={styles.graduationPill}>Graduação</span>
                  <span className={styles.alumniPill}>Alumni Stories</span>
                </div>

                <div className={styles.cardBottom}>
                  <span className={`${styles.coursePill} ${styles[item.pillClass]}`}>
                    {item.course}
                  </span>
                  <button className={styles.arrowBtn} aria-label={`Ver ${item.course}`}>
                    <svg
                      className={styles.arrowIcon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Play icon below card */}
            <svg className={styles.playIcon} viewBox="0 0 33 40" fill="currentColor">
              <path d="M33 20L0 40V0L33 20Z" />
            </svg>
          </div>
        ))}
      </div>
    </section>
  )
}

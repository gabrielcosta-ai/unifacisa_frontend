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
          <div
            key={item.course}
            className={styles.card}
            style={{ backgroundImage: `url(${item.bgImage})` }}
          >
            <div className={styles.cardOverlay}>
              <div className={styles.cardTop}>
                <span className={styles.areaName}>{item.area}</span>
                <span className={styles.graduationPill}>Graduação</span>
              </div>

              <div className={styles.cardBottom}>
                <span className={`${styles.coursePill} ${styles[item.pillClass]}`}>
                  {item.course}
                </span>
                <span className={styles.arrowBtn} aria-label={`Ver ${item.course}`}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12" stroke="#000" strokeWidth="2" />
                    <path d="M12 4l6 6-6 6" stroke="#000" strokeWidth="2" fill="none" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

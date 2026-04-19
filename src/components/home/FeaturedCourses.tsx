import styles from './FeaturedCourses.module.css'

interface FeaturedCoursesProps {
  overline?: string
  courses?: Array<{
    area: string
    courseName: string
    pillColor?: string
    image?: { url: string } | null
    href?: string
  }>
}

const defaultFallbackImages: Record<string, string> = {
  Medicina: '/images/home/featured-saude.jpg',
  Administração: '/images/home/featured-negocios.jpg',
  'Sistemas de Informação': '/images/home/featured-tecnologia.jpg',
}

const defaultCourses = [
  { area: 'Saúde', courseName: 'Medicina', pillColor: '#B9DFFF', image: null, href: '#' },
  { area: 'Negócios', courseName: 'Administração', pillColor: '#FFD5A9', image: null, href: '#' },
  { area: 'Tecnologia', courseName: 'Sistemas de Informação', pillColor: '#F0D8FF', image: null, href: '#' },
]

const imgSrc = (media: any, fallback: string) => media?.url || fallback

export function FeaturedCourses({
  overline = 'Cursos em destaque',
  courses,
}: FeaturedCoursesProps) {
  const items = courses ?? defaultCourses

  return (
    <section className={styles.section}>
      <p className={styles.overline}>{overline}</p>

      <div className={styles.grid}>
        {items.map((item) => {
          const fallbackImage = defaultFallbackImages[item.courseName] || '/images/home/aluna-sorrindo-tablet.png'
          const bgImage = imgSrc(item.image, fallbackImage)

          return (
            <a
              key={item.courseName}
              href={item.href || '#'}
              className={styles.card}
              style={{ backgroundImage: `url(${bgImage})` }}
            >
              <div className={styles.cardOverlay}>
                <div className={styles.cardTop}>
                  <span className={styles.areaName}>{item.area}</span>
                  <span className={styles.graduationPill}>Graduação</span>
                </div>

                <div className={styles.cardBottom}>
                  <span
                    className={styles.coursePill}
                    style={{ backgroundColor: item.pillColor || '#B9DFFF' }}
                  >
                    {item.courseName}
                  </span>
                  <span className={styles.arrowBtn} aria-label={`Ver ${item.courseName}`}>
                    <svg width="28" height="28" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10h12" stroke="#000" strokeWidth="2" />
                      <path d="M12 4l6 6-6 6" stroke="#000" strokeWidth="2" fill="none" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}

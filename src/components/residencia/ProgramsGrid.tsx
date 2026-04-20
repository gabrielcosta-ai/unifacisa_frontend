import styles from './ProgramsGrid.module.css'

export interface Program {
  name: string
  vagas: string
  duration: string
  href?: string
}

interface ProgramsGridProps {
  title?: string
  programs?: Program[]
  variant?: 'blue' | 'purple'
}

export function ProgramsGrid({ title, programs = [], variant = 'blue' }: ProgramsGridProps) {
  const isPurple = variant === 'purple'

  return (
    <section className={styles.section}>
      <h2 className={`${styles.title} ${isPurple ? styles.titlePurple : ''}`}>{title}</h2>
      <div className={styles.grid}>
        {programs.map((program) => (
          <div key={program.name} className={`${styles.card} ${isPurple ? styles.cardPurple : ''}`}>
            <a href={program.href || '#'} className={styles.programName}>
              {program.name}
            </a>
            <div className={styles.pills}>
              <span className={styles.pill}>
                <svg className={styles.pillIcon} viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                {program.vagas}
              </span>
              <span className={styles.pill}>
                <svg className={styles.pillIcon} viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {program.duration}
              </span>
            </div>
            <a href={program.href || '#'} className={styles.arrowButton} aria-label={`Ver ${program.name}`}>
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <path d="M0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32Z" fill="white"/>
                <path d="M41.9136 38.9609C42.8857 38.9698 43.6663 38.1887 43.6579 37.2167L43.6919 21.4888C43.683 20.5165 42.8877 19.7213 41.9154 19.7124L26.0852 19.7446C25.1133 19.7361 24.3321 20.5167 24.341 21.4888C24.3499 22.4608 25.1133 23.1848 26.0852 23.1941L37.6976 23.1941L20.9397 39.952C20.2585 40.6332 20.2687 41.7479 20.9625 42.4417C21.6563 43.1355 22.771 43.1457 23.4522 42.4645L40.2101 25.7066L40.2101 37.2167C40.2194 38.1887 40.9416 38.9521 41.9136 38.9609Z" fill="#0153FF"/>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

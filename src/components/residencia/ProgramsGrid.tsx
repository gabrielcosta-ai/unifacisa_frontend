import styles from './ProgramsGrid.module.css'

export interface Program {
  name: string
  duration: string
  period: string
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
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {program.duration}
              </span>
              <span className={styles.pill}>
                <svg className={styles.pillIcon} viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {program.period}
              </span>
            </div>
            <button className={styles.arrowButton} aria-label={`Ver ${program.name}`}>
              <span className={styles.arrowIcon}>&rarr;</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

import styles from './Faculty.module.css'

type Professor = {
  name: string
  role?: string
  email?: string
  imageSrc?: string
}

type FacultyProps = {
  title: string
  coordinator: Professor
  professors: Professor[]
}

export function Faculty({ title, coordinator, professors }: FacultyProps) {
  return (
    <section className={styles.section}>
      <p className={styles.overline}>corpo docente</p>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.inner}>
        {/* Coordinator card */}
        <div className={styles.coordinatorCard}>
          <div
            className={styles.coordinatorPhoto}
            style={coordinator.imageSrc ? { backgroundImage: `url(${coordinator.imageSrc})` } : undefined}
          />
          <div className={styles.coordinatorInfo}>
            <span className={styles.coordinatorBadge}>Coordenação</span>
            <h3 className={styles.coordinatorName}>{coordinator.name}</h3>
            {coordinator.email && (
              <a href={`mailto:${coordinator.email}`} className={styles.coordinatorEmail}>
                Fale por email
              </a>
            )}
          </div>
        </div>

        {/* Professors list */}
        <div className={styles.professorsList}>
          <span className={styles.othersLabel}>outros docentes em destaque</span>
          <div className={styles.professorsItems}>
            {professors.map((prof, i) => (
              <div key={i} className={styles.professorItem}>
                <span className={styles.professorName}>
                  {prof.role && <span className={styles.professorRole}>{prof.role} </span>}
                  <span className={styles.professorNameBold}>{prof.name}</span>
                </span>
                <button className={styles.arrowBtn} aria-label="Ver perfil">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12" stroke="#FFFFFF" strokeWidth="2" />
                    <path d="M12 4l6 6-6 6" stroke="#FFFFFF" strokeWidth="2" fill="none" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import styles from './AISummary.module.css'

export function AISummary() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.left}>
          <span className={styles.icon}>✦</span>
          <span className={styles.text}>Resuma essa página com IA</span>
        </div>
        <button className={styles.btn} aria-label="Resumir">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10h12M10 4l6 6-6 6" stroke="#FFFFFF" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </section>
  )
}

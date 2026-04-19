import styles from './ResidencyCTA.module.css'

interface ResidencyCTAProps {
  label?: string
  href?: string
}

export function ResidencyCTA({
  label = 'Conheça mais da nossa estrutura',
  href = '#estrutura',
}: ResidencyCTAProps) {
  return (
    <section className={styles.section}>
      <div className={styles.divider} />
      <a href={href} className={styles.ctaButton}>
        {label}
      </a>
      <div className={styles.divider} />
    </section>
  )
}

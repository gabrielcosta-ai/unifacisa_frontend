import styles from './ResidencyHero.module.css'

interface ResidencyHeroProps {
  title?: string
  href?: string
}

export function ResidencyHero({
  title = 'Processo Seletivo Unificado de\nResidência Médica',
  href = '#',
}: ResidencyHeroProps) {
  const lines = title.split('\n')
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>
        {lines.slice(0, -1).map((line, i) => (
          <span key={i}>{line}<br /></span>
        ))}
        <a href={href} className={styles.titleLink}>{lines[lines.length - 1]}</a>
      </h1>
    </section>
  )
}

import styles from './ResidencyHero.module.css'

interface ResidencyHeroProps {
  title?: string
}

export function ResidencyHero({
  title = 'Processo Seletivo Unificado de Residência Médica',
}: ResidencyHeroProps) {
  return (
    <>
      <section className={styles.section}>
        <h1 className={styles.title}>{title}</h1>
      </section>
      <hr className={styles.divider} />
    </>
  )
}

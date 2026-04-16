import styles from './HeroHome.module.css'

export function HeroHome() {
  return (
    <section className={styles.section}>
      <div className={styles.heroImageWrapper}>
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>Não dá para comparar</h1>
          <p className={styles.heroSubtitle}>
            Experiência de ensino realmente superior, seja bem-vindo(a) à Unifacisa.
          </p>
        </div>

        <div className={styles.heroTopRight}>
          <a href="#vestibular" className={styles.vestibularBtn}>
            Vestibular 2026 &bull; Inscreva-se
          </a>
        </div>

        <div className={styles.heroBottomRight}>
          <a href="#cursos" className={styles.coursesBtn}>
            Conheça todos os nossos cursos
          </a>
          <span className={styles.timeIndicator}>01:19</span>
        </div>
      </div>

      <div className={styles.belowHero}>
        <h2 className={styles.belowHeroTitle}>
          Aprender fazendo: conheça a excelência Unifacisa
        </h2>
      </div>

      <hr className={styles.divider} />
    </section>
  )
}

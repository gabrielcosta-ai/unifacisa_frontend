import styles from './HeroHome.module.css'

export function HeroHome() {
  return (
    <section className={styles.section}>
      <div className={styles.heroImageWrapper}>
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>Não dá para comparar</h1>
          <p className={styles.heroSubtitle}>
            Experiência de ensino realmente superior,{'\n'}seja bem-vindo(a) à <span className={styles.unifacisaUnderline}>Unifacisa</span>.
          </p>
        </div>

        <div className={styles.heroBottomRight}>
          <a href="#vestibular" className={styles.vestibularBtn}>
            Vestibular 2026 &bull; Inscreva-se
          </a>
        </div>
      </div>

      <div className={styles.belowHero}>
        <h2 className={styles.belowHeroTitle}>
          <span className={styles.underline}>Aprender fazendo:</span>{'\n'}conheça a excelência Unifacisa
        </h2>
        <a href="/cursos" className={styles.coursesBtn}>
          Ver todos os cursos e modalidade
        </a>
      </div>

      <hr className={styles.divider} />
    </section>
  )
}

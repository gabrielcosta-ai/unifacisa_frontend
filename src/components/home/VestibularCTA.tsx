import styles from './VestibularCTA.module.css'

export function VestibularCTA() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Pronto para fazer parte? Inscreva-se agora no vestibular Unifacisa.
      </h2>

      <div className={styles.content}>
        <div className={styles.leftSide}>
          <p className={styles.vestibularInfo}>
            Vestibular Medicina: Provas 16 e 22 de maio
          </p>
        </div>

        <div className={styles.card}>
          <a href="#" className={styles.arrowButton} aria-label="Ir para inscrição">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="4" y1="12" x2="20" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="14" y1="6" x2="20" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="14" y1="18" x2="20" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </a>

          <span className={styles.overline}>A hora chegou</span>
          <h3 className={styles.cardTitle}>Escolha como quer ser atendido:</h3>

          <div className={styles.buttons}>
            <a href="#vestibular" className={styles.greenBtn}>
              Inscreva-se no Vestibular
            </a>
            <a href="#consultor" className={styles.outlinedBtn}>
              Fale com um consultor
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

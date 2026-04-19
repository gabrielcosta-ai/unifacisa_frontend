import styles from './VestibularCTA.module.css'

interface VestibularCTAProps {
  vestibularInfo?: string
  cardOverline?: string
  cardTitle?: string
  greenBtnLabel?: string
  greenBtnHref?: string
  outlineBtnLabel?: string
  outlineBtnHref?: string
}

export function VestibularCTA({
  vestibularInfo = 'Vestibular Medicina: Provas 16 e 22 de maio',
  cardOverline = 'A hora chegou',
  cardTitle = 'Escolha como quer ser atendido:',
  greenBtnLabel = 'Inscreva-se pelo Site',
  greenBtnHref = '#vestibular',
  outlineBtnLabel = 'Ligue para a Unifacisa',
  outlineBtnHref = '#consultor',
}: VestibularCTAProps) {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <h2 className={styles.title}>
            Pronto para fazer<br />
            parte? <a href={greenBtnHref} className={styles.titleLink}>Inscreva-se<br />
            agora no vestibular<br />
            Unifacisa.</a>
          </h2>
          <p className={styles.vestibularInfo}>{vestibularInfo}</p>
        </div>

        <div className={styles.card}>
          <a href={greenBtnHref} className={styles.arrowButton} aria-label="Ir para inscrição">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="4" y1="12" x2="20" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="14" y1="6" x2="20" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="14" y1="18" x2="20" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </a>

          <span className={styles.overline}>{cardOverline}</span>
          <h3 className={styles.cardTitle}>
            {cardTitle}
          </h3>

          <div className={styles.buttons}>
            <a href={greenBtnHref} className={styles.greenBtn}>
              {greenBtnLabel}
            </a>
            <a href={outlineBtnHref} className={styles.outlinedBtn}>
              {outlineBtnLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

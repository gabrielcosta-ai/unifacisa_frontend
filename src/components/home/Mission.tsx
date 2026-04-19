import styles from './Mission.module.css'

interface MissionProps {
  overline?: string
  quote?: string
  author?: string
  buttonLabel?: string
  buttonHref?: string
}

export function Mission({
  overline = 'Nossa Missão',
  quote = 'Acreditamos que o <strong>conhecimento abre as portas do mundo</strong> e que aprender fazendo transforma a maneira como você constrói suas oportunidades. Estamos comprometidos em formar pessoas que transformam o mundo.',
  author = '<strong>Diego Gadelha</strong>, CEO do Grupo Unifacisa',
  buttonLabel = 'Conheça nossa visão',
  buttonHref = '#visao',
}: MissionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <span className={styles.overline}>{overline}</span>
        <p className={styles.quote} dangerouslySetInnerHTML={{ __html: quote }} />
        <span className={styles.author} dangerouslySetInnerHTML={{ __html: author }} />

        <div className={styles.btnWrapper}>
          <a href={buttonHref} className={styles.visionBtn}>
            {buttonLabel}
          </a>
        </div>
      </div>
    </section>
  )
}

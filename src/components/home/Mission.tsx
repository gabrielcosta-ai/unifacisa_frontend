import styles from './Mission.module.css'

export function Mission() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <span className={styles.overline}>Nossa Missão</span>
        <p className={styles.quote}>
          Acreditamos que o conhecimento abre as portas do mundo e que aprender
          fazendo transforma a maneira como você constrói suas oportunidades.
          Estamos comprometidos em formar pessoas que transformam o mundo.
        </p>
        <span className={styles.author}>
          Diego Gadelha, CEO do Grupo Unifacisa
        </span>

        <div className={styles.btnWrapper}>
          <a href="#visao" className={styles.visionBtn}>
            Conheça nossa visão
          </a>
        </div>
      </div>
    </section>
  )
}

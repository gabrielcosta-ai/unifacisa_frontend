import styles from './AdmissionLinks.module.css'

const graduationLinks = [
  'Enem: tudo o que você precisa saber',
  'Vestibular, inscreva-se hoje.',
  'Segunda graduação, acesse o guia.',
  'Transferência, veja o passo a passo.',
]

const postGradLinks = [
  'Pós: conheça o processo de admissão',
  'Fellowship: entenda como funciona',
  'Residência: critérios para ingresso',
  'Bolsas e descontos: regras e modalidades',
]

export function AdmissionLinks() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.topRow}>
          <h2 className={styles.title}>Entenda como você pode fazer parte.</h2>
          <button className={styles.expandBtn} aria-label="Expandir">
            &#43;
          </button>
        </div>

        <div className={styles.columns}>
          <div className={styles.column}>
            <p className={styles.overline}>Graduação</p>
            <div className={styles.linkList}>
              {graduationLinks.map((text) => (
                <a key={text} href="#" className={styles.link}>
                  {text}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <p className={styles.overline}>Pós-graduação, Fellowship e Residência</p>
            <div className={styles.linkList}>
              {postGradLinks.map((text) => (
                <a key={text} href="#" className={styles.link}>
                  {text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

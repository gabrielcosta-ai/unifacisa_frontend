import styles from './CoursesHero.module.css'

type VestibularDate = {
  date: string
  href: string
}

type CoursesHeroProps = {
  vestibularDates?: VestibularDate[]
  whatsappLink?: string
  siteLink?: string
}

export function CoursesHero({
  vestibularDates = [],
  whatsappLink,
  siteLink,
}: CoursesHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h1 className={styles.title}>
            Graduações Unifacisa
          </h1>
          <p className={styles.subtitle}>
            Escolha o seu curso e veja os detalhes em diferentes modalidades
          </p>
          <span className={styles.badge}>admissões abertas</span>
        </div>

        <div className={styles.right}>
          <div className={styles.vestibularCard}>
            <span className={styles.vestibularLabel}>vestibulares neste semestre</span>
            <div className={styles.vestibularDates}>
              {vestibularDates.map((v, i) => (
                <a key={i} href={v.href} className={styles.vestibularDate}>{v.date}</a>
              ))}
            </div>
            <div className={styles.vestibularButtons}>
              {whatsappLink && (
                <a href={whatsappLink} className={styles.btnGreen}>
                  Inscreva-se pelo WhatsApp
                </a>
              )}
              {siteLink && (
                <a href={siteLink} className={styles.btnOutlined}>
                  Inscreva-se pelo Site
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollRow}>
        <a href="#courses" className={styles.scrollCta}>
          Role a página e descubra a sua <span className={styles.arrow}>&rarr;</span>
        </a>
      </div>
      <hr className={styles.divider} />
    </section>
  )
}

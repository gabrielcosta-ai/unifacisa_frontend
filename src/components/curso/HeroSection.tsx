import styles from './HeroSection.module.css'

type VestibularDate = {
  date: string
  href: string
}

type HeroSectionProps = {
  courseName: string
  institutionName?: string
  subtitle: string
  admissionsOpen?: boolean
  heroImage?: string
  vestibularDates?: VestibularDate[]
  whatsappLink?: string
  siteLink?: string
}

export function HeroSection({
  courseName,
  institutionName = 'Unifacisa',
  subtitle,
  admissionsOpen = true,
  heroImage,
  vestibularDates = [],
  whatsappLink,
  siteLink,
}: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      {heroImage && (
        <div className={styles.heroBackground} style={{ backgroundImage: `url(${heroImage})` }} />
      )}
      <div className={styles.inner}>
        <div className={styles.left}>
          <h1 className={styles.title}>
            {courseName} {institutionName}
          </h1>
          <p className={styles.subtitle}>{subtitle}</p>
          {admissionsOpen && (
            <span className={styles.badge}>admissões abertas</span>
          )}
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
              {siteLink && (
                <a href={siteLink} className={styles.btnGreen}>
                  Inscreva-se pelo Site
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollRow}>
        <a href="#content" className={styles.scrollCta}>
          Role a página e descubra o porquê <span className={styles.arrow}>↓</span>
        </a>
      </div>
      <hr className={styles.divider} />
    </section>
  )
}

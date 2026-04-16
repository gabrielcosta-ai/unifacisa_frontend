import styles from './CTASection.module.css'

type VestibularDate = {
  date: string
  href?: string
}

type CTASectionProps = {
  headline: string
  vestibularDates?: VestibularDate[]
  vestibularInfo?: string
  siteLink?: string
}

export function CTASection({
  headline,
  vestibularDates = [],
  vestibularInfo,
  siteLink,
}: CTASectionProps) {
  // Split headline to underline "Inscreva-se agora no vestibular"
  const underlinePhrase = 'Inscreva-se agora no vestibular'
  const parts = headline.split(underlinePhrase)

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.headline}>
            {parts.length > 1 ? (
              <>
                {parts[0]}
                <span className={styles.headlineUnderline}>{underlinePhrase}</span>
                {parts[1]}
              </>
            ) : headline}
          </h2>
          {vestibularInfo && (
            <p className={styles.vestibularInfo}>{vestibularInfo}</p>
          )}
        </div>
        <div className={styles.right}>
          <div className={styles.vestibularCard}>
            <span className={styles.cardLabel}>vestibulares neste semestre</span>
            <div className={styles.dates}>
              {vestibularDates.map((v, i) => (
                <a key={i} href={v.href || '#'} className={styles.dateLink}>{v.date}</a>
              ))}
            </div>
            {siteLink && (
              <a href={siteLink} className={styles.btnGreen}>
                Inscreva-se pelo Site
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

import styles from './ResidencyInfo.module.css'

interface ResidencyInfoProps {
  overline?: string
  subtitle?: string
  description?: string
  whatsappHref?: string
  siteHref?: string
  quote?: string
  author?: string
}

export function ResidencyInfo({
  overline = 'RESIDÊNCIA MÉDICA',
  subtitle = 'Excelência se constrói na prática',
  description = 'O Processo Seletivo Unificado de Residência Médica da Unifacisa oferece programas de alta qualidade, com infraestrutura moderna e corpo docente experiente. Venha fazer parte de uma instituição que forma grandes especialistas.',
  whatsappHref = '#whatsapp',
  siteHref = '#inscricao',
  quote = 'Colaboramos com grandes organizações para garantir excelência no ensino e ampliar as oportunidades com o mercado.',
  author = 'Gabriela Maia, estudante do 7º período de Medicina',
}: ResidencyInfoProps) {
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <p className={styles.overline}>{overline}</p>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.buttons}>
          <a href={whatsappHref} className={styles.ctaButton}>
            Inscreva-se pelo WhatsApp
          </a>
          <a href={siteHref} className={styles.outlineButton}>
            Inscreva-se pelo site
          </a>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.quoteIcon}>&ldquo;</div>
        <blockquote className={styles.quote}>{quote}</blockquote>
        <span className={styles.author}>{author}</span>
      </div>
    </section>
  )
}

import styles from './ResidencyInfo.module.css'

interface ResidencyInfoProps {
  overline?: string
  subtitle?: string
  description?: string
  whatsappHref?: string
  siteHref?: string
  whatsappLabel?: string
  siteLabel?: string
  quote?: string
  author?: string
}

function renderSubtitleWithLink(text: string) {
  const keyword = 'na prática'
  const index = text.indexOf(keyword)
  if (index === -1) return text

  return (
    <>
      {text.slice(0, index)}
      <a href="#" className={styles.subtitleLink}>{keyword}</a>
      {text.slice(index + keyword.length)}
    </>
  )
}

export function ResidencyInfo({
  overline = 'APRESENTAÇÃO DO PROGRAMA',
  subtitle = 'Excelência se constrói na prática',
  description = 'O Processo Seletivo Unificado oferece vagas para pós-graduação lato sensu, na modalidade de Residência Médica, em parceria com a UNIFACISA (CESED) e a Fundação Pedro Américo, mantenedora do Hospital HELP. A formação alia ensino de qualidade à prática supervisionada, com treinamento 100% prático, ao lado de grandes nomes da medicina e em ambientes com tecnologia de ponta, preparando médicos para uma atuação ética, técnica e humanizada.',
  whatsappHref = '#whatsapp',
  siteHref = '#inscricao',
  whatsappLabel = 'Inscreva-se pelo WhatsApp',
  siteLabel = 'Inscreva-se pelo site',
  quote = 'Colaboramos com grandes organizações para garantir excelência no ensino e ampliar as oportunidades com o mercado. Colaboramos com grandes organizações para garantir',
  author = 'Gabriela Maia, estudante do 7º período de Medicina',
}: ResidencyInfoProps) {
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        {overline && <p className={styles.overline}>{overline}</p>}
        <h2 className={styles.subtitle}>{renderSubtitleWithLink(subtitle)}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.buttons}>
          <a href={whatsappHref} className={styles.ctaButton}>
            {whatsappLabel}
          </a>
          <a href={siteHref} className={styles.outlineButton}>
            {siteLabel}
          </a>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.quoteBlock}>
          <span className={styles.quoteMark} aria-hidden="true">&ldquo;</span>
          <div className={styles.quoteContent}>
            <p className={styles.quoteText}>{quote}</p>
            <p className={styles.quoteAuthor}>
              {author.split(',')[0]}
              {author.includes(',') && (
                <span>,{author.split(',').slice(1).join(',')}</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

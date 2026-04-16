import styles from './AcademicVision.module.css'

type AcademicVisionProps = {
  title: string
  descriptionLeft: string
  descriptionRight: string
  testimonialAuthor?: string
  whatsappLink?: string
  siteLink?: string
}

export function AcademicVision({
  title,
  descriptionLeft,
  descriptionRight,
  testimonialAuthor,
  siteLink,
}: AcademicVisionProps) {
  // Extrair nome do curso do título (ex: "Visão Acadêmica da Medicina na Unifacisa" → "Medicina")
  const courseMatch = title.match(/d[aeo]\s+(.+?)\s+na\s+/i)
  const courseName = courseMatch ? courseMatch[1] : ''

  // Formatar título com sublinhado no nome do curso
  const titleParts = courseName
    ? title.split(courseName)
    : [title]

  return (
    <section className={styles.section}>
      <div className={styles.separator}>
        <hr className={styles.line} />
        <a href="#estrutura" className={styles.separatorBtn}>Conheça mais da nossa estrutura</a>
        <hr className={styles.line} />
      </div>

      <div className={styles.content}>
        <div className={styles.left}>
          <p className={styles.overline}>abordagem acadêmica</p>
          <h2 className={styles.title}>
            {courseName ? (
              <>
                {titleParts[0]}
                <span className={styles.titleUnderline}>{courseName}</span>
                {titleParts[1]}
              </>
            ) : title}
          </h2>

          {descriptionLeft.split('\n').filter(Boolean).map((p, i) => (
            <p key={i} className={styles.textLeft}>{p}</p>
          ))}

          {siteLink && (
            <a href={siteLink} className={styles.btnGreen}>
              Inscreva-se pelo Site
            </a>
          )}
        </div>

        <div className={styles.right}>
          <div className={styles.quoteBlock}>
            <span className={styles.quoteIcon}>&ldquo;</span>
            <div className={styles.quoteContent}>
              <p className={styles.quoteText}>{descriptionRight}</p>
              {testimonialAuthor && (
                <p className={styles.author}>
                  {testimonialAuthor.split(',')[0]}
                  {testimonialAuthor.includes(',') && (
                    <span>,{testimonialAuthor.split(',').slice(1).join(',')}</span>
                  )}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

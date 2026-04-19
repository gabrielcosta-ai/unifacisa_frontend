import styles from './AdmissionLinks.module.css'

interface LinkItem {
  boldPart: string
  restText: string
  href?: string
}

interface AdmissionLinksProps {
  title?: string
  eyebrowText?: string
  leftColumnLabel?: string
  rightColumnLabel?: string
  leftLinks?: LinkItem[]
  rightLinks?: LinkItem[]
}

const defaultLeftLinks: LinkItem[] = [
  { boldPart: 'Enem:', restText: ' tudo o que você precisa saber', href: '#' },
  { boldPart: 'Vestibular,', restText: ' inscreva-se hoje.', href: '#' },
  { boldPart: 'Segunda graduação,', restText: ' acesse o guia.', href: '#' },
  { boldPart: 'Transferência,', restText: ' veja o passo a passo.', href: '#' },
]

const defaultRightLinks: LinkItem[] = [
  { boldPart: 'Pós:', restText: ' conheça o processo de admissão', href: '#' },
  { boldPart: 'Fellowship:', restText: ' entenda como funciona', href: '#' },
  { boldPart: 'Residência:', restText: ' critérios para ingresso', href: '#' },
  { boldPart: 'Bolsas e descontos:', restText: ' regras e modalidades', href: '#' },
]

export function AdmissionLinks({
  title = 'Entenda como você pode fazer parte.',
  eyebrowText = 'Formas de Ingresso',
  leftColumnLabel = 'Graduação',
  rightColumnLabel = 'Outros',
  leftLinks = defaultLeftLinks,
  rightLinks = defaultRightLinks,
}: AdmissionLinksProps) {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <p className={styles.eyebrow}>{eyebrowText}</p>
        <div className={styles.expandBtn} aria-label="Expandir">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <line x1="1" y1="15" x2="15" y2="1" stroke="#0153FF" strokeWidth="2" strokeLinecap="round" />
            <line x1="5" y1="1" x2="15" y2="1" stroke="#0153FF" strokeWidth="2" strokeLinecap="round" />
            <line x1="15" y1="1" x2="15" y2="11" stroke="#0153FF" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        <h2 className={styles.title}>{title}</h2>

        <div className={styles.columns}>
          <div className={styles.column}>
            <p className={styles.overline}>{leftColumnLabel}</p>
            <div className={styles.linkList}>
              {leftLinks.map((link, i) => (
                <a key={i} href={link.href || '#'} className={styles.link}>
                  <strong className={styles.linkBold}>{link.boldPart}</strong>{link.restText}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <p className={styles.overline}>{rightColumnLabel}</p>
            <div className={styles.linkList}>
              {rightLinks.map((link, i) => (
                <a key={i} href={link.href || '#'} className={styles.link}>
                  <strong className={styles.linkBold}>{link.boldPart}</strong>{link.restText}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

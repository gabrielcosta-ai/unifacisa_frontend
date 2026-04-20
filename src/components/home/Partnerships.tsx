import Image from 'next/image'
import styles from './Partnerships.module.css'

const DEFAULT_DESCRIPTION = 'Colaboramos com grandes organizações para garantir excelência no ensino e ampliar as oportunidades com o mercado.'

interface PartnershipsProps {
  overline?: string
  title?: string
  description?: string
  logos?: Array<{ image: { url: string }; name?: string }>
  newsOverline?: string
  news?: Array<{ headline: string; bold?: boolean; href?: string }>
  buttonLabel?: string
  buttonHref?: string
  previewOverline?: string
  previewCards?: Array<{ label: string; image?: { url: string } | null; href?: string }>
}

const defaultLogos = [
  { image: { url: '/images/home/logo-accenture.png' }, name: 'Accenture' },
  { image: { url: '/images/home/logo-babson.png' }, name: 'Babson College' },
  { image: { url: '/images/home/logo-mit.png' }, name: 'MIT' },
  { image: { url: '/images/home/logo-einstein.png' }, name: 'Hospital Albert Einstein' },
  { image: { url: '/images/home/logo-whf.png' }, name: 'WHF' },
]

const defaultNews: Array<{ headline: string; bold?: boolean; href?: string }> = [
  { headline: '<strong>Accenture</strong> anuncia programa de estágio para a Unifacisa em 2026' },
  { headline: 'Unifacisa anuncia parceria metodológica com <strong>Babson College</strong>' },
  { headline: 'Estudantes Unifacisa iniciam visitas técnicas ao <strong>MIT,</strong> nos EUA' },
  { headline: 'Residentes Unifacisa enviam resultados no <strong>Hosp. Albert Einstein.</strong>' },
]

const defaultPreviewCards = [
  { label: 'Tour Virtual', image: { url: '/images/home/preview-tour-virtual.png' } },
  { label: 'Biblioteca', image: { url: '/images/home/preview-biblioteca.png' } },
  { label: 'Laboratório Saúde', image: { url: '/images/home/preview-lab-saude.png' } },
]

export function Partnerships({
  overline = 'Parcerias em destaque',
  title = 'Parcerias estratégicas para você ir além conosco',
  description = DEFAULT_DESCRIPTION,
  logos = defaultLogos,
  newsOverline,
  news = defaultNews,
  buttonLabel = 'Ver todas as notícias',
  buttonHref,
  previewOverline = 'Conheça mais sobre nossa estrutura',
  previewCards = defaultPreviewCards,
}: PartnershipsProps) {
  const isCustomDescription = description !== DEFAULT_DESCRIPTION

  return (
    <section className={styles.section}>
      {/* 6a - Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <p className={styles.overline}>{overline}</p>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <div className={styles.headerRight}>
          <p className={styles.description}>
            {isCustomDescription ? description : (
              <>
                <span style={{ whiteSpace: 'nowrap' }}>Colaboramos com grandes organizações</span><br />
                <span style={{ whiteSpace: 'nowrap' }}>para garantir excelência no ensino e</span><br />
                <span style={{ whiteSpace: 'nowrap' }}>ampliar as oportunidades com o</span><br />
                <span style={{ whiteSpace: 'nowrap' }}>mercado.</span>
              </>
            )}
          </p>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.logosRow}>
        {logos.map((logo, i) => (
          <div key={i} className={styles.logoPlaceholder} style={{ position: 'relative' }}>
            <Image src={logo.image.url} alt={logo.name || ''} fill sizes="306px" style={{ objectFit: 'contain' }} />
          </div>
        ))}
      </div>

      <hr className={styles.divider} />

      {/* 6b - News (2 colunas) */}
      <div className={styles.newsSection}>
        <div className={styles.newsLeft}>
          <p className={styles.newsOverline}>
            {newsOverline ? newsOverline : (<>Atualizações sobre<br />nossas parcerias</>)}
          </p>
        </div>

        <div className={styles.newsRight}>
          <div className={styles.newsList}>
            {news.map((item, i) => (
              <p key={i} className={styles.newsItem}>
                <span dangerouslySetInnerHTML={{ __html: item.headline }} />
                <span className={styles.newsArrow}>&#8599;</span>
              </p>
            ))}
          </div>

          {buttonHref ? (
            <a href={buttonHref} className={styles.blueBtn}>{buttonLabel}</a>
          ) : (
            <button className={styles.blueBtn}>{buttonLabel}</button>
          )}
        </div>
      </div>

      {/* 6c - Structure Preview */}
      <div className={styles.structurePreview}>
        <p className={styles.previewOverline}>{previewOverline}</p>

        <div className={styles.previewCards}>
          {previewCards.map((card, i) => (
            <div key={i} className={styles.previewCard} style={{ position: 'relative' }}>
              {card.image?.url && (
                <Image src={card.image.url} alt={card.label} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
              )}
              <div className={styles.previewCardOverlay}>
                <span className={styles.previewCardLabel}>{card.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

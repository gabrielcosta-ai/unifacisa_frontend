import styles from './ResidencyGallery.module.css'

interface ResidencyGalleryProps {
  overline?: string
  title?: string
  images?: { url: string; alt: string }[]
  ctaLabel?: string
  ctaHref?: string
}

export function ResidencyGallery({
  overline = 'EXPERIÊNCIA UNIFACISA',
  title = 'A prática que forma grandes especialistas',
  images,
  ctaLabel = 'Conheça mais da nossa estrutura',
  ctaHref = '#estrutura',
}: ResidencyGalleryProps) {
  const placeholders = Array.from({ length: 3 }, (_, i) => ({
    url: '',
    alt: `Foto ${i + 1} da residência médica`,
  }))
  const displayImages = images && images.length > 0 ? images : placeholders

  return (
    <section className={styles.section}>
      <p className={styles.overline}>{overline}</p>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.grid}>
        {displayImages.slice(0, 3).map((img, i) => (
          <div
            key={i}
            className={styles.imageCard}
            style={
              img.url
                ? { backgroundImage: `url('${img.url}')`, backgroundSize: 'cover', backgroundPosition: 'center' }
                : {}
            }
          >
            <button className={styles.plusButton} aria-label="Ver mais">
              +
            </button>
          </div>
        ))}
      </div>
      <div className={styles.ctaDivider}>
        <div className={styles.dividerLine} />
        <a href={ctaHref} className={styles.ctaButton}>
          {ctaLabel}
        </a>
        <div className={styles.dividerLine} />
      </div>
    </section>
  )
}

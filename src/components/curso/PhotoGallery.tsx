import styles from './PhotoGallery.module.css'

type Photo = {
  src: string
  alt: string
}

type PhotoGalleryProps = {
  title: string
  photos: Photo[]
}

export function PhotoGallery({ title, photos }: PhotoGalleryProps) {
  return (
    <section className={styles.section}>
      <hr className={styles.divider} />
      <p className={styles.overline}>experiência unifacisa</p>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.grid}>
        {photos.slice(0, 2).map((photo, i) => (
          <div key={i} className={styles.imageCard}>
            <div className={styles.imagePlaceholder} style={photo.src ? { backgroundImage: `url(${photo.src})` } : undefined} />
            <button className={styles.expandBtn} aria-label="Expandir">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <line x1="12" y1="4" x2="12" y2="20" stroke="#000" strokeWidth="2.5" />
                <line x1="4" y1="12" x2="20" y2="12" stroke="#000" strokeWidth="2.5" />
              </svg>
            </button>
          </div>
        ))}
      </div>
      {photos[2] && (
        <div className={styles.imageCardFull}>
          <div className={styles.imagePlaceholder} style={photos[2].src ? { backgroundImage: `url(${photos[2].src})` } : undefined} />
          <button className={styles.expandBtn} aria-label="Expandir">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <line x1="12" y1="4" x2="12" y2="20" stroke="#000" strokeWidth="2.5" />
              <line x1="4" y1="12" x2="20" y2="12" stroke="#000" strokeWidth="2.5" />
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}

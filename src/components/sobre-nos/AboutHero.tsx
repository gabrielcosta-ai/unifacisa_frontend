import styles from './AboutHero.module.css'

interface AboutHeroProps {
  heading?: string
  backgroundImage?: string | null
  videoUrl?: string | null
}

export function AboutHero({
  heading = 'Conhecimento que abre as portas do mundo',
  backgroundImage,
  videoUrl,
}: AboutHeroProps) {
  const underlineText = 'abre as portas do mundo'
  const index = heading.indexOf(underlineText)
  const hasUnderline = index !== -1

  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>
        {hasUnderline ? (
          <>
            {heading.slice(0, index)}
            <span className={styles.underline}>{underlineText}</span>
            {heading.slice(index + underlineText.length)}
          </>
        ) : heading}
      </h1>
      <div
        className={styles.imageCard}
        style={!videoUrl && backgroundImage ? {
          backgroundImage: `linear-gradient(180deg, rgba(188, 188, 188, 0) 58.21%, rgba(0, 0, 0, 0.8) 100%), url(${backgroundImage})`,
        } : undefined}
      >
        {videoUrl && (
          <video
            className={styles.video}
            src={videoUrl}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        )}
      </div>
      <hr className={styles.divider} />
    </section>
  )
}

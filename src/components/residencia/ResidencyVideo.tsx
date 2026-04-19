import styles from './ResidencyVideo.module.css'

interface ResidencyVideoProps {
  text?: string
  backgroundImage?: string | null
}

export function ResidencyVideo({
  text = 'Assista a apresentação do nosso Programa de Residência',
  backgroundImage,
}: ResidencyVideoProps) {
  const bgStyle = backgroundImage
    ? { backgroundImage: `url('${backgroundImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : {}

  return (
    <section className={styles.section}>
      <div className={styles.card} style={bgStyle}>
        <div className={styles.overlay}>
          <p className={styles.text}>{text}</p>
          <button className={styles.playButton} aria-label="Reproduzir vídeo">
            <span className={styles.playIcon} />
          </button>
        </div>
      </div>
    </section>
  )
}

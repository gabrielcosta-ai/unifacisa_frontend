'use client'

import { useRef } from 'react'
import styles from './ResidencyVideo.module.css'

interface ResidencyVideoProps {
  text?: string
  backgroundImage?: string | null
  videoUrl?: string | null
}

export function ResidencyVideo({
  text = 'Assista a apresentação do nosso Programa de Residência',
  backgroundImage,
  videoUrl,
}: ResidencyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const bgStyle = !videoUrl && backgroundImage
    ? { backgroundImage: `url('${backgroundImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : {}

  function handlePlay() {
    const video = videoRef.current
    if (!video) return
    if (video.requestFullscreen) {
      video.muted = false
      video.requestFullscreen()
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.card} style={bgStyle}>
        {videoUrl && (
          <video
            ref={videoRef}
            className={styles.video}
            src={videoUrl}
            autoPlay
            muted
            loop
            playsInline
          />
        )}
        <button className={styles.playButton} aria-label="Reproduzir vídeo" onClick={handlePlay}>
          <span className={styles.playIcon} />
        </button>
        <div className={styles.overlay}>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </section>
  )
}

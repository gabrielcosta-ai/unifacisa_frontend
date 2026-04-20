'use client'

import { useRef } from 'react'
import styles from './ResidencyStructure.module.css'

interface ResidencyStructureProps {
  overline?: string
  title?: string
  cardTitle?: string
  cardSubtitle?: string
  disclaimer?: string
  backgroundImage?: string | null
  videoUrl?: string | null
}

export function ResidencyStructure({
  overline = 'ESTRUTURA',
  title = 'Estrutura que eleva o padrão da sua formação',
  cardTitle = 'Estude no hospital escola referência do nordeste',
  cardSubtitle = 'Conheça o Hospital Help',
  disclaimer = 'Aviso Legal: O uso exclusivo do Hospital Help é uma colaboração técnica entre a fundação Pedro Américo e a Unifacisa',
  backgroundImage,
  videoUrl,
}: ResidencyStructureProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  function handlePlay() {
    const video = videoRef.current
    if (!video) return
    video.muted = false
    if (video.requestFullscreen) {
      video.requestFullscreen()
    }
  }

  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <p className={styles.overline}>{overline}</p>
        <h2 className={styles.title}>{title}</h2>
        <div
          className={styles.banner}
          style={!videoUrl && backgroundImage ? {
            backgroundImage: `url(${backgroundImage})`,
          } : undefined}
        >
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
          <div className={styles.bannerOverlay} />
          <div className={styles.bannerContent}>
            <h3 className={styles.cardTitle}>{cardTitle}</h3>
            <p className={styles.cardSubtitle}>{cardSubtitle}</p>
          </div>
          <button className={styles.playButton} aria-label="Assistir vídeo" onClick={handlePlay}>
            <svg width="33" height="40" viewBox="0 0 33 40" fill="none">
              <path d="M33 20L0 40V0L33 20Z" fill="white"/>
            </svg>
          </button>
        </div>
        <p className={styles.disclaimer}>{disclaimer}</p>
      </section>
    </div>
  )
}

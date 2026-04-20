'use client'

import { useRef } from 'react'
import styles from './HospitalBanner.module.css'

type HospitalBannerProps = {
  title: string
  linkText: string
  linkHref: string
  disclaimer?: string
  imageSrc?: string
  videoUrl?: string
}

export function HospitalBanner({ title, linkText, linkHref, disclaimer, imageSrc, videoUrl }: HospitalBannerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (video.requestFullscreen) {
      video.requestFullscreen()
    }
    video.play()
  }

  return (
    <section className={styles.section}>
      <div
        className={styles.banner}
        style={!videoUrl && imageSrc ? {
          backgroundImage: `linear-gradient(180deg, rgba(1,83,255,0) 58.21%, rgba(0,0,0,0.8) 100%), url(${imageSrc})`
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
            preload="metadata"
          />
        )}
        <div className={styles.overlay} />
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <a href={linkHref} className={styles.link}>{linkText}</a>
        </div>
        <button className={styles.playBtn} onClick={handlePlay} aria-label="Assistir vídeo">
          <svg width="33" height="40" viewBox="0 0 33 40" fill="none">
            <path d="M33 20L0 40V0L33 20Z" fill="white"/>
          </svg>
        </button>
      </div>
      {disclaimer && <p className={styles.disclaimer}>{disclaimer}</p>}
    </section>
  )
}

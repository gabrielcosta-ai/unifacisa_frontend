import styles from './AlumniStories.module.css'
import { VideoClickWrapper } from '@/components/ui/VideoClickWrapper'

interface AlumniStoriesProps {
  title?: string
  stories?: Array<{
    text: string
    name?: string
    duration?: string
    wide?: boolean
    image?: { url: string } | null
    videoUrl?: string
  }>
}

const defaultStories = [
  { text: ' e a medicina que atravessa gerações de sua família.', name: 'Carla Albuquerque', duration: '01:27', wide: true, image: null, videoUrl: '/videos/alumni-1.mp4' },
  { text: ', do sonho à realidade em uma carreira jurídica.', name: 'Sandro Novaes', duration: '02:46', wide: false, image: null, videoUrl: '/videos/alumni-2.mp4' },
  { text: ', das artes à uma sólida carreira na área de tecnologia', name: 'Raíssa Freitas', duration: '01:19', wide: false, image: null, videoUrl: '/videos/alumni-3.mp4' },
]

export function AlumniStories({ title, stories }: AlumniStoriesProps) {
  const resolvedStories = stories ?? defaultStories

  return (
    <section className={styles.section}>
      {title ? (
        <h2 className={styles.title}>{title}</h2>
      ) : (
        <h2 className={styles.title}>
          Histórias que inspiram fazem a <span className={styles.titleUnderline}>nossa história</span>
        </h2>
      )}

      <div className={styles.grid}>
        {resolvedStories.map((story, index) => {
          const videoSrc = story.videoUrl || ''
          const bgImage = story.image?.url || null

          const cardContent = (
            <>
              {videoSrc && (
                <video
                  className={styles.videoBackground}
                  src={videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              )}
              <div className={styles.cardOverlay}>
                <span className={styles.alumniPill}>Alumni Stories</span>

                <svg className={styles.playIcon} viewBox="0 0 33 40" fill="white">
                  <path d="M33 20L0 40V0L33 20Z" />
                </svg>

                <span className={styles.cardTime}>{story.duration}</span>
              </div>
            </>
          )

          return (
            <div key={index} className={`${styles.column} ${story.wide ? styles.columnWide : styles.columnNarrow}`}>
              {videoSrc ? (
                <VideoClickWrapper videoSrc={videoSrc} className={styles.card}>
                  {cardContent}
                </VideoClickWrapper>
              ) : (
                <div
                  className={styles.card}
                  style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
                >
                  {cardContent}
                </div>
              )}

              <p className={styles.cardText}>
                <span className={styles.cardName}>{story.name}</span>{story.text}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

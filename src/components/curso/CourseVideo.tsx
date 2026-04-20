import Link from 'next/link'
import styles from './CourseVideo.module.css'

type CourseVideoProps = {
  title: string
  imageSrc?: string
  vestibularInfo?: string
}

export function CourseVideo({ title, imageSrc, vestibularInfo }: CourseVideoProps) {
  return (
    <section className={styles.section}>
      <div
        className={styles.videoCard}
        style={imageSrc ? { backgroundImage: `url(${imageSrc})` } : undefined}
      >
        <h2 className={styles.title}>{title}</h2>
        <button className={styles.playBtn} aria-label="Assistir vídeo">
          <svg width="33" height="40" viewBox="0 0 33 40" fill="none">
            <path d="M33 20L0 40V0L33 20Z" fill="white"/>
          </svg>
        </button>
      </div>
      {vestibularInfo && (
        <Link href="/cursos" className={styles.vestibularLink}>{vestibularInfo}</Link>
      )}
    </section>
  )
}

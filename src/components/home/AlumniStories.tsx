import styles from './AlumniStories.module.css'

const stories = [
  {
    text: 'Carla Albuquerque e a medicina que atravessa gerações de sua família.',
    time: '01:27',
    wide: true,
    bgImage: '/images/home/thumb-video-depoimento-1.png',
  },
  {
    text: 'Sandro Novaes, do sonho à realidade em uma carreira jurídica.',
    time: '02:46',
    wide: false,
    bgImage: '/images/home/thumb-video-depoimento-2.png',
  },
  {
    text: 'Raíssa Freitas, das artes à uma sólida carreira na área de tecnologia',
    time: '01:19',
    wide: false,
    bgImage: '/images/home/thumb-video-depoimento-3.png',
  },
]

export function AlumniStories() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Histórias que inspiram fazem a nossa história
      </h2>

      <div className={styles.grid}>
        {stories.map((story) => (
          <div
            key={story.text}
            className={`${styles.column} ${story.wide ? styles.columnWide : styles.columnNarrow}`}
          >
            <div
              className={styles.card}
              style={{ backgroundImage: `url(${story.bgImage})` }}
            >
              <div className={styles.cardOverlay}>
                <span className={styles.alumniPill}>Alumni Stories</span>

                <div className={styles.cardBottomArea}>
                  <span className={styles.cardText}>{story.text}</span>
                  <span className={styles.cardTime}>{story.time}</span>
                </div>
              </div>
            </div>

            {/* Play icon below card */}
            <svg className={styles.playIcon} viewBox="0 0 33 40" fill="currentColor">
              <path d="M33 20L0 40V0L33 20Z" />
            </svg>
          </div>
        ))}
      </div>
    </section>
  )
}

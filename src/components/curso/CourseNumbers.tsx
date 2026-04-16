import styles from './CourseNumbers.module.css'

type Stat = {
  value: string
  description: string
}

type CourseNumbersProps = {
  stats: Stat[]
  imageSrc?: string
  imageCaption?: string
}

export function CourseNumbers({ stats, imageSrc, imageCaption }: CourseNumbersProps) {
  return (
    <section className={styles.section}>
      <p className={styles.overline}>números do curso</p>
      <div className={styles.inner}>
        <div className={styles.statsColumn}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <p className={styles.statDesc}>{stat.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.imageColumn}>
          <div
            className={styles.image}
            style={imageSrc ? { backgroundImage: `url(${imageSrc})` } : undefined}
          >
            {imageCaption && (
              <p className={styles.caption}>
                {imageCaption.includes(':') ? (
                  <>
                    <strong>{imageCaption.split(':')[0]}:</strong>
                    <span>{imageCaption.split(':').slice(1).join(':')}</span>
                  </>
                ) : imageCaption}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

import styles from './Structure.module.css'

type StructureItem = {
  name: string
  imageSrc?: string
}

type StructureProps = {
  overline?: string
  title: string
  items: StructureItem[]
}

export function Structure({ overline = 'ESTRUTURA', title, items }: StructureProps) {
  return (
    <section className={styles.section}>
      {overline && <p className={styles.overline}>{overline}</p>}
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.grid}>
        {items.map((item, i) => (
          <div
            key={i}
            className={styles.card}
            style={item.imageSrc ? {
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%), url(${item.imageSrc})`
            } : undefined}
          >
            <span className={styles.cardName}>{item.name}</span>
            <button className={styles.expandBtn} aria-label="Ver mais">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M10 4l6 6-6 6" stroke="#FFFFFF" strokeWidth="2" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

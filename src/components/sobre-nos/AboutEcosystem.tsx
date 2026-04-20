import styles from './AboutEcosystem.module.css'

interface AboutEcosystemProps {
  title?: string
  leftImage?: string | null
  leftItems?: Array<{ text: string; href?: string }>
  rightItems?: Array<{ text: string; href?: string }>
}

export function AboutEcosystem({
  title = 'Nosso ecossistema em movimento',
  leftImage,
  leftItems = [],
  rightItems = [],
}: AboutEcosystemProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.columns}>
        <div className={styles.left}>
          <div
            className={styles.imageCard}
            style={leftImage ? { backgroundImage: `url(${leftImage})` } : undefined}
          />
          {leftItems.length > 0 && (
            <ul className={styles.list}>
              {leftItems.map((item, i) => (
                <li key={i} className={styles.listItem}>
                  {item.href ? (
                    <a href={item.href} className={styles.listLink}>{item.text}</a>
                  ) : (
                    item.text
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={styles.right}>
          {rightItems.length > 0 && (
            <ul className={styles.list}>
              {rightItems.map((item, i) => (
                <li key={i} className={styles.listItem}>
                  {item.href ? (
                    <a href={item.href} className={styles.listLink}>{item.text}</a>
                  ) : (
                    item.text
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}

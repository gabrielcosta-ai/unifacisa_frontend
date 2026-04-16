import styles from './TopBar.module.css'

type TopBarProps = {
  announcement?: string
  announcementLink?: string
}

export function TopBar({ announcement, announcementLink }: TopBarProps) {
  return (
    <div className={styles.topBar}>
      <div className={styles.inner}>
        {announcement && (
          <span className={styles.announcement}>
            {announcement}
            {announcementLink && (
              <>
                {'  '}
                <a href="#" className={styles.announcementLink}>{announcementLink}</a>
              </>
            )}
          </span>
        )}
        <button className={styles.closeBtn} aria-label="Fechar">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <line x1="1" y1="1" x2="16" y2="16" stroke="black" strokeWidth="2" />
            <line x1="16" y1="1" x2="1" y2="16" stroke="black" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </div>
  )
}

import styles from './NavSecondary.module.css'

type NavSecondaryProps = {
  breadcrumb: { label: string; href?: string }[]
}

export function NavSecondary({ breadcrumb }: NavSecondaryProps) {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.breadcrumb}>
          {breadcrumb.map((item, i) => (
            <span key={i}>
              {item.href ? <a href={item.href}>{item.label}</a> : <span className={styles.breadcrumbCurrent}>{item.label}</span>}
              {i < breadcrumb.length - 1 && ' \\ '}
            </span>
          ))}
        </div>
        <div className={styles.links}>
          <a href="#" className={styles.link}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 2.25H13.5V15.75L9 12.75L4.5 15.75V2.25Z" stroke="#323232" strokeWidth="1.2" fill="none"/>
            </svg>
            Acompanhe sua inscrição
          </a>
          <a href="#" className={styles.link}>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6.5h11L9.5 3.5L4 6.5Z" stroke="#323232" strokeWidth="1.2" fill="none"/>
              <circle cx="9.5" cy="10" r="2.5" stroke="#323232" strokeWidth="1.2"/>
              <path d="M4 17c0-3 2.5-5.5 5.5-5.5S15 14 15 17" stroke="#323232" strokeWidth="1.2" fill="none"/>
            </svg>
            Alumini
          </a>
          <a href="#" className={styles.link}>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 5v7M6 5C6 3.34 7.34 2 9 2M6 12c0 1.66 1.34 3 3 3" stroke="#323232" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
              <path d="M11 6.5c.83.5 1.5 1.5 1.5 2.5s-.67 2-1.5 2.5" stroke="#323232" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
              <path d="M13 5c1.1.8 2 2.2 2 3.5s-.9 2.7-2 3.5" stroke="#323232" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
            </svg>
            Sou Unifacisa
          </a>
          <button className={styles.searchBtn} aria-label="Buscar">
            <svg width="24" height="24" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="13" cy="13" r="9" stroke="#1E1E1E" strokeWidth="2"/>
              <line x1="20" y1="20" x2="28" y2="28" stroke="#1E1E1E" strokeWidth="2"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

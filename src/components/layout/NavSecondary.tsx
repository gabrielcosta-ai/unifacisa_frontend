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
          <span className={styles.link}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 2.25H13.5V15.75L9 12.75L4.5 15.75V2.25Z" stroke="#323232" strokeWidth="1.2" fill="none"/>
            </svg>
            Acompanhe sua inscrição
          </span>
          <span className={styles.link}>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6.5h11L9.5 3.5L4 6.5Z" stroke="#323232" strokeWidth="1.2" fill="none"/>
              <circle cx="9.5" cy="10" r="2.5" stroke="#323232" strokeWidth="1.2"/>
              <path d="M4 17c0-3 2.5-5.5 5.5-5.5S15 14 15 17" stroke="#323232" strokeWidth="1.2" fill="none"/>
            </svg>
            Alumini
          </span>
          <span className={styles.link}>
            <svg width="21" height="21" viewBox="50 49 130 130" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(0,225) scale(0.1,-0.1)" fill="#323232" stroke="none">
                <path d="M1001 1676 c-8 -9 -11 -48 -9 -112 3 -96 4 -99 27 -102 32 -5 41 12 41 86 l0 62 197 0 197 0 -85 -57 -84 -58 -5 -340 -5 -340 -107 -3 -108 -3 0 73 c0 84 -8 101 -41 96 -23 -3 -24 -6 -27 -107 -2 -67 1 -108 9 -117 9 -11 43 -14 145 -14 l134 0 0 -79 c0 -56 4 -82 14 -90 18 -16 23 -13 194 101 l132 88 0 453 c0 339 -3 456 -12 465 -19 19 -591 17 -607 -2z m549 -486 l0 -389 -87 -59 c-49 -32 -94 -62 -100 -66 -10 -6 -13 74 -13 386 l0 393 98 62 c53 34 98 63 100 63 1 0 2 -175 2 -390z"/>
                <path d="M997 1413 c-18 -17 -2 -47 48 -97 30 -29 55 -56 55 -60 0 -3 -102 -7 -226 -8 -196 -3 -228 -5 -237 -19 -6 -9 -7 -24 -4 -33 6 -14 33 -16 237 -16 126 0 230 -4 230 -8 0 -4 -25 -32 -55 -62 -59 -58 -67 -83 -34 -100 18 -10 31 -1 120 86 62 62 99 105 99 119 0 28 -178 205 -206 205 -11 0 -24 -3 -27 -7z"/>
              </g>
            </svg>
            Sou Unifacisa
          </span>
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

import styles from './Header.module.css'
import Image from 'next/image'
import { payloadFindGlobal } from '@/lib/payload'

export async function Header() {
  let logoUrl = '/images/logo-unifacisa-blue.png'
  let logoWidth = 302
  let logoHeight = 70

  try {
    const site = await payloadFindGlobal('site-settings')

    const logo = site.logo as { url?: string; width?: number; height?: number } | string | null | undefined

    if (logo && typeof logo === 'object' && logo.url) {
      logoUrl = logo.url
      if (logo.width) logoWidth = logo.width
      if (logo.height) logoHeight = logo.height
    }
  } catch {
    // Global may not exist yet on first run — use fallback
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <Image
            src={logoUrl}
            alt="Unifacisa"
            width={logoWidth}
            height={logoHeight}
          />
          <span className={styles.slogan}>
            UMA EXPERIÊNCIA QUE{'\n'}MARCA A SUA HISTÓRIA.
          </span>
        </div>
        <a href="#menu" className={styles.menuLink}>MENU</a>
      </div>
      <hr className={styles.divider} />
    </header>
  )
}

import styles from './Header.module.css'
import Image from 'next/image'
import { payloadFindGlobal } from '@/lib/payload'
import { MenuOverlay } from './MenuOverlay'

export async function Header() {
  let logoUrl = '/images/logo-unifacisa-blue.png'
  let logoWidth = 302
  let logoHeight = 70
  let menuData = {}

  try {
    const site = await payloadFindGlobal('site-settings')

    const logo = site.logo as { url?: string; width?: number; height?: number } | string | null | undefined

    if (logo && typeof logo === 'object' && logo.url) {
      logoUrl = logo.url
      if (logo.width) logoWidth = logo.width
      if (logo.height) logoHeight = logo.height
    }

    const menu = await payloadFindGlobal('menu-settings')
    menuData = {
      ctaTitle: menu.ctaTitle,
      buttons: menu.buttons,
      columns: menu.columns,
      bigText: menu.bigText,
    }
  } catch {
    // Globals may not exist yet on first run — use fallbacks
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <a href="/">
            <Image
              src={logoUrl}
              alt="Unifacisa"
              width={logoWidth}
              height={logoHeight}
            />
          </a>
          <span className={styles.slogan}>
            UMA EXPERIÊNCIA QUE{'\n'}MARCA A SUA HISTÓRIA.
          </span>
        </div>
        <MenuOverlay data={menuData} />
      </div>
      <hr className={styles.divider} />
    </header>
  )
}

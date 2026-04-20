import styles from './Footer.module.css'
import Image from 'next/image'
import { payloadFindGlobal } from '@/lib/payload'

const ACTIVE_ROUTES = ['/', '/sobre-nos', '/cursos', '/residencia']
const isActiveLink = (href?: string) => href && ACTIVE_ROUTES.some(r => href === r || href.startsWith('/cursos/'))
const dimStyle = { opacity: 0.4, pointerEvents: 'none' as const }

const FALLBACK_COPYRIGHT = 'CESED - Centro de Ensino Superior e Desenvolvimento Ltda. © 2026 Todos os direitos reservados. CNPJ: 02.108.023/0001-40'
const FALLBACK_BIG_TEXT = 'UNIFACISA, NÃO DÁ PARA COMPARAR.'
const FALLBACK_CREDIT = 'Designed by whf.work'

const FALLBACK_COLUMNS = [
  { title: 'Visão & Essência', links: [{ label: 'Sobre nós', href: '#', style: 'normal' }, { label: 'Como pensamos', href: '#', style: 'normal' }, { label: 'O que já construímos', href: '#', style: 'normal' }] },
  { title: 'Para o estudante', links: [{ label: 'Graduação', href: '#', style: 'normal' }, { label: 'Pós Graduação', href: '#', style: 'normal' }, { label: 'Fellowship', href: '#', style: 'normal' }, { label: 'Residência', href: '#', style: 'normal' }] },
  { title: 'Para a sociedade', links: [{ label: 'Saúde/', href: '#', style: 'bold' }, { label: 'Hospital Help', href: '#', style: 'normal' }, { label: 'Esporte', href: '#', style: 'normal' }, { label: 'Basquete', href: '#', style: 'normal' }, { label: 'Social/', href: '#', style: 'bold' }, { label: 'Projetos Sociais', href: '#', style: 'normal' }, { label: 'Eventos', href: '#', style: 'normal' }, { label: 'Notícias', href: '#', style: 'normal' }, { label: 'Museu', href: '#', style: 'normal' }, { label: 'Vagas de voluntariado', href: '#', style: 'normal' }, { label: 'Comunidade ex-alunos', href: '#', style: 'normal' }, { label: 'Núcleos de Pesquisa', href: '#', style: 'normal' }] },
  { title: 'Vivência', links: [{ label: 'Abordagem Acadêmica', href: '#', style: 'normal' }, { label: 'Ecossistema de Ensino', href: '#', style: 'normal' }, { label: 'Experiência Unifacisa', href: '#', style: 'normal' }] },
  { title: 'Faça parte', links: [{ label: 'Ingresso/', href: '#', style: 'bold' }, { label: 'Enem', href: '#', style: 'bold' }, { label: 'Vestibular', href: '#', style: 'bold' }, { label: 'Transferencia Externa', href: '#', style: 'bold' }, { label: 'Segunda Graduação', href: '#', style: 'bold' }, { label: 'Bolsas e Descontos/', href: '#', style: 'bold' }, { label: 'ProUni', href: '#', style: 'bold' }, { label: 'Nota Enem', href: '#', style: 'bold' }, { label: 'Nota Vestibular', href: '#', style: 'bold' }, { label: 'Convênios', href: '#', style: 'bold' }, { label: 'Ex-alunos', href: '#', style: 'bold' }, { label: 'Família', href: '#', style: 'bold' }, { label: 'Colaborador', href: '#', style: 'bold' }, { label: 'Financiamentos/', href: '#', style: 'bold' }, { label: 'Leme', href: '#', style: 'bold' }, { label: 'Fies', href: '#', style: 'bold' }, { label: 'Vagas Emprego', href: '#', style: 'bold' }] },
  { title: 'Institucional', links: [{ label: 'Secretaria Acadêmica', href: '#', style: 'normal' }, { label: 'Repositório Acadêmico', href: '#', style: 'normal' }, { label: 'CPA', href: '#', style: 'normal' }, { label: 'Cepros', href: '#', style: 'normal' }, { label: 'Ouvidoria', href: '#', style: 'normal' }] },
]

function columnHasBold(links: Array<{ style?: string | null }>): boolean {
  return links.some((l) => l.style === 'bold' || l.style === 'subtitle')
}

export async function Footer() {
  let copyright = FALLBACK_COPYRIGHT
  let columns = FALLBACK_COLUMNS
  let mecGrade = 'NOTA 5 NO MEC'
  let mecLinkText = 'Consulte nosso credenciamento no MEC'
  let mecLinkHref = '#'
  let bigText = FALLBACK_BIG_TEXT
  let designCredit = FALLBACK_CREDIT
  let phone = 'Fale conosco: (83) 2101-8877'
  let addresses: Array<{ name: string; address: string; mapsUrl?: string | null }> = [
    { name: 'Campus Itararé', address: 'Av. Sen. Argemiro de Figueiredo, 1901 Itararé, Campina Grande - PB 58411-020' },
    { name: 'Unifacisa/Esac - Campus Catolé', address: 'R. Luíza Bezerra Mota, 200 Catolé, Campina Grande - PB 58410-410' },
  ]

  try {
    const footer = await payloadFindGlobal('footer-settings')
    if (footer.copyright) copyright = footer.copyright
    if (footer.bigText) bigText = footer.bigText
    if (footer.designCredit) designCredit = footer.designCredit
    if (Array.isArray(footer.columns) && footer.columns.length > 0) {
      columns = footer.columns.map((col: { title: string; links?: Array<{ label: string; href: string; style?: string | null }> }) => ({
        title: col.title,
        links: Array.isArray(col.links) ? col.links.map((l) => ({ label: l.label, href: l.href, style: l.style ?? 'normal' })) : [],
      }))
    }
    const mec = footer.mecBadge as { grade?: string | null; linkText?: string | null; linkHref?: string | null } | undefined
    if (mec?.grade) mecGrade = mec.grade
    if (mec?.linkText) mecLinkText = mec.linkText
    if (mec?.linkHref) mecLinkHref = mec.linkHref

    const site = await payloadFindGlobal('site-settings')
    if (site.phone) phone = `Fale conosco: ${site.phone}`
    if (Array.isArray(site.addresses) && site.addresses.length > 0) {
      addresses = site.addresses.map((a: { name: string; address: string; mapsUrl?: string | null }) => ({ name: a.name, address: a.address, mapsUrl: a.mapsUrl }))
    }
  } catch {
    // use fallbacks
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Top */}
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <a href="/"><Image src="/images/logo-unifacisa-white.png" alt="Unifacisa" width={323} height={72} /></a>
            <p className={styles.copyright}>{copyright}</p>
          </div>
          <div className={styles.topMid}>
            <p className={styles.phone}>{phone}</p>
            {addresses[0] && (
              <div className={styles.addressBlock}>
                <span className={styles.addressName}>{addresses[0].name}:</span>
                <span className={styles.addressText}>{addresses[0].address}</span>
              </div>
            )}
          </div>
          <div className={styles.topRight}>
            {addresses[1] && (
              <div className={styles.addressBlock}>
                <span className={styles.addressName}>{addresses[1].name}</span>
                <span className={styles.addressText}>{addresses[1].address}</span>
              </div>
            )}
          </div>
        </div>

        <hr className={styles.divider} />

        {/* Columns — first column stacks Visão & Essência + Institucional */}
        <div className={styles.columns}>
          {/* Column 1: Visão & Essência + Institucional */}
          <div>
            {columns[0] && (
              <>
                <h3 className={styles.columnTitle}>{columns[0].title}</h3>
                <div className={styles.columnLinks}>
                  {columns[0].links.map((link, j) => (
                    <a key={j} href={link.href} style={isActiveLink(link.href) ? undefined : dimStyle}>{link.label}</a>
                  ))}
                </div>
              </>
            )}
            {columns[5] && (
              <div style={{ marginTop: 40 }}>
                <h3 className={styles.columnTitle}>{columns[5].title}</h3>
                <div className={styles.columnLinks}>
                  {columns[5].links.map((link, j) => (
                    <a key={j} href={link.href} style={isActiveLink(link.href) ? undefined : dimStyle}>{link.label}</a>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Columns 2-5 */}
          {columns.slice(1, 5).map((col, i) => (
            <div key={i}>
              <h3 className={styles.columnTitle}>{col.title}</h3>
              <div className={styles.columnLinks}>
                {col.links.map((link, j) => (
                  <a key={j} href={link.href} className={link.style === 'bold' ? styles.linkBold : undefined} style={isActiveLink(link.href) ? undefined : dimStyle}>{link.label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom: Slogan + MEC + Credit */}
        <div className={styles.bottom}>
          <p className={styles.bigText}>{bigText}</p>
          <div className={styles.bottomRight}>
            <div className={styles.mecSection}>
              <Image src="/images/footer-mec-badge.png" alt="QR Code e Selo MEC - Nota 5 no MEC" width={681} height={113} style={{ objectFit: 'contain' }} />
            </div>
            <p className={styles.credit}>Designed by <strong>whf.work</strong></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

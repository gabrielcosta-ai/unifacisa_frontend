import styles from './CourseInfoCard.module.css'
import Image from 'next/image'

type InfoPill = {
  label: string
  value: string
  outlined?: boolean
}

type IngressLink = {
  label: string
  href: string
}

type CourseInfoCardProps = {
  headline: string
  modalidade: InfoPill[]
  destaques: InfoPill[]
  investimento: InfoPill[]
  formasIngresso: IngressLink[]
  mecNote?: string
}

export function CourseInfoCard({
  headline,
  modalidade,
  destaques,
  investimento,
  formasIngresso,
  mecNote = 'NOTA 5 NO MEC',
}: CourseInfoCardProps) {
  return (
    <section className={styles.card}>
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <div className={styles.topLeft}>
            <span className={styles.label}>visão geral do curso</span>
            <h2 className={styles.headline}>{headline}</h2>
          </div>

          {/* MEC Badge - top right */}
          <div className={styles.mecBadge}>
            <Image
              src="/images/mec-badge.png"
              alt="Nota 5 no MEC"
              width={400}
              height={121}
              className={styles.mecImage}
            />
          </div>
        </div>

        <div className={styles.grid}>
          {/* Column 1: Modalidade */}
          <div className={styles.column}>
            <span className={styles.columnLabel}>modalidade</span>
            <div className={styles.pills}>
              {modalidade.map((p, i) => (
                <span key={i} className={p.outlined ? styles.pillOutlined : styles.pill}>
                  {p.value}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Destaques */}
          <div className={styles.column}>
            <span className={styles.columnLabel}>destaques</span>
            <div className={styles.pills}>
              {destaques.map((p, i) => (
                <span key={i} className={p.outlined ? styles.pillOutlined : styles.pill}>
                  {p.value}
                </span>
              ))}
            </div>
          </div>

          {/* Column 3: Investimento */}
          <div className={styles.column}>
            <span className={styles.columnLabel}>investimento</span>
            <div className={styles.pills}>
              {investimento.map((p, i) => (
                <span key={i} className={p.outlined ? styles.pillOutlined : styles.pill}>
                  {p.value}
                </span>
              ))}
            </div>
          </div>

          {/* Column 4: Formas de Ingresso */}
          <div className={styles.ingressColumn}>
            <span className={styles.columnLabel}>formas de ingresso</span>
            <div className={styles.ingressLinks}>
              {formasIngresso.map((link, i) => (
                <a key={i} href={link.href} className={styles.ingressLink}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

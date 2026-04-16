import Image from 'next/image'
import styles from './Partnerships.module.css'

const newsItems = [
  { text: 'Accenture anuncia programa de estágio para a Unifacisa em 2026', bold: true },
  { text: 'Unifacisa firma parceria com Microsoft para laboratórios de IA', bold: false },
  { text: 'Novo convênio com hospitais amplia campo de estágio para Medicina', bold: false },
  { text: 'Parceria com empresas de tecnologia gera 200 vagas de estágio', bold: false },
]

const previewCards = [
  { label: 'Tour Virtual', image: '/images/home/espaco-campus-aereo.png' },
  { label: 'Biblioteca', image: '/images/home/biblioteca-alunos.png' },
  { label: 'Laboratório Saúde', image: '/images/home/laboratorio-metodologia-inovadora.png' },
]

export function Partnerships() {
  return (
    <section className={styles.section}>
      {/* 6a - Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <p className={styles.overline}>Parcerias em destaque</p>
          <h2 className={styles.title}>
            Parcerias estratégicas para você ir além conosco
          </h2>
        </div>
        <div className={styles.headerRight}>
          <p className={styles.description}>
            Colaboramos com grandes organizações para garantir excelência no ensino e ampliar as
            oportunidades com o mercado.
          </p>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.logosRow}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className={styles.logoPlaceholder} style={{ position: 'relative' }}>
            <Image
              src="/images/home/parceiro-logo-1.png"
              alt={`Parceiro ${i + 1}`}
              fill
              sizes="120px"
              style={{ objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>

      <hr className={styles.divider} />

      {/* 6b - News */}
      <div className={styles.newsSection}>
        <p className={styles.newsOverline}>Atualizações sobre nossas parcerias</p>

        <div className={styles.newsList}>
          {newsItems.map((item) => (
            <p
              key={item.text}
              className={`${styles.newsItem} ${item.bold ? styles.newsItemBold : styles.newsItemRegular}`}
            >
              {item.text}
              <span className={styles.newsArrow}>&#8599;</span>
            </p>
          ))}
        </div>

        <button className={styles.blueBtn}>Ver todas as parcerias</button>
      </div>

      {/* 6c - Structure Preview */}
      <div className={styles.structurePreview}>
        <p className={styles.previewOverline}>Conheça mais sobre nossa estrutura</p>

        <div className={styles.previewCards}>
          {previewCards.map((card) => (
            <div key={card.label} className={styles.previewCard}>
              <Image
                src={card.image}
                alt={card.label}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.previewCardOverlay}>
                <span className={styles.previewCardLabel}>{card.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

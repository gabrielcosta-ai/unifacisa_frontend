import Image from 'next/image'
import styles from './EcosystemStructure.module.css'

interface EcosystemStructureProps {
  overline?: string
  title?: string
  cards?: Array<{
    description: string
    label: string
    size: 'large' | 'small'
    image?: { url: string } | null
    href?: string
  }>
  disclaimer?: string
}

const defaultCards = [
  { description: 'Atendimento à sociedade e ensino andando lado a lado.', label: 'Hospital Help', size: 'large' as const, image: null, href: '#' },
  { description: 'Equipamentos referência no Brasil', label: 'Hospital Help', size: 'small' as const, image: null, href: '#' },
  { description: 'Estrutura de estudos única', label: 'Hospital Help', size: 'small' as const, image: null, href: '#' },
  { description: 'Estrutura completa para saúde física no meio do seu dia', label: 'Hospital Help', size: 'large' as const, image: null, href: '#' },
  { description: 'Arte, cultura e pertencimento', label: 'Hospital Help', size: 'large' as const, image: null, href: '#' },
  { description: 'Esporte e experiência, juntos', label: 'Hospital Help', size: 'small' as const, image: null, href: '#' },
]

const fallbackImages: Record<number, string> = {
  0: '/images/home/eco-hospital-help.png',
  1: '/images/home/eco-robo-cirurgico.png',
  2: '/images/home/eco-biblioteca.jpg',
  3: '/images/home/eco-academia.jpg',
  4: '/images/home/eco-mac-museu.png',
  5: '/images/home/eco-arena-quadra.jpg',
}

const cardDescriptions = [
  <>Atendimento à sociedade e<br />ensino andando lado a lado.</>,
  <>Equipamentos<br />referência no Brasil</>,
  <>Estrutura de<br />estudos única</>,
  <>Estrutura completa para saúde<br />física no meio do seu dia</>,
  <>Arte, cultura e<br />pertencimento</>,
  <>Esporte e experiência,<br />juntos</>,
]

export function EcosystemStructure({ overline, title, cards, disclaimer }: EcosystemStructureProps) {
  const resolvedOverline = overline ?? 'Conheça nossa estrutura'
  const resolvedCards = cards ?? defaultCards
  const resolvedDisclaimer = disclaimer ?? 'Aviso Legal: O uso exclusivo do Hospital Help é uma colaboração técnica entre a fundação Pedro Américo e a Unifacisa'
  const usingDefaults = !cards

  const rows: Array<typeof resolvedCards> = []
  for (let i = 0; i < resolvedCards.length; i += 2) {
    rows.push(resolvedCards.slice(i, i + 2))
  }

  const defaultTitle = (
    <>Aqui, você terá um <span className={styles.titleUnderline}>ecossistema</span> de nível superior, literalmente.</>
  )

  return (
    <section className={styles.section}>
      <p className={styles.overline}>{resolvedOverline}</p>
      <h2 className={styles.title}>
        {title ? title : defaultTitle}
      </h2>

      <div className={styles.grid}>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map((card, cardIndex) => {
              const globalIndex = rowIndex * 2 + cardIndex
              const imageSrc = card.image?.url ?? fallbackImages[globalIndex] ?? ''
              const descriptionContent = usingDefaults && cardDescriptions[globalIndex]
                ? cardDescriptions[globalIndex]
                : card.description

              return (
                <div
                  key={globalIndex}
                  className={`${styles.card} ${card.size === 'large' ? styles.cardLarge : styles.cardSmall}`}
                >
                  {imageSrc && (
                    <Image
                      src={imageSrc}
                      alt={card.description}
                      fill
                      sizes={card.size === 'large' ? '(max-width: 768px) 100vw, 60vw' : '(max-width: 768px) 100vw, 40vw'}
                      style={{ objectFit: 'cover' }}
                    />
                  )}
                  <div className={styles.cardOverlay}>
                    <div className={styles.cardBottom}>
                      <span className={styles.cardDescription}>{descriptionContent}</span>
                      <a href={card.href || '#'} className={styles.cardBtn}>{card.label}</a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ))}
      </div>

      <p className={styles.disclaimer}>
        {resolvedDisclaimer}
      </p>
    </section>
  )
}

import Image from 'next/image'
import styles from './EcosystemStructure.module.css'

const structures = [
  { name: 'Hospital Help', size: 'large', image: '/images/home/hospital-help-ensino.png' },
  { name: 'Laboratórios', size: 'small', image: '/images/home/laboratorio-metodologia-inovadora.png' },
  { name: 'Biblioteca', size: 'small', image: '/images/home/biblioteca-alunos.png' },
  { name: 'Campus', size: 'large', image: '/images/home/campus-fachada-entardecer.png' },
  { name: 'Arena Esportiva', size: 'large', image: '/images/home/arena-unifacisa-basquete.png' },
  { name: 'Espaço Campus', size: 'small', image: '/images/home/espaco-campus-aereo.png' },
] as const

export function EcosystemStructure() {
  const rows = [
    [structures[0], structures[1]],
    [structures[2], structures[3]],
    [structures[4], structures[5]],
  ]

  return (
    <section className={styles.section}>
      <p className={styles.overline}>Conheça nossa estrutura</p>
      <h2 className={styles.title}>
        Aqui, você terá um ecossistema de nível superior, literalmente.
      </h2>

      <div className={styles.grid}>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map((card) => (
              <div
                key={card.name}
                className={`${styles.card} ${card.size === 'large' ? styles.cardLarge : styles.cardSmall}`}
              >
                <Image
                  src={card.image}
                  alt={card.name}
                  fill
                  sizes={card.size === 'large' ? '(max-width: 768px) 100vw, 60vw' : '(max-width: 768px) 100vw, 40vw'}
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.cardOverlay}>
                  <span className={styles.cardName}>{card.name}</span>
                  <button className={styles.cardBtn}>Saiba mais</button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <p className={styles.disclaimer}>
        Aviso Legal: O uso exclusivo do Hospital Help é uma colaboração técnica entre a fundação
        Pedro Américo e a Unifacisa
      </p>
    </section>
  )
}

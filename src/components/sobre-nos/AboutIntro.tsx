import styles from './AboutIntro.module.css'

interface AboutIntroProps {
  title?: string
  description?: string
  cardOverline?: string
  cardAuthor?: string
}

export function AboutIntro({
  title = 'Quem somos',
  description = 'Somos uma instituicao comprometida com a excelencia no ensino, a inovacao e a transformacao social.',
  cardOverline = 'Colaboramos com grandes organizacoes para garantir excelencia no ensino e ampliar as oportunidades com o mercado.',
  cardAuthor = 'Diego Gadelha, CEO do Grupo Unifacisa',
}: AboutIntroProps) {
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.right}>
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <p className={styles.cardOverline}>{cardOverline}</p>
            <span className={styles.arrowButton} aria-hidden="true">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <path d="M0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32Z" fill="white"/>
                <path d="M41.9136 38.9609C42.8857 38.9698 43.6663 38.1887 43.6579 37.2167L43.6919 21.4888C43.683 20.5165 42.8877 19.7213 41.9154 19.7124L26.0852 19.7446C25.1133 19.7361 24.3321 20.5167 24.341 21.4888C24.3499 22.4608 25.1133 23.1848 26.0852 23.1941L37.6976 23.1941L20.9397 39.952C20.2585 40.6332 20.2687 41.7479 20.9625 42.4417C21.6563 43.1355 22.771 43.1457 23.4522 42.4645L40.2101 25.7066L40.2101 37.2167C40.2194 38.1887 40.9416 38.9521 41.9136 38.9609Z" fill="#0153FF"/>
              </svg>
            </span>
          </div>
          <p className={styles.cardAuthor}>
            {cardAuthor.split(',')[0]}
            {cardAuthor.includes(',') && (
              <span>,{cardAuthor.split(',').slice(1).join(',')}</span>
            )}
          </p>
        </div>
      </div>
    </section>
  )
}

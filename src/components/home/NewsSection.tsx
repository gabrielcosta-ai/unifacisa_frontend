import Image from 'next/image'
import styles from './NewsSection.module.css'

const newsItems = [
  {
    date: '01/03/2026',
    headline:
      'A Unifacisa, em parceria com a Fundação Pedro Américo e o Hospital HELP promovem campanha para mulheres em situação de vulnerabilidade',
  },
  {
    date: '01/03/2026',
    headline:
      'Unifacisa recebe evento que conecta alunos de tecnologia ao mercado de trabalho',
  },
  {
    date: '01/03/2026',
    headline: 'Nota Oficial',
  },
]

const events = [
  'Projeto Integrador - Direito e Arte',
  'Basquete Unifacisa SOCIAL - Núcleo ESAC',
  'Formação Continuada de Professores',
  'Formação Continuada de Professores do Curso de Medicina',
]

export function NewsSection() {
  return (
    <section className={styles.section}>
      {/* 8a - Acontecimentos */}
      <div className={styles.newsBlock}>
        <p className={styles.overline}>Acontecimentos</p>
        <h2 className={styles.newsTitle}>Nosso ecossistema em movimento</h2>

        <div className={styles.newsContent}>
          <div className={styles.newsImage}>
            <Image
              src="/images/home/professor-biblioteca-orientacao.png"
              alt="Acontecimentos Unifacisa"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
            <span className={styles.newsPill}>Alumni Stories</span>
            <div className={styles.playIcon}>&#9654;</div>
          </div>

          <div className={styles.newsRight}>
            {newsItems.map((item) => (
              <div key={item.headline}>
                <p className={styles.newsItemDate}>{item.date}</p>
                <p className={styles.newsItemHeadline}>
                  {item.headline}
                  <span className={styles.newsArrow}>&#8599;</span>
                </p>
              </div>
            ))}

            <button className={styles.blueBtn}>Ver todas as notícias</button>
          </div>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* 8b - Próximos Eventos */}
      <div className={styles.eventsBlock}>
        <p className={styles.overline}>Próximos eventos</p>

        <div className={styles.eventsContent}>
          <div className={styles.eventsImage}>
            <Image
              src="/images/home/sala-estudo-colaborativa.png"
              alt="Próximos eventos Unifacisa"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
            <span className={styles.eventsPill}>Destaque</span>
          </div>

          <div className={styles.eventsRight}>
            {events.map((name) => (
              <div key={name} className={styles.eventItem}>
                <span className={styles.eventName}>{name}</span>
                <button className={styles.eventBtn}>Inscreva-se</button>
              </div>
            ))}

            <button className={styles.purpleBtn}>Veja a agenda completa</button>
          </div>
        </div>
      </div>

      <hr className={styles.dividerBottom} />
    </section>
  )
}

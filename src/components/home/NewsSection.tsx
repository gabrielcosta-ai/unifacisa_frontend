import styles from './NewsSection.module.css'
import { VideoClickWrapper } from '@/components/ui/VideoClickWrapper'

interface NewsSectionProps {
  newsOverline?: string
  newsTitle?: string
  newsImage?: { url: string } | null
  newsItems?: Array<{ date: string; headline: string; href?: string }>
  newsBtnLabel?: string
  newsBtnHref?: string
  newsVideoUrl?: string
  newsVideoOverlayTitle?: string
  newsVideoDuration?: string
  eventsOverline?: string
  eventsImage?: { url: string } | null
  events?: Array<{ date: string; title: string; href?: string }>
  eventsBtnLabel?: string
  eventsBtnHref?: string
  eventsVideoUrl?: string
  eventsVideoOverlayTitle?: string
  eventsVideoDatePill?: string
}

const defaultNewsItems = [
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

const defaultEvents = [
  { date: '04.Maio_2026', title: 'Projeto Integrador – \u201CDireito e Arte\u201D' },
  { date: '09.Maio_2026', title: 'Basquete Unifacisa SOCIAL – Núcleo ESAC' },
  { date: '14.junho_2026', title: 'Formação Continuada de Professores' },
  { date: '22.Junho_2026', title: 'Formação Continuada de Professores do Curso de Medicina' },
  { date: '09.Maio_2026', title: 'Basquete Unifacisa SOCIAL – Núcleo ESAC' },
  { date: '14.junho_2026', title: 'Formação Continuada de Professores' },
]

export function NewsSection({
  newsOverline = 'Acontecimentos',
  newsTitle,
  newsItems,
  newsBtnLabel = 'Ver todas as notícias',
  newsBtnHref,
  newsVideoUrl = '/videos/alumni-stories.mp4',
  newsVideoOverlayTitle = 'Curso de Direito da Unifacisa promove palestras com literatura clássica e cultura popular nordestina',
  newsVideoDuration = '01:19',
  eventsOverline = 'Próximos eventos',
  events = defaultEvents,
  eventsBtnLabel = 'Ver todos os eventos',
  eventsBtnHref,
  eventsVideoUrl = '/videos/recepcao-calouros.mp4',
  eventsVideoOverlayTitle = 'Recepção de calouros',
  eventsVideoDatePill = '04.Maio_2026',
}: NewsSectionProps) {
  const resolvedNewsItems = newsItems ?? defaultNewsItems
  const usingDefaultNews = !newsItems

  return (
    <section className={styles.section}>
      {/* 8a - Acontecimentos */}
      <div className={styles.newsBlock}>
        <p className={styles.overline}>{newsOverline}</p>
        <h2 className={styles.newsTitle}>
          {newsTitle ? newsTitle : <>Nosso ecossistema em<br />movimento</>}
        </h2>

        <div className={styles.newsContent}>
          {/* Card de vídeo com placeholder cinza */}
          <VideoClickWrapper videoSrc={newsVideoUrl} className={styles.newsImage}>
            <video
              className={styles.videoBackground}
              src={newsVideoUrl}
              autoPlay
              muted
              loop
              playsInline
            />
            <span className={styles.newsPill}>Alumni Stories</span>
            <svg className={styles.playIcon} viewBox="0 0 33 40" fill="currentColor">
              <path d="M33 20L0 40V0L33 20Z" />
            </svg>
            <div className={styles.cardBottomOverlay}>
              <p className={styles.cardOverlayTitle}>
                {newsVideoOverlayTitle}
              </p>
              <span className={styles.cardOverlayDuration}>{newsVideoDuration}</span>
            </div>
          </VideoClickWrapper>

          <div className={styles.newsRight}>
            {usingDefaultNews ? (
              <>
                <div>
                  <p className={styles.newsItemDate}>01/03/2026</p>
                  <p className={styles.newsItemHeadline}>
                    A Unifacisa, em parceria com a Fundação Pedro<br />
                    Américo e o Hospital HELP promovem<br />
                    campanha para mulheres em situação de<br />
                    vulnerabilidade <span className={styles.newsArrow}>&rarr;</span>
                  </p>
                </div>
                <div>
                  <p className={styles.newsItemDate}>01/03/2026</p>
                  <p className={styles.newsItemHeadline}>
                    Unifacisa recebe evento que conecta alunos de<br />
                    tecnologia ao mercado de trabalho <span className={styles.newsArrow}>&rarr;</span>
                  </p>
                </div>
                <div>
                  <p className={styles.newsItemDate}>01/03/2026</p>
                  <p className={styles.newsItemHeadline}>
                    Nota Oficial <span className={styles.newsArrow}>&rarr;</span>
                  </p>
                </div>
              </>
            ) : (
              resolvedNewsItems.map((item, i) => (
                <div key={i}>
                  <p className={styles.newsItemDate}>{item.date}</p>
                  <p className={styles.newsItemHeadline}>
                    {item.headline} <span className={styles.newsArrow}>&rarr;</span>
                  </p>
                </div>
              ))
            )}

            <div className={styles.btnRight}>
              {newsBtnHref ? (
                <a href={newsBtnHref} className={styles.blueBtn}>{newsBtnLabel}</a>
              ) : (
                <button className={styles.blueBtn}>{newsBtnLabel}</button>
              )}
            </div>
          </div>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* 8b - Próximos Eventos */}
      <div className={styles.eventsBlock}>
        <p className={styles.overline}>{eventsOverline}</p>

        <div className={styles.eventsContent}>
          {/* Card de vídeo com placeholder cinza */}
          <VideoClickWrapper videoSrc={eventsVideoUrl} className={styles.eventsImage}>
            <video
              className={styles.videoBackground}
              src={eventsVideoUrl}
              autoPlay
              muted
              loop
              playsInline
            />
            <span className={styles.eventsPill}>Destaque</span>
            <svg className={styles.playIcon} viewBox="0 0 33 40" fill="currentColor">
              <path d="M33 20L0 40V0L33 20Z" />
            </svg>
            <div className={styles.cardBottomOverlay}>
              <p className={styles.cardOverlayTitle}>
                {eventsVideoOverlayTitle}
              </p>
              <span className={styles.eventDatePill}>{eventsVideoDatePill}</span>
            </div>
          </VideoClickWrapper>

          <div className={styles.eventsRight}>
            {events.map((event, i) => (
              <a key={i} href={event.href || '#'} className={styles.eventItem}>
                <span className={styles.eventDatePillSmall}>{event.date}</span>
                <span className={styles.eventName}>{event.title}</span>
              </a>
            ))}

            <div className={styles.btnRight}>
              {eventsBtnHref ? (
                <a href={eventsBtnHref} className={styles.purpleBtn}>{eventsBtnLabel}</a>
              ) : (
                <button className={styles.purpleBtn}>{eventsBtnLabel}</button>
              )}
            </div>
          </div>
        </div>
      </div>

      <hr className={styles.dividerBottom} />
    </section>
  )
}

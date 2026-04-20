import styles from './HeroHome.module.css'

interface HeroHomeProps {
  heading?: string
  subheading?: string
  backgroundImage?: { url: string } | null
  videoUrl?: string
  vestibularBtnLabel?: string
  vestibularBtnHref?: string
  belowTitle?: string
  coursesBtnLabel?: string
  coursesBtnHref?: string
}

export function HeroHome({
  heading = 'Não dá para comparar',
  subheading = 'Experiência de ensino realmente superior,\nseja bem-vindo(a) à Unifacisa.',
  backgroundImage,
  videoUrl = '/videos/hero-home.mp4',
  vestibularBtnLabel = 'Vestibular 2026 · Inscreva-se',
  vestibularBtnHref = '#vestibular',
  belowTitle = 'Aprender fazendo:\nconheça a excelência Unifacisa',
  coursesBtnLabel = 'Ver todos os cursos e modalidades',
  coursesBtnHref = '/cursos',
}: HeroHomeProps) {
  const bgUrl = backgroundImage?.url || '/images/home/campus-fachada-alunos.png'

  const belowTitleParts = belowTitle.split('\n')
  const belowTitleFirst = belowTitleParts[0]
  const belowTitleRest = belowTitleParts.slice(1).join('\n')

  const subheadingParts = subheading.split('\n')

  return (
    <section className={styles.section}>
      <div className={styles.heroImageWrapper}>
        <video
          className={styles.heroVideo}
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>{heading}</h1>
          <p className={styles.heroSubtitle}>
            {subheadingParts.map((part, i) => {
              if (i === subheadingParts.length - 1) {
                const unifacisaIndex = part.indexOf('Unifacisa')
                if (unifacisaIndex !== -1) {
                  const before = part.slice(0, unifacisaIndex)
                  const after = part.slice(unifacisaIndex + 'Unifacisa'.length)
                  return (
                    <span key={i}>
                      {before}
                      <span className={styles.unifacisaUnderline}>Unifacisa</span>
                      {after}
                    </span>
                  )
                }
                return <span key={i}>{part}</span>
              }
              return (
                <span key={i}>
                  {part}
                  {'\n'}
                </span>
              )
            })}
          </p>
        </div>

        <div className={styles.heroBottomRight}>
          <a href={vestibularBtnHref} className={styles.vestibularBtn}>
            {vestibularBtnLabel}
          </a>
        </div>
      </div>

      <div className={styles.belowHero}>
        <h2 className={styles.belowHeroTitle}>
          <span className={styles.underline}>{belowTitleFirst}</span>
          {belowTitleRest ? `\n${belowTitleRest}` : ''}
        </h2>
        <a href={coursesBtnHref} className={styles.coursesBtn}>
          {coursesBtnLabel}
        </a>
      </div>

      <hr className={styles.divider} />
    </section>
  )
}

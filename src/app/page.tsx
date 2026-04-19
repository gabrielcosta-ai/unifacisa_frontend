import { payloadFindGlobal, mediaUrl } from '@/lib/payload'
import {
  HeroHome,
  FeaturedCourses,
  Mission,
  AlumniStories,
  EcosystemStructure,
  Partnerships,
  AdmissionLinks,
  NewsSection,
  VestibularCTA,
} from '@/components/home'

export const dynamic = 'force-dynamic'

function resolveMedia(media: any) {
  if (!media) return null
  const url = typeof media === 'string' ? media : media.url
  return url ? { url: mediaUrl(url) } : null
}

export default async function Home() {
  let hp: any = {}

  try {
    hp = await payloadFindGlobal('homepage-settings')
  } catch {
    // fallback to defaults — components have hardcoded values
  }

  const hero = hp.hero || {}
  const below = hp.belowHero || {}
  const fc = hp.featuredCourses || {}
  const mis = hp.mission || {}
  const alumni = hp.alumniStories || {}
  const eco = hp.ecosystem || {}
  const part = hp.partnerships || {}
  const adm = hp.admissionLinks || {}
  const news = hp.newsSection || {}
  const vest = hp.vestibularCta || {}

  // Parse admission links into boldPart/restText format
  const parseLink = (l: any) => {
    const text = String(l.text || '')
    const colonIdx = text.indexOf(':')
    if (colonIdx >= 0) {
      return { boldPart: text.slice(0, colonIdx + 1), restText: ' ' + text.slice(colonIdx + 1).trim(), href: l.href }
    }
    const commaIdx = text.indexOf(',')
    if (commaIdx >= 0) {
      return { boldPart: text.slice(0, commaIdx + 1), restText: ' ' + text.slice(commaIdx + 1).trim(), href: l.href }
    }
    return { boldPart: text, restText: '', href: l.href }
  }

  return (
    <main>
      <HeroHome
        heading={hero.heading}
        subheading={hero.subheading}
        backgroundImage={resolveMedia(hero.backgroundImage)}
        vestibularBtnLabel={hero.vestibularBtnLabel}
        vestibularBtnHref={hero.vestibularBtnHref}
        belowTitle={below.title}
        coursesBtnLabel={below.coursesBtnLabel}
        coursesBtnHref={below.coursesBtnHref}
      />

      <FeaturedCourses
        overline={fc.overline}
        courses={fc.courses?.length > 0 ? fc.courses.map((c: any) => ({
          area: c.area,
          courseName: c.courseName,
          pillColor: c.pillColor,
          image: resolveMedia(c.image),
          href: c.href,
        })) : undefined}
      />

      <Mission
        overline={mis.overline}
        quote={mis.quote}
        author={mis.author}
        buttonLabel={mis.buttonLabel}
        buttonHref={mis.buttonHref}
      />

      <AlumniStories
        title={alumni.title}
        stories={alumni.stories?.length > 0 ? alumni.stories.map((s: any) => ({
          name: s.name,
          text: s.text,
          duration: s.duration,
          wide: s.wide,
          image: resolveMedia(s.image),
          videoUrl: s.videoUrl,
        })) : undefined}
      />

      <EcosystemStructure
        overline={eco.overline}
        title={eco.title}
        cards={eco.cards?.length > 0 ? eco.cards.map((c: any) => ({
          description: c.description || c.name,
          label: c.buttonLabel || 'Saiba mais',
          size: c.size || 'large',
          image: resolveMedia(c.image),
          href: c.buttonHref || c.linkHref,
        })) : undefined}
        disclaimer={eco.disclaimer}
      />

      <Partnerships
        overline={part.overline}
        title={part.title}
        description={part.description}
        logos={part.logos?.length > 0 ? part.logos.map((l: any) => ({
          image: resolveMedia(l.image) || { url: '' },
          name: l.name,
        })) : undefined}
        newsOverline={part.newsOverline}
        news={part.news?.length > 0 ? part.news.map((n: any) => ({
          headline: n.headline,
          bold: n.bold,
          href: n.href,
        })) : undefined}
        buttonLabel={part.buttonLabel}
        buttonHref={part.buttonHref}
        previewOverline={part.previewOverline}
        previewCards={part.previewCards?.length > 0 ? part.previewCards.map((p: any) => ({
          label: p.label,
          image: resolveMedia(p.image),
          href: p.href,
        })) : undefined}
      />

      <AdmissionLinks
        eyebrowText={adm.eyebrowText}
        title={adm.title}
        leftColumnLabel={adm.leftColumnLabel}
        rightColumnLabel={adm.rightColumnLabel}
        leftLinks={adm.leftLinks?.length > 0 ? adm.leftLinks.map(parseLink) : undefined}
        rightLinks={adm.rightLinks?.length > 0 ? adm.rightLinks.map(parseLink) : undefined}
      />

      <NewsSection
        newsOverline={news.newsOverline}
        newsTitle={news.newsTitle}
        newsItems={news.newsItems?.length > 0 ? news.newsItems.map((n: any) => ({
          date: n.date,
          headline: n.headline,
          href: n.href,
        })) : undefined}
        newsBtnLabel={news.newsBtnLabel}
        newsBtnHref={news.newsBtnHref}
        newsVideoUrl={news.newsVideoUrl}
        newsVideoOverlayTitle={news.newsVideoOverlayTitle}
        newsVideoDuration={news.newsVideoDuration}
        eventsOverline={news.eventsOverline}
        events={news.events?.length > 0 ? news.events.map((e: any) => ({
          date: e.date,
          title: e.title,
          href: e.href,
        })) : undefined}
        eventsBtnLabel={news.eventsBtnLabel}
        eventsBtnHref={news.eventsBtnHref}
        eventsVideoUrl={news.eventsVideoUrl}
        eventsVideoOverlayTitle={news.eventsVideoOverlayTitle}
        eventsVideoDatePill={news.eventsVideoDatePill}
      />

      <VestibularCTA
        vestibularInfo={vest.vestibularInfo}
        cardOverline={vest.cardOverline}
        cardTitle={vest.cardTitle}
        greenBtnLabel={vest.greenBtnLabel}
        greenBtnHref={vest.greenBtnHref}
        outlineBtnLabel={vest.outlineBtnLabel}
        outlineBtnHref={vest.outlineBtnHref}
      />
    </main>
  )
}

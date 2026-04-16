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

export default function Home() {
  return (
    <main>
      <HeroHome />
      <FeaturedCourses />
      <Mission />
      <AlumniStories />
      <EcosystemStructure />
      <Partnerships />
      <AdmissionLinks />
      <NewsSection />
      <VestibularCTA />
    </main>
  )
}

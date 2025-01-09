import AboutHero from '@/components/about/Hero'
import MissionVision from '@/components/about/MissionVision'
import Values from '@/components/about/Values'
import Team from '@/components/about/Team'
import PageTransition from '@/components/layout/PageTransition'
import Seo from '@/components/common/Seo'

export default function AboutPage() {
  return (
    <PageTransition>
      <Seo page="about" />
      <AboutHero />
      <MissionVision />
      <Values />
      <Team />
    </PageTransition>
  )
} 
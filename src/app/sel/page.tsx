import SELHero from '@/components/sel/Hero'
import Intro from '@/components/sel/Intro'
import Benefits from '@/components/sel/Benefits'
import Framework from '@/components/sel/Framework'
import CTA from '@/components/sel/CTA'
import PageTransition from '@/components/layout/PageTransition'
import Seo from '@/components/common/Seo'

export default function SELPage() {
  return (
    <PageTransition>
      <Seo page="sel" />
      <SELHero />
      <Intro />
      <Benefits />
      <Framework />
      <CTA />
    </PageTransition>
  )
} 
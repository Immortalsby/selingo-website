import SELHero from '@/components/sel/Hero'
import Intro from '@/components/sel/Intro'
import Benefits from '@/components/sel/Benefits'
import Framework from '@/components/sel/Framework'
import CTA from '@/components/sel/CTA'
import PageTransition from '@/components/layout/PageTransition'
import { generateMetadata } from '@/components/common/Seo'

// 导出 metadata 配置
export const metadata = generateMetadata({ 
  page: 'sel',
  locale: 'zh'
})

export default function SELPage() {
  return (
    <PageTransition>
      <SELHero />
      <Intro />
      <Benefits />
      <Framework />
      <CTA />
    </PageTransition>
  )
} 
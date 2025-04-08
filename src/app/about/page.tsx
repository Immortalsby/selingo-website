import AboutHero from '@/components/about/Hero'
import MissionVision from '@/components/about/MissionVision'
import Values from '@/components/about/Values'
import Team from '@/components/about/Team'
import PageTransition from '@/components/layout/PageTransition'
import { generateMetadata } from '@/components/common/Seo'

// 导出 metadata 配置
export const metadata = generateMetadata({ 
  page: 'about',
  locale: 'zh'
})

export default function AboutPage() {
  return (
    <PageTransition>
      <AboutHero />
      <MissionVision />
      <Values />
      <Team />
    </PageTransition>
  )
} 
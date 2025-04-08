import PageTransition from '@/components/layout/PageTransition'
import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import { generateMetadata } from '@/components/common/Seo'

// 导出 metadata 配置
export const metadata = generateMetadata({ 
  page: 'home',
  locale: 'zh' // 默认使用中文，之后可以根据实际需求调整
})

export default function Home() {
  return (
    <PageTransition>
      <div className="space-y-32 pb-32">
        <Hero />
        <Features />
      </div>
    </PageTransition>
  )
}

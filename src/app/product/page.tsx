import ProductHero from '@/components/product/Hero'
import Features from '@/components/product/Features'
import Scenarios from '@/components/product/Scenarios'
import CTA from '@/components/product/CTA'
import PageTransition from '@/components/layout/PageTransition'
import { generateMetadata } from '@/components/common/Seo'

// 导出 metadata 配置
export const metadata = generateMetadata({ 
  page: 'product',
  locale: 'zh'
})

export default function ProductPage() {
  return (
    <PageTransition>
      <ProductHero />
      <Features />
      <Scenarios />
      <CTA />
    </PageTransition>
  )
} 
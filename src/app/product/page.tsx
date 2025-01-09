import ProductHero from '@/components/product/Hero'
import Features from '@/components/product/Features'
import Scenarios from '@/components/product/Scenarios'
import CTA from '@/components/product/CTA'
import PageTransition from '@/components/layout/PageTransition'
import Seo from '@/components/common/Seo'

export default function ProductPage() {
  return (
    <PageTransition>
      <Seo page="product" />
      <ProductHero />
      <Features />
      <Scenarios />
      <CTA />
    </PageTransition>
  )
} 
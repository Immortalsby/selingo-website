import PageTransition from '@/components/layout/PageTransition'
import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import Seo from '@/components/common/Seo'

export default function Home() {
  return (
    <PageTransition>
      <Seo page="home" />
      <div className="space-y-32 pb-32">
        <Hero />
        <Features />
      </div>
    </PageTransition>
  )
}

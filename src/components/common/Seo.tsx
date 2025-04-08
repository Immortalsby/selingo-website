import { seoConfig } from '@/lib/seo/config'
import { Metadata } from 'next'

interface SeoProps {
  page: 'home' | 'about' | 'product' | 'sel'
  locale: string
}

export function generateMetadata({ page, locale }: SeoProps): Metadata {
  const config = seoConfig[locale][page]
  
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    
    openGraph: {
      type: 'website',
      title: config.title,
      description: config.description,
      siteName: 'SELINGO',
    },
    
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
    },
    
    alternates: {
      canonical: 'https://selingo.ai',
      languages: {
        'zh': `https://selingo.ai/zh${page === 'home' ? '' : `/${page}`}`,
        'en': `https://selingo.ai/en${page === 'home' ? '' : `/${page}`}`,
        'fr': `https://selingo.ai/fr${page === 'home' ? '' : `/${page}`}`,
      }
    },
    
    robots: {
      index: true,
      follow: true,
    }
  }
} 
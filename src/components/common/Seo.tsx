'use client'

import { seoConfig } from '@/lib/seo/config'
import { useTranslations } from '@/lib/i18n/context'
import Head from 'next/head'

interface SeoProps {
  page: 'home' | 'about' | 'product' | 'sel'
}

export default function Seo({ page }: SeoProps) {
  const { locale } = useTranslations()
  const config = seoConfig[locale][page]

  return (
    <Head>
      <title>{config.title}</title>
      <meta name="description" content={config.description} />
      <meta name="keywords" content={config.keywords.join(', ')} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={config.title} />
      <meta property="og:description" content={config.description} />
      <meta property="og:site_name" content="SELINGO" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={config.title} />
      <meta name="twitter:description" content={config.description} />

      {/* Alternate Language Links */}
      <link rel="alternate" hrefLang="zh" href={`https://selingo.ai/zh${page === 'home' ? '' : `/${page}`}`} />
      <link rel="alternate" hrefLang="en" href={`https://selingo.ai/en${page === 'home' ? '' : `/${page}`}`} />
      <link rel="alternate" hrefLang="fr" href={`https://selingo.ai/fr${page === 'home' ? '' : `/${page}`}`} />
      <link rel="alternate" hrefLang="x-default" href={`https://selingo.ai${page === 'home' ? '' : `/${page}`}`} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content={locale} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
    </Head>
  )
} 
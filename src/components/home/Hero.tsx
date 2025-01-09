'use client'

import { useTranslations } from '@/lib/i18n/context'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  const { t } = useTranslations()

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {t('home.hero.title')}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {t('home.hero.subtitle')}
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="/download"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {t('home.hero.cta')}
            </Link>
            <Link href="/product" className="text-sm font-semibold leading-6 text-gray-900">
              {t('common.product')} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <Image
              src="/images/hero-app.png"
              alt="SELINGO App Screenshot"
              width={1404}
              height={866}
              className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
} 
'use client'

import { useTranslations } from '@/lib/i18n/context'

export default function Intro() {
  const { t } = useTranslations()

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            {t('sel.intro.title')}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {t('sel.intro.description')}
          </p>
        </div>
      </div>
    </div>
  )
} 
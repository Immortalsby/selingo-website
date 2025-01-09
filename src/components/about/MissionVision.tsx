'use client'

import { useTranslations } from '@/lib/i18n/context'

export default function MissionVision() {
  const { t } = useTranslations()

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t('about.mission.title')}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t('about.mission.description')}
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t('about.vision.title')}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t('about.vision.description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 
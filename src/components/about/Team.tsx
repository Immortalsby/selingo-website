'use client'

import { useTranslations } from '@/lib/i18n/context'

export default function Team() {
  const { t } = useTranslations()

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('about.team.title')}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {t('about.team.description')}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
          {/* 这里可以添加团队成员的照片和介绍 */}
        </div>
      </div>
    </div>
  )
} 
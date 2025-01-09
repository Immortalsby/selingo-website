'use client'

import { useTranslations } from '@/lib/i18n/context'
import { BeakerIcon, HeartIcon, UserGroupIcon } from '@heroicons/react/24/outline'

export default function Values() {
  const { t } = useTranslations()

  const values = [
    {
      name: t('about.values.innovation'),
      description: t('about.values.innovation.desc'),
      icon: BeakerIcon,
    },
    {
      name: t('about.values.care'),
      description: t('about.values.care.desc'),
      icon: HeartIcon,
    },
    {
      name: t('about.values.growth'),
      description: t('about.values.growth.desc'),
      icon: UserGroupIcon,
    },
  ]

  return (
    <div className="bg-blue-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('about.values.title')}
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name} className="flex flex-col items-center text-center">
                <dt className="flex flex-col items-center gap-y-4">
                  <div className="rounded-lg bg-white p-4 ring-1 ring-gray-200">
                    <value.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <div className="text-base font-semibold leading-7 text-gray-900">
                    {value.name}
                  </div>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{value.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 
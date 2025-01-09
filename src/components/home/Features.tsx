'use client'

import { useTranslations } from '@/lib/i18n/context'
import { RocketLaunchIcon, HeartIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function Features() {
  const { t } = useTranslations()

  const features = [
    {
      name: t('home.features.ai'),
      description: t('home.features.ai.desc'),
      icon: RocketLaunchIcon,
    },
    {
      name: t('home.features.sel'),
      description: t('home.features.sel.desc'),
      icon: HeartIcon,
    },
    {
      name: t('home.features.growth'),
      description: t('home.features.growth.desc'),
      icon: SparklesIcon,
    },
  ]

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            SELINGO
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('home.features.title')}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon
                    className="h-5 w-5 flex-none text-blue-600"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 
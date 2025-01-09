'use client'

import { useTranslations } from '@/lib/i18n/context'
import { HomeIcon, AcademicCapIcon, HeartIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function Scenarios() {
  const { t } = useTranslations()

  const scenarios = [
    {
      name: t('product.scenarios.home'),
      description: t('product.scenarios.home.desc'),
      icon: HomeIcon,
      image: '/images/scenario-home.png',
    },
    {
      name: t('product.scenarios.school'),
      description: t('product.scenarios.school.desc'),
      icon: AcademicCapIcon,
      image: '/images/scenario-school.png',
    },
    {
      name: t('product.scenarios.therapy'),
      description: t('product.scenarios.therapy.desc'),
      icon: HeartIcon,
      image: '/images/scenario-therapy.png',
    },
  ]

  return (
    <div className="bg-blue-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('product.scenarios.title')}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {t('product.scenarios.subtitle')}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {scenarios.map((scenario) => (
              <div key={scenario.name} className="flex flex-col items-center">
                <div className="relative mb-8 h-64 w-full overflow-hidden rounded-2xl">
                  <Image
                    src={scenario.image}
                    alt={scenario.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center gap-x-3">
                  <scenario.icon
                    className="h-6 w-6 flex-none text-blue-600"
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    {scenario.name}
                  </h3>
                </div>
                <p className="mt-4 text-center text-base leading-7 text-gray-600">
                  {scenario.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 
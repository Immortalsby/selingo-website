'use client'

import { useTranslations } from '@/lib/i18n/context'
import {
  HeartIcon,
  UserGroupIcon,
  AcademicCapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

export default function Benefits() {
  const { t } = useTranslations()

  const benefits = [
    {
      name: t('sel.benefits.emotional.title'),
      description: t('sel.benefits.emotional.desc'),
      icon: HeartIcon,
    },
    {
      name: t('sel.benefits.social.title'),
      description: t('sel.benefits.social.desc'),
      icon: UserGroupIcon,
    },
    {
      name: t('sel.benefits.academic.title'),
      description: t('sel.benefits.academic.desc'),
      icon: AcademicCapIcon,
    },
    {
      name: t('sel.benefits.life.title'),
      description: t('sel.benefits.life.desc'),
      icon: SparklesIcon,
    },
  ]

  return (
    <div className="bg-blue-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('sel.benefits.title')}
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <benefit.icon
                    className="h-5 w-5 flex-none text-blue-600"
                    aria-hidden="true"
                  />
                  {benefit.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{benefit.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 
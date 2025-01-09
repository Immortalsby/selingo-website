'use client'

import { useTranslations } from '@/lib/i18n/context'
import {
  UserIcon,
  AdjustmentsHorizontalIcon,
  UsersIcon,
  HeartIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline'

export default function Framework() {
  const { t } = useTranslations()

  const competencies = [
    {
      name: t('sel.framework.selfAwareness.title'),
      description: t('sel.framework.selfAwareness.desc'),
      icon: UserIcon,
    },
    {
      name: t('sel.framework.selfManagement.title'),
      description: t('sel.framework.selfManagement.desc'),
      icon: AdjustmentsHorizontalIcon,
    },
    {
      name: t('sel.framework.socialAwareness.title'),
      description: t('sel.framework.socialAwareness.desc'),
      icon: UsersIcon,
    },
    {
      name: t('sel.framework.relationships.title'),
      description: t('sel.framework.relationships.desc'),
      icon: HeartIcon,
    },
    {
      name: t('sel.framework.decisions.title'),
      description: t('sel.framework.decisions.desc'),
      icon: LightBulbIcon,
    },
  ]

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('sel.framework.title')}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {t('sel.framework.subtitle')}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {competencies.map((competency) => (
              <div key={competency.name} className="flex flex-col items-center text-center">
                <dt className="flex flex-col items-center gap-y-4">
                  <div className="rounded-lg bg-blue-50 p-4 ring-1 ring-blue-100">
                    <competency.icon
                      className="h-6 w-6 text-blue-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text-base font-semibold leading-7 text-gray-900">
                    {competency.name}
                  </div>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{competency.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 
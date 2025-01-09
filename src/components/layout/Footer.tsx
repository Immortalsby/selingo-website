'use client'

import Link from 'next/link'
import { useTranslations } from '@/lib/i18n/context'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useTranslations()

  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{t('footer.about')}</h3>
            <p className="mt-4 text-sm text-gray-600">
              {t('footer.description')}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{t('footer.quickLinks')}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-blue-600">
                  {t('common.about')}
                </Link>
              </li>
              <li>
                <Link href="/product" className="text-sm text-gray-600 hover:text-blue-600">
                  {t('common.product')}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-600 hover:text-blue-600">
                  {t('common.blog')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{t('footer.resources')}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/sel" className="text-sm text-gray-600 hover:text-blue-600">
                  {t('common.sel')}
                </Link>
              </li>
              <li>
                <Link href="/download" className="text-sm text-gray-600 hover:text-blue-600">
                  {t('common.download')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-blue-600">
                  {t('common.contact')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{t('footer.contact')}</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-gray-600">
                {t('footer.email')}
              </li>
              <li className="text-sm text-gray-600">
                {t('footer.address')}
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-500">
            {t('footer.copyright').replace('{year}', currentYear.toString())}
          </p>
        </div>
      </div>
    </footer>
  )
} 
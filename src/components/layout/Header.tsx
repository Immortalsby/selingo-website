'use client'

import { useTranslations } from '@/lib/i18n/context'
import { locales, localeNames, type TranslationKey } from '@/i18n/config'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  const { t, locale, setLocale } = useTranslations()
  const pathname = usePathname()

  const navigation: { name: TranslationKey; href: string }[] = [
    { name: 'common.home', href: '/' },
    { name: 'common.about', href: '/about' },
    { name: 'common.product', href: '/product' },
    { name: 'common.blog', href: '/blog' },
    { name: 'common.sel', href: '/sel' },
    { name: 'common.contact', href: '/contact' },
  ]

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-bold text-blue-600">SELINGO</span>
          </Link>
        </div>
        <div className="flex gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 ${
                pathname === item.href ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
              }`}
            >
              {t(item.name)}
            </Link>
          ))}
        </div>
        <div className="flex lg:flex-1 items-center justify-end gap-x-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-x-2 text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600">
                <GlobeAltIcon className="h-5 w-5" aria-hidden="true" />
                <span>{localeNames[locale]}</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-32">
              {locales.map((loc) => (
                <DropdownMenuItem
                  key={loc}
                  className={`${
                    locale === loc ? 'bg-blue-50 text-blue-600' : ''
                  } cursor-pointer hover:bg-blue-50 hover:text-blue-600`}
                  onClick={() => setLocale(loc)}
                >
                  {localeNames[loc]}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="#"
            className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            {t('common.download' as const)}
          </Link>
        </div>
      </nav>
    </header>
  )
} 
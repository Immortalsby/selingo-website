'use client'

import { useTranslations } from '@/lib/i18n/context'
import { useState } from 'react'

export default function ContactForm() {
  const { t } = useTranslations()
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: 实现表单提交逻辑
    setStatus('success')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
          {t('contact.form.name')}
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="name"
            id="name"
            required
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          {t('contact.form.email')}
        </label>
        <div className="mt-2">
          <input
            type="email"
            name="email"
            id="email"
            required
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
          {t('contact.form.phone')}
        </label>
        <div className="mt-2">
          <input
            type="tel"
            name="phone"
            id="phone"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium leading-6 text-gray-900">
          {t('contact.form.subject')}
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="subject"
            id="subject"
            required
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
          {t('contact.form.message')}
        </label>
        <div className="mt-2">
          <textarea
            name="message"
            id="message"
            rows={4}
            required
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      {status === 'success' && (
        <div className="rounded-md bg-green-50 p-4">
          <p className="text-sm text-green-800">{t('contact.form.success')}</p>
        </div>
      )}
      {status === 'error' && (
        <div className="rounded-md bg-red-50 p-4">
          <p className="text-sm text-red-800">{t('contact.form.error')}</p>
        </div>
      )}
      <div>
        <button
          type="submit"
          className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          {t('contact.form.submit')}
        </button>
      </div>
    </form>
  )
} 
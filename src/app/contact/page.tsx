import ContactHero from '@/components/contact/Hero'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import PageTransition from '@/components/layout/PageTransition'

export default function ContactPage() {
  return (
    <PageTransition>
      <ContactHero />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </PageTransition>
  )
} 
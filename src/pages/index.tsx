import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroSection from '@/components/Hero'
import FeaturesSection from '@/components/Features'
import UseCasesSection from '@/components/UseCases'
import PricingSection from '@/components/Pricing'
import TestimonialSection from '@/components/Testimonial'
import FAQSection from '@/components/FAQ'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div
        id="hero"
        className="max-w-7xl mx-auto border-t-0 border-b-2 border-x-2 border-neutral-100 dark:border-neutral-900 rounded-none"
      >
        <HeroSection />
      </div>
      <div
        id="features"
        className="max-w-7xl mx-auto border-t-0 border-b-2 border-x-2 border-neutral-100 dark:border-neutral-900 rounded-none"
      >
        <FeaturesSection />
      </div>
      <div
        id="use-cases"
        className="max-w-7xl mx-auto border-t-0 border-b-2 border-x-2 border-neutral-100 dark:border-neutral-900 rounded-none"
      >
        <UseCasesSection />
      </div>
      <div
        id="pricing"
        className="max-w-7xl mx-auto border-t-0 border-b-2 border-x-2 border-neutral-100 dark:border-neutral-900 rounded-none"
      >
        <PricingSection />
      </div>
      <div
        id="testimonials"
        className="max-w-7xl mx-auto border-t-0 border-b-2 border-x-2 border-neutral-100 dark:border-neutral-900 rounded-none"
      >
        <TestimonialSection />
      </div>
      <div
        id="faq"
        className="max-w-7xl mx-auto border-t-0 border-b-2 border-x-2 border-neutral-100 dark:border-neutral-900 rounded-none"
      >
        <FAQSection />
      </div>
    </>
  )
}

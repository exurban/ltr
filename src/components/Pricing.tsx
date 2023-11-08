import { useState } from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'

const frequencies = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/year' },
]
const tiers = [
  {
    name: 'Hobby',
    id: 'tier-hobby',
    href: '#',
    price: '$99',
    description: 'The essentials to provide your best work for clients.',
    features: ['1-10 seats', 'Up to 1,000 subscribers', 'Basic analytics'],
    mostPopular: false,
  },
  {
    name: 'Freelancer',
    id: 'tier-freelancer',
    href: '#',
    price: '$89',
    description: 'The essentials to provide your best work for clients.',
    features: [
      '11-25 seats',
      'Up to 1,000 subscribers',
      'Basic analytics',
      '48-hour support response time',
    ],
    mostPopular: false,
  },
  {
    name: 'Startup',
    id: 'tier-startup',
    href: '#',
    price: '$79',
    description: 'A plan that scales with your rapidly growing business.',
    features: [
      '26-100 seats',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations',
    ],
    mostPopular: false,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    price: '$69',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited seats',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
      'Custom reporting tools',
    ],
    mostPopular: false,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function PricingSection() {
  const [frequency, setFrequency] = useState(frequencies[0])

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-rose-600">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
            Pricing plans for teams of&nbsp;all&nbsp;sizes
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-neutral-600 dark:text-neutral-400">
          Clear, transparent pricing that scales with your business.
        </p>

        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? 'ring-2 ring-rose-600'
                  : 'ring-1 ring-neutral-200',
                'rounded-3xl p-8'
              )}
            >
              <h3
                id={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'text-rose-600'
                    : 'text-neutral-900 dark:text-white',
                  'text-lg font-semibold leading-8'
                )}
              >
                {tier.name}
              </h3>
              <p className="mt-4 text-sm leading-6 text-neutral-900 dark:text-neutral-200">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-200">
                  {tier.price}
                </span>
                <span className="text-sm font-semibold leading-6 text-neutral-900 dark:text-neutral-200">
                  /month/seat
                </span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-rose-600 text-white shadow-sm hover:bg-rose-500'
                    : 'text-rose-600 ring-1 ring-inset ring-rose-200 hover:ring-rose-300',
                  'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600'
                )}
              >
                Buy plan
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-neutral-900 dark:text-neutral-200"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-rose-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

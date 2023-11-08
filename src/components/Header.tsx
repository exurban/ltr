import { useState } from 'react'
import Link from 'next/link'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ThemeSwitcher } from './ThemeSwitcher'
import { LtRLogo } from './LtRLogo'

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'Use Cases', href: '#use-cases' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQs', href: '#faq' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="">
      <header className="fixed top-0 w-full z-10 bg-neutral-50 dark:bg-neutral-950 border-b-[1px] border-neutral-200 dark:border-neutral-800">
        <nav
          className=" mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8 "
          aria-label="Global"
        >
          <div className="flex items-center gap-x-12">
            <Link href="/" className=" flex flex-row items-center">
              <span className="sr-only">Left to Right</span>
              <LtRLogo />
              <p className="font-bold text-2xl">Left to Right</p>
            </Link>
            <div className="hidden lg:flex lg:gap-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base leading-6 text-neutral-700 dark:text-neutral-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex">
            {/* <div className="mt-24 sm:mt-32 lg:mt-16"> */}
            <div className="mr-6">
              <a href="#" className="inline-flex space-x-6">
                <span className="rounded-full bg-rose-500/10 px-3 py-1 text-sm font-semibold leading-6 text-rose-600 ring-1 ring-inset ring-rose-500/20">
                  Log in
                </span>
              </a>
            </div>
            <ThemeSwitcher />
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10 font-sans" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between font-sans">
              <Link href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <LtRLogo />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-sans font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  )
}

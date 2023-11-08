import Link from 'next/link'
import Image from 'next/image'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

export default function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <Link href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-rose-500/10 px-3 py-1 text-sm font-semibold leading-6 text-rose-400 ring-1 ring-inset ring-rose-500/20">
                What&apos;s new
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-neutral-800 dark:text-neutral-200">
                <span>Just shipped v1.0</span>
                <ChevronRightIcon
                  className="h-5 w-5 text-neutral-800 dark:text-neutral-200"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </div>
          <h2 className="mt-10 text-2xl font-regular tracking-tight text-neutral-800 dark:text-neutral-300 sm:text-4xl">
            The power of Jira. <br /> The simplicity of Trello.
          </h2>
          <h1 className="mt-6 text-2xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
            Meet Left to Right.
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-700 dark:text-neutral-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-rose-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400"
            >
              Try the demo
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-black dark:text-white"
            >
              Start a trial <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <Image
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="App screenshot"
              width={2432}
              height={1442}
              className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

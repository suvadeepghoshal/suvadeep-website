import { Popover } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
import NavBar from '../components/NavBar'
import { ctaSchema } from '../public/schemas/ctaSchema'
import { routeSchema } from '../public/schemas/routeSchema'
import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/outline'

function NotFound() {
  let cta = ctaSchema()
  let hrefs = routeSchema()
  return (
    <div className="bg-slate-200 dark:bg-slate-900">
      <main>
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
              <Popover>
                <NavBar />
              </Popover>
            </div>
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center md:text-center lg:text-center">
                <div className="text-gray-500">
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center lg:text-4xl md:text-3xl sm:text-2xl">
                    <ExclamationIcon className="lg:h-11 lg:w-11 md:h-9 md:w-9 sm:h-8 sm:w-8 h-6 w-6" />
                    <h1 className="font-bold">Not Found!</h1>
                  </div>
                  <p>The page you&apos;re looking for was not found.</p>
                </div>
              </div>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                <div className="rounded-md shadow">
                  <Link href={hrefs.home.route}>
                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      <ChevronLeftIcon className="h-4 w-4" />
                      {cta.goBackHome}
                    </a>
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </main>
    </div>
  )
}

export default NotFound
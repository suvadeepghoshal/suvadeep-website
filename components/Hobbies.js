import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/outline'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const Hobbies = ({ cta, routes, hobbies, themeMode }) => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  return (
    <>
      <div className="relative bg-slate-100 dark:bg-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-10 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mb-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:mb-12 sm:px-6 md:mt-16 md:mb-16 lg:mt-20 lg:mb-20 lg:px-8 xl:mt-28 xl:mb-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-300 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">
                    {hobbies?.header?.first}
                  </span>{' '}
                  <span className="block text-indigo-600 xl:inline">
                    {hobbies?.header?.second}
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  {hobbies?.description}
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link href={routes?.posts?.route}>
                      <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 md:py-4 md:text-lg md:px-10">
                        {cta?.posts}
                        <ChevronRightIcon className="h-4 w-4" />
                      </a>
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link href={routes?.source?.route}>
                      <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 dark:hover:text-gray-300 bg-indigo-100 hover:bg-indigo-200 dark:bg-slate-800 dark:hover:bg-slate-700 md:py-4 md:text-lg md:px-10">
                        {cta?.source}
                        <ChevronRightIcon className="h-4 w-4" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 md:pb-8 sm:pb-7 pb-6">
          <img
            className="h-56 w-full object-contain sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={
              theme === themeMode.lightTheme
                ? `/hobbies-banner-light.png`
                : `/hobbies-banner-dark.png`
            }
            alt="hobbies"
          />
        </div>
      </div>
    </>
  )
}

export default Hobbies

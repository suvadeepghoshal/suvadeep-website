import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, MoonIcon, XIcon } from '@heroicons/react/outline'
import { SunIcon } from '@heroicons/react/solid'
import { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import { themeSchema } from '../public/schemas/themeSchema'
import { useTheme } from 'next-themes'
import { navigationSchema } from '../public/schemas/navigationSchema'

function NavBar() {
  let navigation = navigationSchema()
  let toggleTheme = themeSchema()
  const { theme, setTheme } =
    useTheme() /* unsafe, do not know default them for the server */
  /* Making sure we render UI that uses the current theme when the  page is mounted on the client */
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  /* Ends here */
  return (
    <>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav
          className="relative flex items-center justify-between sm:h-10 lg:justify-start"
          aria-label="Global"
        >
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <div className="cursor-pointer bg-indigo-600 rounded-3xl p-3">
                <Link href={navigation[0].href}>
                  <a key={navigation[0].name}>
                    <span className="text-gray-300 font-semibold xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs subpixel-antialiased tracking-wide no-underline">
                      SG
                    </span>
                  </a>
                </Link>
              </div>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="bg-slate-200 dark:bg-slate-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
            {navigation.map(item => (
              <Link href={item.href}>
                <a
                  key={item.name}
                  className="font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-400"
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
          <a
            aria-label="Toggle Dark Mode"
            type="button"
            className="px-5 hidden xl:block lg:block md:block self-auto"
            onClick={() =>
              setTheme(
                theme === toggleTheme.darkTheme
                  ? toggleTheme.lightTheme
                  : toggleTheme.darkTheme
              )
            }
          >
            {theme === toggleTheme.darkTheme ? (
              <SunIcon className="cursor-pointer h-6 w-6 text-gray-500 hover:text-gray-900 dark:hover:text-gray-400" />
            ) : (
              <MoonIcon className="cursor-pointer h-6 w-6 text-gray-500 hover:text-gray-900" />
            )}
          </a>
        </nav>
      </div>
      {/* For Mobile View */}
      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {/* Mobile Panel */}
        <Popover.Panel
          focus
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-md bg-slate-200 dark:bg-slate-900 ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div className="cursor-pointer bg-indigo-600 rounded-3xl p-3">
                <Link href={navigation[0].href}>
                  <a key={navigation[0].name}>
                    <span className="text-gray-300 font-semibold xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs subpixel-antialiased tracking-wide no-underline">
                      SG
                    </span>
                  </a>
                </Link>
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-slate-200 dark:bg-slate-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close main menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map(item => (
                <Link href={item.href}>
                  <a
                    key={item.name}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-400"
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </>
  )
}

export default NavBar

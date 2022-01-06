import React from 'react'
import { infoSchema } from '../public/schemas/infoSchema'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/outline'
import { ctaSchema } from '../public/schemas/ctaSchema'
import { routeSchema } from '../public/schemas/routeSchema'
import PersonalInfo from './PersonalInfo'
import Hobbies from './Hobbies'

function Bio() {
  let me = infoSchema()
  let cta = ctaSchema()
  let hrefs = routeSchema()
  return (
    <>
      <main className="mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sm:text-center md:text-center lg:text-center">
          <img
            className="w-24 h-24 md:w-48 md:h-auto rounded-full mx-auto"
            src="/suvadeep.jpg"
            alt=""
            width="384"
            height="512"
          />
          <h1 className="text-center text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline dark:text-gray-300">
              {me.firstName}
            </span>{' '}
            <span className="block text-indigo-600 xl:inline">
              {me.lastName}
            </span>
          </h1>
          <p className="mt-3 text-base text-center text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto font-sans">
            {me.description}
          </p>
          <PersonalInfo personal={(info => info?.personal)(me)} />
          <Hobbies />
          {/* <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
            <div className="rounded-md shadow">
              <Link href={hrefs.posts.route}>
                <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 md:py-4 md:text-lg md:px-10">
                  {cta.posts}
                  <ChevronRightIcon className="h-4 w-4" />
                </a>
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link href={hrefs.portfolio.route}>
                <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 dark:bg-slate-900 dark:hover:bg-slate-800 md:py-4 md:text-lg md:px-10">
                  {cta.portfolio}
                  <ChevronRightIcon className="h-4 w-4" />
                </a>
              </Link>
            </div>
          </div> */}
        </div>
      </main>
    </>
  )
}

export default Bio

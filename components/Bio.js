import React from 'react'
import { infoSchema } from '../public/schemas/infoSchema'
import { ctaSchema } from '../public/schemas/ctaSchema'
import { routeSchema } from '../public/schemas/routeSchema'
import PersonalInfo from './PersonalInfo'
import Hobbies from './Hobbies'
import { themeSchema } from '../public/schemas/themeSchema'

const Bio = () => {
  let me = infoSchema()
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
              {me?.userInfo?.firstName}
            </span>{' '}
            <span className="block text-indigo-600 xl:inline">
              {me?.userInfo?.lastName}
            </span>
          </h1>
          <p className="mt-3 text-base text-center text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto font-sans">
            {me?.userInfo?.description}
          </p>
          <PersonalInfo personal={(info => info?.personal)(me)} />
          <Hobbies
            cta={ctaSchema()}
            routes={routeSchema()}
            hobbies={(info => info?.hobbies)(me)}
            themeMode={themeSchema()}
          />
        </div>
      </main>
    </>
  )
}

export default Bio

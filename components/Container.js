import React from 'react'
import { Popover } from '@headlessui/react'
import NavBar from '../components/NavBar'
import Posts from '../components/Posts'
import Home from '../components/Home'
import { useRouter } from 'next/router'
import { infoSchema } from '../public/schemas/infoSchema'

const Container = ({ routes }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <Popover>
            <NavBar logo={(info => info.logo)(infoSchema())} />
          </Popover>
          {/* Navbar is common through out all the pages, and the rest of the pages will have dynammic coompoentns based on the pages */}
          {useRouter().route === routes.posts.route ? (
            <Posts />
          ) : useRouter().route === routes.portfolio.route ? (
            <Portfolio />
          ) : (
            <Home />
          )}
        </div>
      </div>
    </div>
  )
}

export default Container

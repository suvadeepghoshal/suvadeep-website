import React from 'react'
import Link from 'next/link'

function BlogHero({ goBack }) {
  return (
    <>
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block dark:text-gray-300">Welcome to</span>
        <span className="block text-indigo-600">POSTS!</span>
      </h2>
    </>
  )
}

export default BlogHero

import React from 'react'
import Link from 'next/link'

function BlogHero({ header }) {
  return (
    <>
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block dark:text-gray-300">{header.first}</span>
        <span className="block text-indigo-600">{header.second}</span>
      </h2>
    </>
  )
}

export default BlogHero

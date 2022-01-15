import React from 'react'
import BlogHero from '../components/BlogHero'
import { ctaSchema } from '../public/schemas/ctaSchema'
import Link from 'next/link'
import Tag from '../components/Tag'
import SearchBar from './SearchBar'

function Posts({ allPostsData }) {
  return (
    <>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div className="divide-y">
          <div className="pt-6 pb-8 space-y-2 md:space-y-5">
            <BlogHero
              goBack={(function (cta) {
                return cta.goBackHome
              })(ctaSchema())}
            />
            <SearchBar placeHolder={`Search Posts`} />
            <ul>
              {!allPostsData.length && 'No posts found.'}
              {allPostsData.map(postData => {
                const { id, date, title, summary, tags } = postData
                return (
                  <li key={id} className="py-4">
                    <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-indigo-600 dark:text-inidgo-500">
                          <time dateTime={date}>
                            {(function (date) {
                              const options = {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              }
                              const now = new Date(date).toLocaleDateString(
                                'en-US' /* Website is unilingual, so static locale */,
                                options
                              )
                              return now
                            })(date)}
                          </time>
                        </dd>
                      </dl>
                      <div className="space-y-3 xl:col-span-3">
                        <div>
                          <h3 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link href={`/blog/${id}`}>
                              <a className="text-gray-800 dark:text-gray-300">
                                {title}
                              </a>
                            </Link>
                          </h3>
                          <div className="flex flex-wrap">
                            {tags.map(tag => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose text-gray-500 max-w-none">
                          {summary}
                        </div>
                      </div>
                    </article>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Posts

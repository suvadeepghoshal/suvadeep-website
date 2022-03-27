import { useState, React } from 'react'
import BlogHero from '../components/BlogHero'
import Link from 'next/link'
import SearchBar from './SearchBar'

const Posts = ({ allPostsData, postInfo, formatterOptions }) => {
  const [searchVal, setSearchVal] = useState('')
  const filteredBlogPosts = allPostsData.filter(post => {
    const searchContent = post.title + post.summary
    return searchContent.toLowerCase().includes(searchVal.toLowerCase())
  })
  return (
    <>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div className="divide-y">
          <div className="pt-6 pb-8 space-y-2 md:space-y-5">
            <BlogHero header={postInfo.header} />
            <SearchBar
              placeHolder={postInfo.misc.searchBarPlaceHolder}
              changing={e => setSearchVal(e.target.value)}
            />
            <ul className="text-gray-500">
              {!filteredBlogPosts.length && postInfo.misc.noPosts}
              {filteredBlogPosts.map(postData => {
                const { id, date, title, summary } = postData
                return (
                  <li key={id} className="py-4">
                    <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                      <dl>
                        <dt className="sr-only">{postInfo.misc.publishedOn}</dt>
                        <dd className="text-base font-medium leading-6 text-indigo-600 dark:text-inidgo-500">
                          <time dateTime={date}>
                            {((D, options) =>
                              new Date(D).toLocaleDateString(
                                options.locale /* Website is unilingual, so static locale */,
                                options.date
                              ))(date, formatterOptions)}
                          </time>
                        </dd>
                      </dl>
                      <div className="space-y-3 xl:col-span-3">
                        <div>
                          <h3 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link href={`/posts/${id}`}>
                              <a className="text-gray-800 dark:text-gray-300">
                                {title}
                              </a>
                            </Link>
                          </h3>
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

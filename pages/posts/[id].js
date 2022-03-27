import { getAllPostId, getPostData } from 'src/lib/posts'
import { Popover } from '@headlessui/react'
import NavBar from 'src/components/NavBar'
import { infoSchema } from 'public/schemas/infoSchema'
import Link from 'next/link'
import { routeSchema } from 'public/schemas/routeSchema'

const Posts = ({ postData }) => {
  return (
    <>
      <div className="bg-slate-200 dark:bg-slate-900">
        <main>
          <div className="relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
                <Popover>
                  <NavBar logo={(info => info?.userInfo?.logo)(infoSchema())} />
                </Popover>
                <div
                  key={postData?.id}
                  className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
                >
                  <div className="divide-y">
                    <div className="pt-6 pb-8 space-y-2 md:space-y-5">
                      <div className="space-y-3 xl:col-span-3">
                        <h3 className="text-4xl font-bold leading-8 tracking-tight text-indigo-600">
                          {postData?.title}
                        </h3>
                        <div className="flex flex-wrap text-gray-400">
                          <time dateTime={postData?.date}>
                            {((date, options) =>
                              new Date(date).toLocaleDateString(
                                options.locale /* Website is unilingual, so static locale */,
                                options.date
                              ))(postData.date, infoSchema().formatter)}
                          </time>
                          <div className="pl-3">
                            <Link href={routeSchema().posts.route}>
                              <a className="text-indigo-600 hover:dark:text-indigo-500 hover:text-indigo-700">
                                Go Back
                              </a>
                            </Link>
                          </div>
                        </div>
                        <div className="prose text-gray-500 max-w-none italic">
                          {postData?.summary}
                        </div>
                        <div
                          className="markdown"
                          dangerouslySetInnerHTML={{
                            __html: postData?.contentHtml
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
/**
 *
 * @returns dynamic routes based on the id of the posts
 */
export const getStaticPaths = async () => {
  const paths = getAllPostId()
  return {
    paths,
    fallback: false
  }
}
/**
 *
 * @param {key} param0 each param has an object containing the id of the md file
 * @returns md content being converted into readable html and loads before the js of the current page loads
 */
export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export default Posts

import Container from '../components/Container'
import { getSortedPostsData } from '../lib/posts'
import { routeSchema } from '../public/schemas/routeSchema'

const Blog = ({ allPostsData }) => {
  return (
    <>
      <div className="bg-slate-200 dark:bg-slate-900">
        <main>
          <Container
            routes={(function () {
              return routeSchema()
            })()}
            allPostsData={allPostsData}
          />
        </main>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default Blog

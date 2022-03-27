import { Popover } from '@headlessui/react'
import NavBar from '../components/NavBar'
import NotFoundPage from '../components/NotFoundPage'
import { ctaSchema } from '../public/schemas/ctaSchema'
import { infoSchema } from '../public/schemas/infoSchema'
import { routeSchema } from '../public/schemas/routeSchema'

const NotFound = () => {
  return (
    <div className="bg-slate-200 dark:bg-slate-900">
      <main>
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
              <Popover>
                <NavBar logo={(info => info?.userInfo?.logo)(infoSchema())} />
              </Popover>
            </div>
            <NotFoundPage
              header={(info => `${info.errors[404]?.notFoundHeader}`)(
                infoSchema()
              )}
              subHeader={(info => `${info.errors[404]?.notFoundSubHeader}`)(
                infoSchema()
              )}
              routes={(() => routeSchema())()}
              cta={(() => ctaSchema())()}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default NotFound

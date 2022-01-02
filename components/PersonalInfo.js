const PersonalInfo = ({ personal }) => (
  <div className="py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
          {personal?.header}
        </h2>
        <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl">
          {personal?.subHeader}
        </p>
      </div>
      <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 sm:grid-cols-1 md:gap-x-8 md:gap-y-10">
          {personal.personalInfo.map(info => (
            <div
              key={info.key}
              className="relative shadow-lg hover:drop-shadow-xl bg-slate-200 dark:bg-slate-900 rounded-lg p-4 items-center transition ease-in-out hover:-translate-y-1 hover:scale-90"
            >
              <dt>
                <div className="absolute flex items-center shadow-md justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <info.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg text-center leading-6 font-medium text-indigo-600">
                  {info.date}
                </p>
              </dt>
              <dd className="mt-3 ml-16 text-base text-center text-gray-500">
                {info.content}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
)

export default PersonalInfo

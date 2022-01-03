const Hobbies = () => {
  return (
    <div className="pt-4">
      <div className="px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center">
          <p className="uppercase tracking-loose w-full text-indigo-600 dark:text-indigo-400">
            Suvadeep&apos;s Hobbies
          </p>
          <h1 className="my-4 xl:text-5xl lg:text-4xl md:text-2xl text-3xl font-bold leading-tight text-gray-900 dark:text-gray-300">
            When he is not online
          </h1>
          <p className="leading-normal lg:text-2xl md:text-xl sm:text-lg text-base mb-8 text-gray-500">
            Plays and makes music, he is a drummer. He loves to do solo travel,
            especially to mountains and forests!
          </p>
        </div>
        {/* Add illustration made in adobe spark post */}
      </div>
    </div>
  )
}

export default Hobbies

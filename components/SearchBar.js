import { SearchIcon } from '@heroicons/react/outline'

const SearchBar = ({ placeHolder, changing }) => {
  return (
    <>
      <div className="relative max-w-lg">
        <input
          aria-label={placeHolder}
          type="text"
          onChange={changing}
          placeholder={placeHolder}
          className="block w-full px-4 py-2 text-gray-900 bg-slate-100 border border-gray-300 rounded-md dark:border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-100"
        />
        <SearchIcon className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300" />
      </div>
    </>
  )
}

export default SearchBar

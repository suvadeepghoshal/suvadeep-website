import Link from 'next/link'
const Tag = function ({ text }) {
  return (
    <Link href={`/tags/${text}`}>
      <a className="mr-3 text-sm font-medium uppercase text-gray-500 hover:text-gray-600 dark:hover:text-gray-400">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag

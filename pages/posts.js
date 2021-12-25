import Link from "next/link";

function Blog() {
  const footerDesign = "text-sm text-center m-auto px-5 py-5 text-gray-400";
  return (
    <>
      <div className="container bg-slate-200 dark:bg-slate-900">
        <main>
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Welcome to</span>
              <span className="block text-indigo-600">POSTS!</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link href="/">
                  <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    Go Back Home
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <footer className={footerDesign}>
            &copy;Suvadeep Ghoshal since 2021
          </footer>
        </main>
      </div>
    </>
  );
}

export default Blog;

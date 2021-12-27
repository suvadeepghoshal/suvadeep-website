// This is acting as the main entry point for all the pages in the appplication
import '../styles/globals.css'
import '../styles/home.css'
import Main from '../components/Main'

function MyApp({ Component, pageProps }) {
  const pageColorMaintain = 'bg-slate-200 dark:bg-slate-900'
  const footerDesign = 'text-sm text-center m-auto px-5 py-5 text-gray-400'
  return (
    <div className={pageColorMaintain}>
      <Main />
      <Component {...pageProps} />
      <footer className={footerDesign}>
        &copy;Suvadeep Ghoshal since 2021. All Rights Reserved.
      </footer>
    </div>
  )
}

export default MyApp

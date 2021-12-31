// This is acting as the main entry point for all the pages in the appplication
import '../styles/globals.css'
import '../styles/home.css'
import Main from '../components/Main'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  const pageColorMaintain = 'bg-slate-200 dark:bg-slate-900'
  const footerDesign =
    'text-sm text-center m-auto px-5 py-5 text-gray-500 dark:text-gray-600'
  return (
    <div className={pageColorMaintain}>
      <ThemeProvider attribute="class">
        <Main />
        <Component {...pageProps} />
        <footer className={footerDesign}>
          &copy;Suvadeep Ghoshal since 2021. All Rights Reserved.
        </footer>
      </ThemeProvider>
    </div>
  )
}

export default MyApp

// This is acting as the main entry point for all the pages in the appplication
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const pageColorMaintain = "bg-slate-200 dark:bg-slate-900";
  return (
    <div className={pageColorMaintain}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

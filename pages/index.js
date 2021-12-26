import Head from "next/head";
import Container from "../components/Container";

function Home() {
  const footerDesign = "text-sm text-center m-auto px-5 py-5 text-gray-400";
  return (
    <div className="container bg-slate-200 dark:bg-slate-900">
      <Head>
        <title>Suvadeep Ghoshal - Home</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Container />
        <footer className={footerDesign}>
          &copy;Suvadeep Ghoshal since 2021
        </footer>
      </main>
    </div>
  );
}

export default Home;

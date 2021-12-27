import Head from 'next/head'
import Container from '../components/Container'

function Home() {
  return (
    <div className="bg-slate-200 dark:bg-slate-900">
      <Head>
        <title>Suvadeep Ghoshal - Home</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Container />
      </main>
    </div>
  )
}

export default Home

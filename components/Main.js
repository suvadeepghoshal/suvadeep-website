import Head from 'next/head'

const Main = ({ title }) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Suvadeep's website" />
    <meta name="author" content="Suvadeep Ghoshal" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Suvadeep's Website" />
    <link rel="icon" href="/favicon.png" />
    <title>{title ? title : null}</title>
  </Head>
)

export default Main

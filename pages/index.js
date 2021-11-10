import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Instagram 2.0 youtube course</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>This is the Instagram 2.0 Build</h1>
      {/* header */}
      <Header />

      {/* feed */}

      {/* footer */}
    </div>
  )
}

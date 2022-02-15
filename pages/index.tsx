import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>MyClients</title>
        <meta name="description" content="App to manage your clients" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>MyClients</h1>
      </main>
    </>
  );
}

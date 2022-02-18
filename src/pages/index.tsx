import Head from 'next/head';
import { MainLayout } from '../components/layout/MainLayout/MainLayout';
import { MainNavigation } from '../components/layout/MainNavigation/MainNavigation';

export default function Home() {
  return (
    <>
      <Head>
        <title>MyClients</title>
        <meta name="description" content="App to manage your clients" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainNavigation />

      <MainLayout>
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </MainLayout>
    </>
  );
}

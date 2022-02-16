import Head from 'next/head';
import { MainLayout } from '../components/layout/MainLayout/MainLayout';
import { MainNavigation } from '../components/layout/MainNavigation/MainNavigation';

export default function TimeTrackingPage() {
  return (
    <>
      <Head>
        <title>MyClients</title>
      </Head>
      <MainNavigation />

      <MainLayout>
        <h1 className="text-3xl font-bold">Time tracking</h1>
      </MainLayout>
    </>
  );
}

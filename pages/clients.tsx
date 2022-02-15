import Head from 'next/head';
import { MainLayout } from '../components/layout/MainLayout/MainLayout';
import { MainNavigation } from '../components/layout/MainNavigation/MainNavigation';

export default function ClientsPage() {
  return (
    <>
      <Head>
        <title>MyClients</title>
      </Head>
      <MainNavigation />

      <MainLayout>
        <h1>Clients</h1>
      </MainLayout>
    </>
  );
}

import Head from 'next/head';
import { MainLayout } from '../components/layout/MainLayout/MainLayout';
import { MainNavigation } from '../components/layout/MainNavigation/MainNavigation';

export default function InvoicesPage() {
  return (
    <>
      <Head>
        <title>MyClients</title>
      </Head>
      <MainNavigation />

      <MainLayout>
        <h1 className="text-3xl font-bold">Invoices</h1>
      </MainLayout>
    </>
  );
}

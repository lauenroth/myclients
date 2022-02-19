import Head from 'next/head';
import { MainLayout } from '../components/layout/MainLayout/MainLayout';

export default function InvoicesPage() {
  return (
    <>
      <Head>
        <title>MyClients</title>
      </Head>

      <MainLayout>
        <h1 className="text-3xl font-bold">Invoices</h1>
      </MainLayout>
    </>
  );
}

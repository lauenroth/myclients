import Head from 'next/head';
import { MainLayout } from '../components/layout/MainLayout/MainLayout';

export default function InvoicesPage() {
  return (
    <>
      <Head>
        <title>Invoices | MyClients</title>
      </Head>

      <MainLayout className="relative grid gap-6 px-3 py-6 sm:gap-5 sm:p-5">
        <h1 className="text-3xl font-bold">Invoices</h1>
      </MainLayout>
    </>
  );
}

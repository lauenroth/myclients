import Head from 'next/head';
import { MainLayout } from '../components/layout/MainLayout/MainLayout';

export default function TimeTrackingPage() {
  return (
    <>
      <Head>
        <title>Time Tracking | MyClients</title>
      </Head>

      <MainLayout className="relative grid gap-6 px-3 py-6 sm:gap-5 sm:p-5">
        <h1 className="text-3xl font-bold">Time tracking</h1>
      </MainLayout>
    </>
  );
}

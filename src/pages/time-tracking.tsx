import Head from 'next/head';
import { FloatingButton } from '../components/basics/FloatingButton/FloatingButton';

export default function TimeTrackingPage() {
  return (
    <>
      <Head>
        <title>Time Tracking | MyClients</title>
      </Head>

      <h1 className="text-3xl font-bold">Time tracking</h1>
      <FloatingButton onClick={() => console.log('click')} />
    </>
  );
}

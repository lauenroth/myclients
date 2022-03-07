import Head from 'next/head';
import { FloatingButton } from '../components/basics/FloatingButton/FloatingButton';

export default function TimeTrackingPage() {
  return (
    <>
      <Head>
        <title>Time Tracking | MyClients</title>
      </Head>

      <section className="grid place-content-center" style={{ height: '85vh' }}>
        <h1 className="text-2xl md:text-5xl">Time Tracking</h1>
      </section>

      <FloatingButton onClick={() => console.log('click')} />
    </>
  );
}

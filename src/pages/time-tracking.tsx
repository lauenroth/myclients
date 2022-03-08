import Head from 'next/head';
import CenterText from '../components/basics/CenterText';
import { FloatingButton } from '../components/basics/FloatingButton/FloatingButton';

export default function TimeTrackingPage() {
  return (
    <>
      <Head>
        <title>Time Tracking | MyClients</title>
      </Head>

      <CenterText>Time tracking</CenterText>

      <FloatingButton onClick={() => console.log('click')} />
    </>
  );
}

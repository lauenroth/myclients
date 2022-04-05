import Head from 'next/head';
import { useState } from 'react';
import CenterText from '../components/basics/CenterText';
import { FloatingButton } from '../components/basics/FloatingButton/FloatingButton';
import { NewTrackingForm } from '../components/timetracking/NewTrackingForm/NewTrackingForm';

export default function TimeTrackingPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Time Tracking | MyClients</title>
      </Head>

      <CenterText>Time tracking</CenterText>

      <NewTrackingForm open={isOpen} onClose={() => setIsOpen(false)} />

      <FloatingButton onClick={() => setIsOpen(true)} />
    </>
  );
}

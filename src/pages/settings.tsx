import Head from 'next/head';

export default function SettingsPage() {
  return (
    <>
      <Head>
        <title>Settings | MyClients</title>
      </Head>
      <section className="grid place-content-center" style={{ height: '85vh' }}>
        <h1 className="text-2xl md:text-5xl">Settings</h1>
      </section>
    </>
  );
}

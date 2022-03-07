import Head from 'next/head';

export default function ProfilePage() {
  return (
    <>
      <Head>
        <title>Profile | MyClients</title>
      </Head>

      <section className="grid place-content-center" style={{ height: '85vh' }}>
        <h1 className="text-2xl md:text-5xl">Profile</h1>
      </section>
    </>
  );
}

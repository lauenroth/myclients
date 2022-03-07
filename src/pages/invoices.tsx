import Head from 'next/head';

export default function InvoicesPage() {
  return (
    <>
      <Head>
        <title>Invoices | MyClients</title>
      </Head>

      <section className="grid place-content-center" style={{ height: '85vh' }}>
        <h1 className="text-2xl md:text-5xl">Invoices</h1>
      </section>
    </>
  );
}

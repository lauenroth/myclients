import Head from 'next/head';
import { Table, TableData } from '../components/basics/Table/Table';
import { MainLayout } from '../components/layout/MainLayout/MainLayout';

const clients: TableData[][] = [
  [{ id: 'name', value: 'Daimler Chrysler' }],
  [{ id: 'name', value: 'Ecode23' }],
  [{ id: 'name', value: 'Fujitsu Technology Solutions' }],
  [{ id: 'name', value: 'In The Pocket' }],
  [{ id: 'name', value: 'Init AG' }],
  [{ id: 'name', value: 'Perackis Architekten' }],
  [{ id: 'name', value: 'Steuerbüro Lauenroth' }],
  [{ id: 'name', value: 'T-Systems' }],
  [{ id: 'name', value: 'Unisys' }],
  [{ id: 'name', value: 'Worldia' }],
];

export default function ClientsPage() {
  return (
    <>
      <Head>
        <title>Clients | MyClients</title>
      </Head>

      <MainLayout className="relative grid gap-6 px-3 py-6 sm:gap-5 sm:p-5">
        <h1 className="text-3xl font-bold">Clients</h1>

        <Table fields={['Name']} data={clients} />
      </MainLayout>
    </>
  );
}

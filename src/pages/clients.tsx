import Head from 'next/head';
import { Table, TableData } from '../components/basics/Table/Table';

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

      <Table fields={['Name']} data={clients} />
    </>
  );
}

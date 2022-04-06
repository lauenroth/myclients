import Head from 'next/head';
import { useEffect, useState } from 'react';
import CenterText from '../components/basics/CenterText';
import { FloatingButton } from '../components/basics/FloatingButton/FloatingButton';
import Loading from '../components/basics/Loading';
import { Table, TableData } from '../components/basics/Table/Table';
import NewClientForm from '../components/clients/NewClientForm';
import { ClientResponse } from './api/client/[id]';

export default function ClientsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [clients, setClients] = useState([] as TableData[][]);
  const [showNewClientForm, setShowNewClientForm] = useState(false);

  /**
   * Get clients from API and transform them into a table
   */
  const fetchClients = async () => {
    setIsLoading(true);
    setTimeout(async () => {
      const response = await fetch(`${process.env.API}/clients`);
      const json: ClientResponse[] = await response.json();
      const clients: TableData[][] = json.map((client) => [
        {
          id: 'name',
          value: client.name,
        },
        {
          id: 'language',
          value: client.language || 'en',
        },
      ]);
      setClients(clients);
      setIsLoading(false);
    }, 2000);
  };

  /**
   * Fetch clients on page load
   */
  useEffect(() => {
    fetchClients();
  }, []);

  /**
   * Render the page
   */
  return (
    <>
      <Head>
        <title>Clients | MyClients</title>
      </Head>

      <NewClientForm onClose={() => setShowNewClientForm(false)} show={showNewClientForm} />

      {isLoading ? (
        <Loading />
      ) : (
        <>
          {clients.length > 0 ? (
            <Table fields={['Name', 'Language']} data={clients} />
          ) : (
            <CenterText>No clients, yet.</CenterText>
          )}
        </>
      )}

      <FloatingButton onClick={() => setShowNewClientForm(true)} />
    </>
  );
}

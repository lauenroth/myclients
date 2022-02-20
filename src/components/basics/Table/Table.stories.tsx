import { ComponentMeta } from '@storybook/react';

import { Table } from './Table';

export default {
  title: 'Basics/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const fields = ['#', 'Name', 'E-Mail'];

const data = [
  [
    { id: 'id', value: '1' },
    { id: 'name', value: 'John Doe' },
    { id: 'email', value: 'john.doe@email.com' },
  ],
  [
    { id: 'id', value: '2' },
    { id: 'name', value: 'Jane Doe' },
    { id: 'email', value: 'jane.doe@email.com' },
  ],
];

export const TablePage = () => <Table fields={fields} data={data} />;

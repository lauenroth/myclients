import { FC } from 'react';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';
import DashboardContainer from '../DashboardContainer';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const DashboardInvoices: FC = () => {
  return (
    <DashboardContainer title="Invoices">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={120} height={120}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" innerRadius={40} outerRadius={55} fill="#82ca9d" />
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" innerRadius={60} outerRadius={75} fill="#6466f0" />
        </PieChart>
      </ResponsiveContainer>
    </DashboardContainer>
  );
};

export { DashboardInvoices };

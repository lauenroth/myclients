import { FC } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { DashboardContainer } from '../DashboardContainer/DashboardContainer';

const data = [
  {
    name: 'Mon',
    hours: 8,
  },
  {
    name: 'Tue',
    hours: 4,
  },
  {
    name: 'Wed',
    hours: 8,
  },
  {
    name: 'Thu',
    hours: 8,
  },
  {
    name: 'Fri',
    hours: 8,
  },
];

const DashboardTimeTracking: FC = () => {
  const hoursThisWeek = data.reduce((acc, curr) => acc + curr.hours, 0);

  return (
    <DashboardContainer title={`Hours this week: ${hoursThisWeek}`}>
      <ResponsiveContainer width="100%" height="100%" minHeight={150}>
        <BarChart width={150} height={140} data={data} barSize={40} maxBarSize={10}>
          <XAxis dataKey="name" fontSize={12} />
          <YAxis fontSize={10} />
          <Tooltip />
          <Bar dataKey="hours" fill="#6466f0" label="test" />
        </BarChart>
      </ResponsiveContainer>
    </DashboardContainer>
  );
};

export { DashboardTimeTracking };

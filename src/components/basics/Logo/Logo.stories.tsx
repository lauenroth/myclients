import { ComponentMeta } from '@storybook/react';

import { Logo } from './Logo';

export default {
  title: 'Basics/Logo',
  component: Logo,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['dashboard', 'clients', 'invoices', 'timeTracking'],
      },
    },
  },
} as ComponentMeta<typeof Logo>;

export const Dashboard = () => <Logo type="dashboard" />;

export const Clients = () => <Logo type="clients" />;

export const TimeTracking = () => <Logo type="timeTracking" />;

export const Invoices = () => <Logo type="invoices" />;

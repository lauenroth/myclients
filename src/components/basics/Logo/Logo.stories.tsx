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

export const Dashboard = (args) => <Logo type="dashboard" {...args} />;

export const Clients = (args) => <Logo type="clients" {...args} />;

export const TimeTracking = (args) => <Logo type="timeTracking" {...args} />;

export const Invoices = (args) => <Logo type="invoices" {...args} />;

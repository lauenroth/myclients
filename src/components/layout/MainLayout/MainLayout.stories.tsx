import { ComponentMeta } from '@storybook/react';

import { MainLayout } from './MainLayout';

export default {
  title: 'Layout/MainLayout',
  component: MainLayout,
} as ComponentMeta<typeof MainLayout>;

export const MainLayoutPage = () => (
  <MainLayout>
    <p>Here is some content</p>
  </MainLayout>
);

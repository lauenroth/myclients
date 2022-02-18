import { ComponentMeta } from '@storybook/react';

import { MainNavigation } from './MainNavigation';

export default {
  title: 'Layout/MainNavigation',
  component: MainNavigation,
} as ComponentMeta<typeof MainNavigation>;

export const MainNavigationPage = () => <MainNavigation />;

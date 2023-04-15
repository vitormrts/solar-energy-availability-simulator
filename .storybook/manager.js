import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',
  brandImage: '/assets/images/logos/logo.png',
});

addons.setConfig({
  theme,
});

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AccountPage from './AccountPage';

export default {
  title: 'Account/AccountPage', // Organizes the component in Storybook's sidebar
  component: AccountPage,
} as Meta;

const Template: StoryFn = (args) => <AccountPage {...args} />;

export const Default = Template.bind({});
Default.args = {}; // No additional props needed for the default view

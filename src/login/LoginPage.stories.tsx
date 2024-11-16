// import React from 'react';
// import { Meta, StoryFn } from '@storybook/react';
// import LoginPage from './LoginPage';

// export default {
//   title: 'Login/LoginPage',
//   component: LoginPage,
// } as Meta;

// // Use StoryFn instead of Story
// const Template: StoryFn = (args) => <LoginPage {...args} />;

// export const Default = Template.bind({});
// Default.args = {};


import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import LoginPage from './LoginPage';

export default {
  title: 'Login/LoginPage',  // This is the required default export
  component: LoginPage,
} as Meta;

const Template: StoryFn = (args) => <LoginPage {...args} />;

export const Default = Template.bind({});
Default.args = {};



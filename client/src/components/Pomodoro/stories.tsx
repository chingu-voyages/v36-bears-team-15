import { Story, Meta } from '@storybook/react';

import Pomodoro from './index';

export default {
  component: Pomodoro,
  title: 'Pomodoro',
  args: {
    title: 'Test Title',
    description: 'Test Description',
  },
} as Meta;

export const Basic: Story = (args) => <Pomodoro {...args} />;
Basic.args = {
  title: 'Basic Title',
  description: 'Basic Description',
};

export const Default: Story = (args) => <Pomodoro {...args} />;

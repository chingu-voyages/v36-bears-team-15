import { Story, Meta } from '@storybook/react';

import CircularProgressBar from './index';

export default {
  component: CircularProgressBar,
  title: 'CircularProgressBar',
  args: {
    title: 'Test Title',
    description: 'Test Description',
  },
} as Meta;

export const Basic: Story = (args) => <CircularProgressBar {...args} />;
Basic.args = {
  title: 'Basic Title',
  description: 'Basic Description',
};

export const Default: Story = (args) => <CircularProgressBar {...args} />;

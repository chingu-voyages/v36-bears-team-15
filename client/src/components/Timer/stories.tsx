import { Story, Meta } from '@storybook/react'

import Timer from '.'

export default {
  component: Timer,
  title: 'Timer',
} as Meta

export const Basic: Story = () => <Timer />

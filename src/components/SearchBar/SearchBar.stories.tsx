import type { Meta, StoryObj } from '@storybook/react';

import SearchBar from './SearchBar';

const meta = {
  component: SearchBar,
  title: 'Component/Header/SearchBar',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
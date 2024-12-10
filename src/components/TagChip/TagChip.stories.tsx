import type { Meta, StoryObj } from '@storybook/react';

import TagChip from './TagChip';

const meta = {
  component: TagChip,
  title: 'Component/Tag/TagChip',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TagChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Terbaru",
    iconUrl: "https://s3.ap-southeast-1.amazonaws.com/content.pintu.co.id/Latest_b83e6c1ad1.svg"
  }
};
import type { Meta, StoryObj } from '@storybook/react';

import { ButtonsTw } from 'src/';

const meta = {
  title: 'Components/ButtonsTw',
  component: ButtonsTw,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonsTw>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
  },
};


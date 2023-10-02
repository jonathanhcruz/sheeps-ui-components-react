
import type { Meta, StoryObj } from '@storybook/react';

import { MessageInput } from '../MessageInput';

const meta = {
  title: 'Components/customeImplement/CustCustomInputomInputs/MessageInput',
  component: MessageInput,
  parameters: {
    message: '',
    status: '',
    time: 3000,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MessageInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MessageSuccess: Story = {
  args: {
    message: 'Enter your email',
    status: 'success',
    time: 0,
  },  
};

export const MessageError: Story = {
  args: {
    message: 'Enter your email',
    status: 'error',
    time: 0,
  },  
};

export const MessageWarning: Story = {
  args: {
    message: 'Enter your email',
    status: 'warning',
    time: 0,
  },  
};
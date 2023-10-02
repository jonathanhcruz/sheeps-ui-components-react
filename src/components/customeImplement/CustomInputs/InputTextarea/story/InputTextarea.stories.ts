
import type { Meta, StoryObj } from '@storybook/react';

import { InputTextarea } from 'src/components';

const meta = {
  title: 'Components/customeImplement/CustCustomInputomInputs/Input Textarea',
  component: InputTextarea,
  parameters: {
    type: '',
    placeholder: '',
    isRequired: false,
    UiCustomeInput: '',
    noRisize: false,
    options: [],
    handleChangeValue: (event: string) => {console.log(event);
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputTextarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Textarea: Story = {
  args: {
    type: 'textarea',
    placeholder: 'Enter your description',
    isRequired: false,
    noRisize: false,
    handleChangeValue: (value: string) => {
      console.log(value);
    },
  },
};





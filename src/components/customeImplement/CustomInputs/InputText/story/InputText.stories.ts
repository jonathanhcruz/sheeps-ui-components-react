
import type { Meta, StoryObj } from '@storybook/react';

import { InputText } from 'src/components';

const meta = {
  title: 'Components/customeImplement/CustCustomInputomInputs/Input Text',
  component: InputText,
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
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter your email',
    isRequired: false,
    noRisize: true,
    handleChangeValue: (value: string) => {
      console.log(value);
    },
  },  
};

import type { Meta, StoryObj } from '@storybook/react';

import { InputCheckbox } from 'src/components';

const meta = {
  title: 'Components/customeImplement/CustCustomInputomInputs/Input Checkbox',
  component: InputCheckbox,
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
} satisfies Meta<typeof InputCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckBox: Story = {
  args: {
    type: 'checkbox',
    placeholder: 'Enter your email',
    isRequired: false,
    noRisize: true,
    handleChangeValue: (value: string) => {
      console.log(value);
    },
  },
};
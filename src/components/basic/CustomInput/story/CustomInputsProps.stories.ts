
import type { Meta, StoryObj } from '@storybook/react';

import { CustomInput } from 'src/';

const meta = {
  title: 'Components/basic/CustomInput',
  component: CustomInput,
  parameters: {
    label: '',
    type: '',
    placeholder: '',
    className: '',
    error: false,
    errorMessage: '',
    isRequired: false,
    noRisize: false,
    handleChangeValue: () => {},
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CustomInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckBox: Story = {
  args: {
    label: 'choice',
    type: 'checkbox',
    placeholder: 'Enter your email',
    className: '',
    errorMessage: 'The email is not valid.',
    isRequired: false,
    noRisize: true,
    handleChangeValue: (value: string) => {
      console.log(value);
    },
  },
};
export const Input: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    className: '',
    errorMessage: 'The email is not valid.',
    isRequired: false,
    noRisize: true,
    handleChangeValue: (value: string) => {
      console.log(value);
    },
  },
};

export const Textarea: Story = {
  args: {
    label: 'Description',
    type: 'textarea',
    placeholder: 'Enter your description',
    className: '',
    errorMessage: 'The description is not empty.',
    isRequired: false,
    noRisize: false,
    handleChangeValue: (value: string) => {
      console.log(value);
    },
  },
};





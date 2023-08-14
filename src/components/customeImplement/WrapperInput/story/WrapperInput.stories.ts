
import type { Meta, StoryObj } from '@storybook/react';

import { WrapperInput } from 'src/';

const meta = {
  title: 'Components/customeImplement/WrapperInput',
  component: WrapperInput,
  parameters: {
    label: '',
    type: '',
    placeholder: '',
    className: '',
    error: false,
    errorMessage: '',
    isRequired: false,
    noRisize: false,
    done: true,
    options: ['option1', 'option2', 'option3'],
    handleChangeValue: () => {},
  },
  tags: ['autodocs'],
} satisfies Meta<typeof WrapperInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const File: Story = {
  args: {
    label: 'Import file',
    type: 'file',
    placeholder: 'upload file',
    className: '',
    errorMessage: '',
    isRequired: false,
    noRisize: true,
    handleChangeValue: (value: string) => {
      console.log(value);
    },
  },
};

export const Radio: Story = {
  args: {
    label: 'Radio button',
    type: 'radio',
    placeholder: '',
    className: '',
    errorMessage: '',
    isRequired: false,
    noRisize: true,
    handleChangeValue: (value: string) => {
      console.log(value);
    },
    options: ['option1', 'option2', 'option3'],
  },
};

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
    error: true,
    errorMessage: 'The email is not valid.',
    isRequired: false,
    noRisize: true,
    done: true,
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





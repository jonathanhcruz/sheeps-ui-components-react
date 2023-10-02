
import type { Meta, StoryObj } from '@storybook/react';

import { InputRadio } from 'src/components';

const meta = {
  title: 'Components/customeImplement/CustCustomInputomInputs/Input Radio',
  component: InputRadio,
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
} satisfies Meta<typeof InputRadio>;

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

export const File: Story = {
  args: {
    type: 'text',
    placeholder: 'upload file',
    isRequired: false,
    noRisize: true,
    handleChangeValue: (value: string) => {
      console.log(value);
    },
  },
};

export const Radio: Story = {
  args: {
    type: 'radio',
    placeholder: '',
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
    type: 'checkbox',
    placeholder: 'Enter your email',
    isRequired: false,
    noRisize: true,
    handleChangeValue: (value: string) => {
      console.log(value);
    },
  },
};

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





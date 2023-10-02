
import type { Meta, StoryObj } from '@storybook/react';

import { InputFile } from 'src/components';

const meta = {
  title: 'Components/customeImplement/CustCustomInputomInputs/Input File',
  component: InputFile,
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
} satisfies Meta<typeof InputFile>;

export default meta;
type Story = StoryObj<typeof meta>;

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
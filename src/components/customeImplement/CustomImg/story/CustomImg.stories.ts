import type { Meta, StoryObj } from '@storybook/react';

import { CustomImg } from 'src/';

const meta = {
  title: 'Components/customeImplement/CustomImg',
  component: CustomImg,
  parameters: {
    alt:'',
    imageUrl: '',
    classNameImg: '',
    imgZoom: false,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CustomImg>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    alt:'Lorem ipsum',
    imageUrl: 'https://tailus.io/sources/blocks/twocards/preview/images/woman.jpg',
    classNameImg: '',
    imgZoom: false,
  },
};
export const Secundary: Story = {
  args: {
    alt:'Lorem ipsum',
    imageUrl: 'https://tailus.io/sources/blocks/twocards/preview/images/woman.jpg',
    classNameImg: '',
    imgZoom: true,
  },
};


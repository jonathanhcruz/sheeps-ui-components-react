import type { Meta, StoryObj } from '@storybook/react';

import { CustomeImg } from 'src/';

const meta = {
  title: 'Components/atoms/CustomeImg',
  component: CustomeImg,
  parameters: {
    imageUrl: '',
    alt: 'string',
    classNameImg: '',
    imgZoom: false,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CustomeImg>;

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


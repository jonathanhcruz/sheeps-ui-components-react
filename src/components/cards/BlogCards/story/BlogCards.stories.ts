import type { Meta, StoryObj } from '@storybook/react';

import { BlogCards } from 'src/';

const meta = {
  title: 'Components/card/BlogCards',
  component: BlogCards,
  parameters: {
    imageUrl: '',
    imageDescription: '',
    imgZoom: false,
    title: '',
    description: '',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BlogCards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Lorem ipsum',
    imageUrl: 'https://tailus.io/sources/blocks/twocards/preview/images/woman.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.',
    imageDescription: 'Image description',
    imgZoom: false,
  },
};

export const Secundary: Story = {
  args: {
    title: 'Lorem ipsum',
    imageUrl: 'https://tailus.io/sources/blocks/twocards/preview/images/woman.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.',
    imageDescription: 'Image description',
    imgZoom: true,
  },
};


import type {Meta, StoryObj} from '@storybook/react-vite';

import {Spinner} from './Spinner.component.tsx';

const meta = {
  title: 'Atoms/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const Slow: Story = {
  args: {
    speed: 'slow',
  },
};

export const Normal: Story = {
  args: {
    speed: 'normal',
  },
};

export const Fast: Story = {
  args: {
    speed: 'fast',
  },
};

export const CustomColor: Story = {
  args: {
    color: '#ef4444',
  },
};

import type {Meta, StoryObj} from '@storybook/react';

import {Input} from './Input.component.tsx';
import {useArgs} from '@storybook/preview-api';
import {fn} from '@storybook/test';

const meta = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    label: 'Enter text here',
    onChange: fn(),
  },
  render: (args) => {
    const [{ value, onChange }, updateArgs] = useArgs();
    return (
      <Input
        {...args}
        value={value}
        onChange={(value) => {
          onChange?.(value);
          updateArgs({ value });
        }}
      />
    );
  }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {};


import type {Meta, StoryObj} from '@storybook/react-vite';

import {useArgs} from 'storybook/preview-api';
import {Checkbox} from './Checkbox.component.tsx';

const meta = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    label: 'Option Name',
  },
  render: (args) => {
    const [{ value, onChange }, updateArgs] = useArgs();
    return (
      <Checkbox
        {...args}
        value={value}
        onChange={(value) => {
          onChange?.(value);
          updateArgs({ value });
        }}
      />
    );
  }
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {};


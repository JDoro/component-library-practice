import type {Meta, StoryObj} from '@storybook/react-vite';

import {TextArea} from './TextArea.component.tsx';
import {useArgs} from 'storybook/preview-api';
import {fn} from 'storybook/test';

const meta = {
  title: 'Atoms/Text Area',
  component: TextArea,
  tags: ['autodocs'],
  args: {
    label: 'Enter text here',
    onChange: fn(),
  },
  render: (args) => {
    const [{ value, onChange }, updateArgs] = useArgs();
    return (
      <TextArea
        {...args}
        value={value}
        onChange={(value) => {
          onChange?.(value);
          updateArgs({ value });
        }}
      />
    );
  }
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {};


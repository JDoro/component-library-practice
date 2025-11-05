import type {Meta, StoryObj} from '@storybook/react-vite';
import {Typeahead} from './Typeahead.tsx';
import {useArgs} from 'storybook/preview-api';
import {fn} from 'storybook/test';

const meta = {
  title: 'Organisms/Typeahead',
  component: Typeahead,
  tags: ['autodocs', 'exclude-test'],
  args: {
    onChange: fn(),
    onSelect: fn(),
    options: ['one', 'two', 'three'],
  },
  render: (args) => {
    const [{ value, onChange, onSelect }, updateArgs] = useArgs();
    return (
      <div className="w-64">
        <Typeahead
          {...args}
          value={value}
          onChange={(value) => {
            onChange?.(value);
            updateArgs({ value });
          }}
          onSelect={(value) => {
            onSelect?.(value);
            updateArgs({ value });
          }}
        />
      </div>
    );
  },
} satisfies Meta<typeof Typeahead>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {};

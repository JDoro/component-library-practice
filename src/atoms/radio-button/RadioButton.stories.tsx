import type {Meta, StoryObj} from '@storybook/react-vite';

import {useArgs} from 'storybook/preview-api';
import {fn} from 'storybook/test';
import {RadioButton} from './RadioButton.component.tsx';

const meta = {
  title: 'Atoms/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  args: {
    name: 'radio-group',
    value: 'option1',
    label: 'Option 1',
    onChange: fn(),
  },
  render: (args) => {
    const [{checked, onChange}, updateArgs] = useArgs();
    return (
      <RadioButton
        {...args}
        checked={checked}
        onChange={(value) => {
          onChange?.(value);
          updateArgs({checked: true});
        }}
      />
    );
  },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Unchecked: Story = {
  args: {
    checked: false,
  },
};

export const RadioGroup: Story = {
  args: {
    onChange: fn(),
  },
  render: (args) => {
    const [{ selectedValue }, updateArgs] = useArgs();
    
    const handleChange = (value: string) => {
      args.onChange?.(value);
      updateArgs({selectedValue: value});
    };

    return (
      <div className="flex flex-col gap-2">
        <RadioButton
          name="radio-group"
          value="option1"
          label="Option 1"
          checked={selectedValue === 'option1'}
          onChange={handleChange}
        />
        <RadioButton
          name="radio-group"
          value="option2"
          label="Option 2"
          checked={selectedValue === 'option2'}
          onChange={handleChange}
        />
        <RadioButton
          name="radio-group"
          value="option3"
          label="Option 3"
          checked={selectedValue === 'option3'}
          onChange={handleChange}
        />
      </div>
    );
  },
};

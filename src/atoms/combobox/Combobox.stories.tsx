import type { Meta, StoryObj } from '@storybook/react';
import { Combobox, ComboboxOption } from './Combobox.component.tsx';
import { useArgs } from '@storybook/preview-api';
import { fn } from '@storybook/test';

// Sample data for stories
const fruitOptions: ComboboxOption[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'grape', label: 'Grape' },
  { value: 'orange', label: 'Orange' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'watermelon', label: 'Watermelon' },
];

const countryOptions: ComboboxOption[] = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'mx', label: 'Mexico' },
  { value: 'gb', label: 'United Kingdom' },
  { value: 'fr', label: 'France' },
  { value: 'de', label: 'Germany' },
  { value: 'jp', label: 'Japan' },
  { value: 'au', label: 'Australia' },
];

const meta = {
  title: 'Atoms/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    allowCustomValue: {
      control: 'boolean',
    },
  },
  args: {
    onChange: fn(),
    onSelect: fn(),
  },
  render: (args) => {
    const [{ value, onChange, onSelect }, updateArgs] = useArgs();
    return (
      <div className="w-80">
        <Combobox
          {...args}
          value={value}
          onChange={(value) => {
            onChange?.(value);
            updateArgs({ value });
          }}
          onSelect={(option) => {
            onSelect?.(option);
            updateArgs({ value: option.label });
          }}
        />
      </div>
    );
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic usage
export const Default: Story = {
  args: {
    options: fruitOptions,
    placeholder: 'Select a fruit...',
  },
};

// With label
export const WithLabel: Story = {
  args: {
    options: fruitOptions,
    label: 'Choose your favorite fruit',
    placeholder: 'Select a fruit...',
  },
};

// With initial value
export const WithInitialValue: Story = {
  args: {
    options: fruitOptions,
    value: 'apple',
    label: 'Favorite fruit',
  },
};

// Small size
export const Small: Story = {
  args: {
    options: fruitOptions,
    size: 'small',
    label: 'Small combobox',
    placeholder: 'Select...',
  },
};

// Large size
export const Large: Story = {
  args: {
    options: fruitOptions,
    size: 'large',
    label: 'Large combobox',
    placeholder: 'Select...',
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    options: fruitOptions,
    disabled: true,
    value: 'Apple',
    label: 'Disabled combobox',
  },
};

// Loading state
export const Loading: Story = {
  args: {
    options: fruitOptions,
    loading: true,
    label: 'Loading combobox',
    placeholder: 'Loading options...',
  },
};

// No custom values allowed
export const NoCustomValues: Story = {
  args: {
    options: countryOptions,
    allowCustomValue: false,
    label: 'Select a country (no custom values)',
    placeholder: 'Choose from list only...',
  },
};

// With many options (scrollable)
export const ManyOptions: Story = {
  args: {
    options: [
      ...fruitOptions,
      ...countryOptions,
      { value: 'option1', label: 'Additional Option 1' },
      { value: 'option2', label: 'Additional Option 2' },
      { value: 'option3', label: 'Additional Option 3' },
      { value: 'option4', label: 'Additional Option 4' },
      { value: 'option5', label: 'Additional Option 5' },
      { value: 'option6', label: 'Additional Option 6' },
      { value: 'option7', label: 'Additional Option 7' },
      { value: 'option8', label: 'Additional Option 8' },
    ],
    label: 'Many options (scrollable)',
    placeholder: 'Type to filter options...',
  },
};

// Filtering demonstration
export const FilteringExample: Story = {
  args: {
    options: countryOptions,
    label: 'Type to filter countries',
    placeholder: 'Start typing a country name...',
  },
};

// Custom values allowed
export const CustomValuesAllowed: Story = {
  args: {
    options: fruitOptions,
    allowCustomValue: true,
    label: 'Fruits (custom values allowed)',
    placeholder: 'Select or type a fruit...',
  },
};
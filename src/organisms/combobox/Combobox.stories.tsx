import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import { Combobox, ComboboxOption } from './Combobox.component.tsx';

// Sample data sets
const fruitOptions: ComboboxOption[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'grape', label: 'Grape' },
  { value: 'orange', label: 'Orange' },
  { value: 'strawberry', label: 'Strawberry' },
];

const countryOptions: ComboboxOption[] = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'au', label: 'Australia' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
  { value: 'br', label: 'Brazil' },
  { value: 'in', label: 'India' },
  { value: 'cn', label: 'China' },
];

const manyOptions: ComboboxOption[] = Array.from({ length: 50 }, (_, i) => ({
  value: `option-${i + 1}`,
  label: `Option ${i + 1}`,
}));

const meta = {
  title: 'Organisms/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    allowCustomValue: {
      control: 'boolean',
    },
  },
  args: {
    onChange: fn(),
    onSelect: fn(),
    options: fruitOptions,
    placeholder: 'Select or type...',
    value: '',
  },
  render: (args) => {
    const [{ value, onChange, onSelect }, updateArgs] = useArgs();
    return (
      <div className="w-80">
        <Combobox
          {...args}
          value={value}
          onChange={(newValue) => {
            onChange?.(newValue);
            updateArgs({ value: newValue });
          }}
          onSelect={(option) => {
            onSelect?.(option);
            updateArgs({ value: option.value });
          }}
        />
      </div>
    );
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default state
export const Default: Story = {};

// With label
export const WithLabel: Story = {
  args: {
    label: 'Select a fruit',
  },
};

// With initial value
export const WithInitialValue: Story = {
  args: {
    value: 'apple',
    label: 'Favorite fruit',
  },
};

// Small size
export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small combobox',
  },
};

// Large size
export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large combobox',
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'apple',
    label: 'Disabled combobox',
  },
};

// No custom values allowed
export const NoCustomValues: Story = {
  args: {
    allowCustomValue: false,
    label: 'Select from list only',
    placeholder: 'Choose a fruit...',
  },
};

// Many options with scrolling
export const ManyOptions: Story = {
  args: {
    options: manyOptions,
    label: 'Many options',
    placeholder: 'Search through 50 options...',
  },
};

// Country selection example
export const CountrySelection: Story = {
  args: {
    options: countryOptions,
    label: 'Select a country',
    placeholder: 'Type to search countries...',
  },
};

// Custom values allowed (explicit demonstration)
export const CustomValuesAllowed: Story = {
  args: {
    allowCustomValue: true,
    label: 'Enter or select a fruit',
    placeholder: 'Try typing a custom value...',
  },
};

// Filtering example with hint
export const FilteringExample: Story = {
  args: {
    label: 'Search fruits',
    placeholder: 'Type to filter (e.g., "app")...',
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'apricot', label: 'Apricot' },
      { value: 'banana', label: 'Banana' },
      { value: 'blackberry', label: 'Blackberry' },
      { value: 'blueberry', label: 'Blueberry' },
      { value: 'cherry', label: 'Cherry' },
      { value: 'cranberry', label: 'Cranberry' },
      { value: 'grape', label: 'Grape' },
      { value: 'grapefruit', label: 'Grapefruit' },
      { value: 'orange', label: 'Orange' },
      { value: 'peach', label: 'Peach' },
      { value: 'pear', label: 'Pear' },
      { value: 'pineapple', label: 'Pineapple' },
      { value: 'raspberry', label: 'Raspberry' },
      { value: 'strawberry', label: 'Strawberry' },
    ],
  },
};

// Empty options
export const EmptyOptions: Story = {
  args: {
    options: [],
    label: 'No options available',
    placeholder: 'No options to select...',
  },
};

// With custom placeholder
export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Start typing to see suggestions...',
    label: 'Custom placeholder text',
  },
};

// Long labels
export const LongLabels: Story = {
  args: {
    options: [
      { value: '1', label: 'This is a very long option label that might wrap or truncate' },
      { value: '2', label: 'Another extremely long label to demonstrate how the component handles lengthy text' },
      { value: '3', label: 'Short' },
      { value: '4', label: 'Medium length option' },
    ],
    label: 'Options with varying label lengths',
  },
};

// Small with value
export const SmallWithValue: Story = {
  args: {
    size: 'small',
    value: 'banana',
    label: 'Small size with value',
  },
};

// Large with value
export const LargeWithValue: Story = {
  args: {
    size: 'large',
    value: 'cherry',
    label: 'Large size with value',
  },
};

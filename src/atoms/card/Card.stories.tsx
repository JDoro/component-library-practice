import type {Meta, StoryObj} from '@storybook/react-vite';

import {Card} from './Card.component.tsx';
import {fn} from 'storybook/test';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/Card',
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: { control: 'select', options: ['elevated', 'outlined', 'flat'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    children: { control: 'text' },
  },
  args: {
    onClick: fn(),
    children: 'This is the card content. You can put any React elements here.',
  }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: 'This is a basic card with default styling.',
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Card Title',
    children: 'This card has a title at the top.',
  },
};

export const WithTitleAndSubtitle: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'This is a subtitle',
    children: 'This card has both a title and subtitle.',
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    title: 'Elevated Card',
    children: 'This card has an elevated appearance with a larger shadow.',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    title: 'Outlined Card',
    children: 'This card has a border instead of a shadow.',
  },
};

export const Flat: Story = {
  args: {
    variant: 'flat',
    title: 'Flat Card',
    children: 'This card has minimal styling with a subtle shadow.',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    title: 'Small Card',
    children: 'This is a small-sized card with reduced padding.',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    title: 'Medium Card',
    children: 'This is a medium-sized card (default size).',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    title: 'Large Card',
    children: 'This is a large-sized card with increased padding.',
  },
};

export const Clickable: Story = {
  args: {
    title: 'Clickable Card',
    children: 'Click this card to trigger an action. It will show hover effects.',
    onClick: fn(),
  },
};

export const WithComplexContent: Story = {
  parameters: {
    a11y: {
      disable: true,
    },
  },
  args: {
    title: 'Card with Complex Content',
    subtitle: 'Demonstrating various content types',
    children: (
      <div>
        <p className="mb-2">This card contains more complex content:</p>
        <ul className="list-disc list-inside mb-2">
          <li>Bullet point one</li>
          <li>Bullet point two</li>
        </ul>
        <button 
          type="button"
          name="action-button"
          className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
        >
          Action Button
        </button>
      </div>
    ),
  },
};
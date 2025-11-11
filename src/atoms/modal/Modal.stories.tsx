import type {Meta, StoryObj} from '@storybook/react-vite';
import {useArgs} from 'storybook/preview-api';
import {fn} from 'storybook/test';

import {Modal} from './Modal.component.tsx';

const meta = {
  title: 'Atoms/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    title: { control: 'text' },
    children: { control: 'text' },
    closeOnOverlayClick: { control: 'boolean' },
    closeOnEsc: { control: 'boolean' },
  },
  args: {
    onClose: fn(),
    isOpen: false,
    children: 'This is the modal content.',
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Modal Title',
    children: 'This is a basic modal with default settings.',
  },
  render: function Render(args) {
    const [{ isOpen }, updateArgs] = useArgs();
    
    const handleClose = () => {
      updateArgs({ isOpen: false });
      args.onClose();
    };

    const handleOpen = () => {
      updateArgs({ isOpen: true });
    };

    return (
      <>
        <button
          type="button"
          onClick={handleOpen}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Open Modal
        </button>
        <Modal {...args} isOpen={isOpen} onClose={handleClose} />
      </>
    );
  },
};

export const WithoutTitle: Story = {
  args: {
    isOpen: true,
    children: 'This modal does not have a title.',
  },
  render: function Render(args) {
    const [{ isOpen }, updateArgs] = useArgs();
    
    const handleClose = () => {
      updateArgs({ isOpen: false });
      args.onClose();
    };

    const handleOpen = () => {
      updateArgs({ isOpen: true });
    };

    return (
      <>
        <button
          type="button"
          onClick={handleOpen}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Open Modal
        </button>
        <Modal {...args} isOpen={isOpen} onClose={handleClose} />
      </>
    );
  },
};

export const Small: Story = {
  args: {
    isOpen: true,
    title: 'Small Modal',
    size: 'small',
    children: 'This is a small-sized modal.',
  },
  render: function Render(args) {
    const [{ isOpen }, updateArgs] = useArgs();
    
    const handleClose = () => {
      updateArgs({ isOpen: false });
      args.onClose();
    };

    const handleOpen = () => {
      updateArgs({ isOpen: true });
    };

    return (
      <>
        <button
          type="button"
          onClick={handleOpen}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Open Modal
        </button>
        <Modal {...args} isOpen={isOpen} onClose={handleClose} />
      </>
    );
  },
};

export const Medium: Story = {
  args: {
    isOpen: true,
    title: 'Medium Modal',
    size: 'medium',
    children: 'This is a medium-sized modal (default size).',
  },
  render: function Render(args) {
    const [{ isOpen }, updateArgs] = useArgs();
    
    const handleClose = () => {
      updateArgs({ isOpen: false });
      args.onClose();
    };

    const handleOpen = () => {
      updateArgs({ isOpen: true });
    };

    return (
      <>
        <button
          type="button"
          onClick={handleOpen}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Open Modal
        </button>
        <Modal {...args} isOpen={isOpen} onClose={handleClose} />
      </>
    );
  },
};

export const Large: Story = {
  args: {
    isOpen: true,
    title: 'Large Modal',
    size: 'large',
    children: 'This is a large-sized modal with more width.',
  },
  render: function Render(args) {
    const [{ isOpen }, updateArgs] = useArgs();
    
    const handleClose = () => {
      updateArgs({ isOpen: false });
      args.onClose();
    };

    const handleOpen = () => {
      updateArgs({ isOpen: true });
    };

    return (
      <>
        <button
          type="button"
          onClick={handleOpen}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Open Modal
        </button>
        <Modal {...args} isOpen={isOpen} onClose={handleClose} />
      </>
    );
  },
};

export const WithComplexContent: Story = {
  parameters: {
    a11y: {
      disable: true,
    },
  },
  args: {
    isOpen: true,
    title: 'Modal with Complex Content',
    children: (
      <div>
        <p className="mb-4">This modal contains more complex content:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Feature one</li>
          <li>Feature two</li>
          <li>Feature three</li>
        </ul>
        <div className="flex gap-2">
          <button 
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Confirm
          </button>
          <button 
            type="button"
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    ),
  },
  render: function Render(args) {
    const [{ isOpen }, updateArgs] = useArgs();
    
    const handleClose = () => {
      updateArgs({ isOpen: false });
      args.onClose();
    };

    const handleOpen = () => {
      updateArgs({ isOpen: true });
    };

    return (
      <>
        <button
          type="button"
          onClick={handleOpen}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Open Modal
        </button>
        <Modal {...args} isOpen={isOpen} onClose={handleClose} />
      </>
    );
  },
};

export const NoCloseOnOverlayClick: Story = {
  args: {
    isOpen: true,
    title: 'No Overlay Close',
    closeOnOverlayClick: false,
    children: 'This modal cannot be closed by clicking the overlay. Use the X button or ESC key.',
  },
  render: function Render(args) {
    const [{ isOpen }, updateArgs] = useArgs();
    
    const handleClose = () => {
      updateArgs({ isOpen: false });
      args.onClose();
    };

    const handleOpen = () => {
      updateArgs({ isOpen: true });
    };

    return (
      <>
        <button
          type="button"
          onClick={handleOpen}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Open Modal
        </button>
        <Modal {...args} isOpen={isOpen} onClose={handleClose} />
      </>
    );
  },
};

export const NoCloseOnEsc: Story = {
  args: {
    isOpen: true,
    title: 'No ESC Close',
    closeOnEsc: false,
    children: 'This modal cannot be closed by pressing ESC. Use the X button or click the overlay.',
  },
  render: function Render(args) {
    const [{ isOpen }, updateArgs] = useArgs();
    
    const handleClose = () => {
      updateArgs({ isOpen: false });
      args.onClose();
    };

    const handleOpen = () => {
      updateArgs({ isOpen: true });
    };

    return (
      <>
        <button
          type="button"
          onClick={handleOpen}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Open Modal
        </button>
        <Modal {...args} isOpen={isOpen} onClose={handleClose} />
      </>
    );
  },
};

export const LongContent: Story = {
  args: {
    isOpen: true,
    title: 'Modal with Long Content',
    children: (
      <div>
        <p className="mb-4">This modal has scrollable content when it exceeds the viewport height.</p>
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i} className="mb-2">
            Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        ))}
      </div>
    ),
  },
  render: function Render(args) {
    const [{ isOpen }, updateArgs] = useArgs();
    
    const handleClose = () => {
      updateArgs({ isOpen: false });
      args.onClose();
    };

    const handleOpen = () => {
      updateArgs({ isOpen: true });
    };

    return (
      <>
        <button
          type="button"
          onClick={handleOpen}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Open Modal
        </button>
        <Modal {...args} isOpen={isOpen} onClose={handleClose} />
      </>
    );
  },
};

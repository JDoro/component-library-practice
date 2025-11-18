import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { ImageCarousel } from './ImageCarousel.component.tsx';

const meta = {
  title: 'Organisms/ImageCarousel',
  component: ImageCarousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    autoPlayInterval: {
      control: { type: 'number', min: 1000, max: 10000, step: 500 },
    },
    height: {
      control: 'text',
    },
    width: {
      control: 'text',
    },
  },
  args: {
    onSlideChange: fn(),
  },
} satisfies Meta<typeof ImageCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample images using placeholder service
const sampleImages = [
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    alt: 'Mountain landscape with lake',
    caption: 'Beautiful mountain scenery',
  },
  {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
    alt: 'Forest path in autumn',
    caption: 'Peaceful forest trail',
  },
  {
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop',
    alt: 'Sunset over ocean',
    caption: 'Stunning sunset view',
  },
  {
    src: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800&h=600&fit=crop',
    alt: 'Desert landscape',
    caption: 'Vast desert dunes',
  },
];

const sampleImagesWithoutCaptions = sampleImages.map(img => ({
  src: img.src,
  alt: img.alt,
}));

/**
 * Default carousel with multiple images and captions
 */
export const Default: Story = {
  args: {
    images: sampleImages,
    showArrows: true,
    showIndicators: true,
    loop: true,
    height: '400px',
    width: '600px',
  },
};

/**
 * Carousel with auto-play enabled
 */
export const AutoPlay: Story = {
  args: {
    images: sampleImages,
    autoPlay: true,
    autoPlayInterval: 2000,
    showArrows: true,
    showIndicators: true,
    loop: true,
    height: '400px',
    width: '600px',
  },
};

/**
 * Carousel without navigation arrows
 */
export const WithoutArrows: Story = {
  args: {
    images: sampleImages,
    showArrows: false,
    showIndicators: true,
    loop: true,
    height: '400px',
    width: '600px',
  },
};

/**
 * Carousel without indicator dots
 */
export const WithoutIndicators: Story = {
  args: {
    images: sampleImages,
    showArrows: true,
    showIndicators: false,
    loop: true,
    height: '400px',
    width: '600px',
  },
};

/**
 * Carousel with minimal controls (no arrows or indicators)
 */
export const MinimalControls: Story = {
  args: {
    images: sampleImages,
    showArrows: false,
    showIndicators: false,
    loop: true,
    height: '400px',
    width: '600px',
  },
};

/**
 * Carousel without looping (stops at first and last images)
 */
export const NoLoop: Story = {
  args: {
    images: sampleImages,
    showArrows: true,
    showIndicators: true,
    loop: false,
    height: '400px',
    width: '600px',
  },
};

/**
 * Small carousel
 */
export const SmallSize: Story = {
  args: {
    images: sampleImages,
    showArrows: true,
    showIndicators: true,
    loop: true,
    height: '250px',
    width: '400px',
  },
};

/**
 * Large carousel
 */
export const LargeSize: Story = {
  args: {
    images: sampleImages,
    showArrows: true,
    showIndicators: true,
    loop: true,
    height: '600px',
    width: '900px',
  },
};

/**
 * Full width carousel
 */
export const FullWidth: Story = {
  args: {
    images: sampleImages,
    showArrows: true,
    showIndicators: true,
    loop: true,
    height: '400px',
    width: '100%',
  },
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * Carousel with images but no captions
 */
export const WithoutCaptions: Story = {
  args: {
    images: sampleImagesWithoutCaptions,
    showArrows: true,
    showIndicators: true,
    loop: true,
    height: '400px',
    width: '600px',
  },
};

/**
 * Carousel with single image
 */
export const SingleImage: Story = {
  args: {
    images: [sampleImages[0]],
    showArrows: true,
    showIndicators: true,
    loop: true,
    height: '400px',
    width: '600px',
  },
};

/**
 * Carousel with two images
 */
export const TwoImages: Story = {
  args: {
    images: sampleImages.slice(0, 2),
    showArrows: true,
    showIndicators: true,
    loop: true,
    height: '400px',
    width: '600px',
  },
};

/**
 * Empty carousel (no images)
 */
export const Empty: Story = {
  args: {
    images: [],
    showArrows: true,
    showIndicators: true,
    loop: true,
    height: '400px',
    width: '600px',
  },
  parameters: {
    a11y: { disable: true },
  },
};

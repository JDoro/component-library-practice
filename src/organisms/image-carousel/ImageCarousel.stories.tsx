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
} satisfies Meta<typeof ImageCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample images using data URIs to avoid network dependencies
// These are simple colored rectangles with text
const sampleImages = [
  {
    src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect width="800" height="600" fill="%234A90E2"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="48" fill="white" text-anchor="middle" dominant-baseline="middle"%3EMountain Landscape%3C/text%3E%3C/svg%3E',
    alt: 'Mountain landscape with lake',
    caption: 'Beautiful mountain scenery',
  },
  {
    src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect width="800" height="600" fill="%2350C878"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="48" fill="white" text-anchor="middle" dominant-baseline="middle"%3EForest Path%3C/text%3E%3C/svg%3E',
    alt: 'Forest path in autumn',
    caption: 'Peaceful forest trail',
  },
  {
    src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect width="800" height="600" fill="%23FF6B6B"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="48" fill="white" text-anchor="middle" dominant-baseline="middle"%3ESunset View%3C/text%3E%3C/svg%3E',
    alt: 'Sunset over ocean',
    caption: 'Stunning sunset view',
  },
  {
    src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect width="800" height="600" fill="%23F4A460"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="48" fill="white" text-anchor="middle" dominant-baseline="middle"%3EDesert Dunes%3C/text%3E%3C/svg%3E',
    alt: 'Desert landscape',
    caption: 'Vast desert dunes',
  },
];

const sampleImagesWithoutCaptions = sampleImages.map(img => ({
  src: img.src,
  alt: img.alt,
}));

// Default args shared across most stories
const defaultArgs = {
  images: sampleImages,
  showArrows: true,
  showIndicators: true,
  loop: true,
  height: '400px',
  width: '600px',
  onSlideChange: fn(),
};

/**
 * Default carousel with multiple images and captions
 */
export const Default: Story = {
  args: defaultArgs,
};

/**
 * Carousel with auto-play enabled
 */
export const AutoPlay: Story = {
  args: {
    ...defaultArgs,
    autoPlay: true,
    autoPlayInterval: 2000,
  },
};

/**
 * Carousel without navigation arrows
 */
export const WithoutArrows: Story = {
  args: {
    ...defaultArgs,
    showArrows: false,
  },
};

/**
 * Carousel without indicator dots
 */
export const WithoutIndicators: Story = {
  args: {
    ...defaultArgs,
    showIndicators: false,
  },
};

/**
 * Carousel with minimal controls (no arrows or indicators)
 */
export const MinimalControls: Story = {
  args: {
    ...defaultArgs,
    showArrows: false,
    showIndicators: false,
  },
};

/**
 * Carousel without looping (stops at first and last images)
 */
export const NoLoop: Story = {
  args: {
    ...defaultArgs,
    loop: false,
  },
};

/**
 * Small carousel
 */
export const SmallSize: Story = {
  args: {
    ...defaultArgs,
    height: '250px',
    width: '400px',
  },
};

/**
 * Large carousel
 */
export const LargeSize: Story = {
  args: {
    ...defaultArgs,
    height: '600px',
    width: '900px',
  },
};

/**
 * Full width carousel
 */
export const FullWidth: Story = {
  args: {
    ...defaultArgs,
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
    ...defaultArgs,
    images: sampleImagesWithoutCaptions,
  },
};

/**
 * Carousel with single image
 */
export const SingleImage: Story = {
  args: {
    ...defaultArgs,
    images: [sampleImages[0]],
  },
};

/**
 * Carousel with two images
 */
export const TwoImages: Story = {
  args: {
    ...defaultArgs,
    images: sampleImages.slice(0, 2),
  },
};

/**
 * Empty carousel (no images)
 */
export const Empty: Story = {
  args: {
    ...defaultArgs,
    images: [],
  },
  parameters: {
    a11y: { disable: true },
  },
};

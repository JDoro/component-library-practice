import { useState, useEffect, useCallback, KeyboardEvent } from 'react';

export interface CarouselImage {
  /**
   * URL or path to the image
   */
  src: string;
  /**
   * Alt text for the image (required for accessibility)
   */
  alt: string;
  /**
   * Optional caption to display below the image
   */
  caption?: string;
}

export interface ImageCarouselProps {
  /**
   * Array of images to display in the carousel
   */
  images: CarouselImage[];
  /**
   * Whether to auto-play the carousel
   */
  autoPlay?: boolean;
  /**
   * Auto-play interval in milliseconds
   */
  autoPlayInterval?: number;
  /**
   * Whether to show navigation arrows
   */
  showArrows?: boolean;
  /**
   * Whether to show indicator dots
   */
  showIndicators?: boolean;
  /**
   * Whether images should loop from last to first
   */
  loop?: boolean;
  /**
   * Height of the carousel (CSS value)
   */
  height?: string;
  /**
   * Width of the carousel (CSS value)
   */
  width?: string;
  /**
   * Callback when active slide changes
   */
  onSlideChange?: (index: number) => void;
}

/**
 * An image carousel component with navigation, indicators, and auto-play support
 */
export function ImageCarousel({
  images,
  autoPlay = false,
  autoPlayInterval = 3000,
  showArrows = true,
  showIndicators = true,
  loop = true,
  height = '400px',
  width = '100%',
  onSlideChange,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Handle auto-play
  useEffect(() => {
    if (!autoPlay || isHovered || images.length <= 1) {
      return;
    }

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= images.length) {
          return loop ? 0 : prevIndex;
        }
        return nextIndex;
      });
    }, autoPlayInterval);

    return () => clearInterval(intervalId);
  }, [autoPlay, autoPlayInterval, isHovered, images.length, loop]);

  // Notify parent when slide changes
  useEffect(() => {
    onSlideChange?.(currentIndex);
  }, [currentIndex, onSlideChange]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return loop ? images.length - 1 : 0;
      }
      return prevIndex - 1;
    });
  }, [images.length, loop]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex >= images.length) {
        return loop ? 0 : images.length - 1;
      }
      return nextIndex;
    });
  }, [images.length, loop]);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < images.length) {
      setCurrentIndex(index);
    }
  }, [images.length]);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goToNext();
    } else if (e.key === 'Home') {
      e.preventDefault();
      goToSlide(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      goToSlide(images.length - 1);
    }
  };

  if (images.length === 0) {
    return (
      <div
        className="flex items-center justify-center bg-gray-100 rounded-lg"
        style={{ height, width }}
      >
        <p className="text-gray-500">No images to display</p>
      </div>
    );
  }

  const currentImage = images[currentIndex];

  return (
    <div
      className="relative overflow-hidden rounded-lg bg-gray-900"
      style={{ height, width }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Image carousel"
      aria-roledescription="carousel"
    >
      {/* Images */}
      <div className="relative h-full w-full">
        {images.map((image, index) => (
          <div
            key={image.src}
            className={[
              'absolute top-0 left-0 w-full h-full transition-opacity duration-500',
              index === currentIndex ? 'opacity-100' : 'opacity-0',
            ].join(' ')}
            aria-hidden={index !== currentIndex}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white px-4 py-2">
                <p className="text-sm md:text-base">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showArrows && images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            disabled={!loop && currentIndex === 0}
            className={[
              'absolute left-2 top-1/2 -translate-y-1/2',
              'bg-white/80 hover:bg-white',
              'text-gray-900 rounded-full p-2',
              'transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
              'disabled:opacity-30 disabled:cursor-not-allowed',
            ].join(' ')}
            aria-label="Previous image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            disabled={!loop && currentIndex === images.length - 1}
            className={[
              'absolute right-2 top-1/2 -translate-y-1/2',
              'bg-white/80 hover:bg-white',
              'text-gray-900 rounded-full p-2',
              'transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
              'disabled:opacity-30 disabled:cursor-not-allowed',
            ].join(' ')}
            aria-label="Next image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && images.length > 1 && (
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2"
          role="tablist"
          aria-label="Carousel slides"
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={[
                'w-3 h-3 rounded-full transition-all duration-200',
                'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                index === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75',
              ].join(' ')}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? true : undefined}
              role="tab"
            />
          ))}
        </div>
      )}

      {/* Screen reader status */}
      <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        Slide {currentIndex + 1} of {images.length}
        {currentImage.caption && `: ${currentImage.caption}`}
      </div>
    </div>
  );
}

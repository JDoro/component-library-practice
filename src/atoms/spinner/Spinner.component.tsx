export interface SpinnerProps {
  /**
   * The size of the spinner
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The color of the spinner
   */
  color?: string;
  /**
   * The speed of the animation
   */
  speed?: 'slow' | 'normal' | 'fast';
}

function getSizeClass(size: string): string {
  if (size === 'small') {
    return 'h-4 w-4 border-2';
  }
  if (size === 'large') {
    return 'h-16 w-16 border-4';
  }
  return 'h-8 w-8 border-[3px]';
}

function getSpeedClass(speed: string): string {
  if (speed === 'slow') {
    return 'animate-[spin_1.5s_linear_infinite]';
  }
  if (speed === 'fast') {
    return 'animate-[spin_0.5s_linear_infinite]';
  }
  return 'animate-[spin_1s_linear_infinite]';
}

/**
 * A customizable spinner component for loading states
 */
export function Spinner({
  size = 'medium',
  color = '#3b82f6',
  speed = 'normal',
}: SpinnerProps) {
  return (
    <div
      className={[
        'rounded-full',
        'border-solid',
        'border-t-transparent',
        getSizeClass(size),
        getSpeedClass(speed),
      ].join(' ')}
      style={{ borderColor: color, borderTopColor: 'transparent' }}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

interface CardProps {
  /**
   * Card content
   */
  children: React.ReactNode;
  /**
   * What variant of card to display?
   */
  variant?: 'elevated' | 'outlined' | 'flat';
  /**
   * How large should the card be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional title for the card
   */
  title?: string;
  /**
   * Optional subtitle for the card
   */
  subtitle?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Additional CSS classes
   */
  className?: string;
}

function getSizeClasses(size: string): string {
  if (size === 'small') {
    return 'p-3 text-sm';
  }
  if (size === 'large') {
    return 'p-6 text-base';
  }
  return 'p-4 text-sm';
}

function getVariantClasses(variant: string): string {
  if (variant === 'elevated') {
    return 'bg-white shadow-lg border-0';
  }
  if (variant === 'outlined') {
    return 'bg-white border border-gray-300 shadow-none';
  }
  return 'bg-white shadow-sm border-0';
}

/**
 * Primary UI component for displaying content in a card layout
 */
export const Card = ({
  children,
  variant = 'flat',
  size = 'medium',
  title,
  subtitle,
  onClick,
  className = '',
  ...props
}: CardProps) => {
  const baseClasses = [
    'rounded-lg',
    'transition-all',
    'duration-200',
    getSizeClasses(size),
    getVariantClasses(variant),
  ];

  if (onClick) {
    baseClasses.push('cursor-pointer', 'hover:shadow-md');
  }

  if (className) {
    baseClasses.push(className);
  }

  const cardContent = (
    <>
      {(title || subtitle) && (
        <div className="mb-3">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-sm text-gray-600">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div>{children}</div>
    </>
  );

  return (
    <div
      className={baseClasses.join(' ')}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
      {...props}
    >
      {cardContent}
    </div>
  );
};
interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * ButtonComponent contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

function getSizeClass(size: string): string {
  if (size === 'small') {
    return 'text-[12px] px-[16px] py-[10px]';
  }
  if (size === 'large') {
    return 'text-[16px] px-[24px] py-[12px]';
  }
  return 'text-[14px] px-[20px] py-[11px]';
}

function getModeClasses(primary: boolean): string {
  if (primary) {
    return 'text-accent bg-primary';
  }
  return 'text-secondary bg-transparent shadow-[0_0_0_1px_rgba(0,0,0,0.15)]';
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={[
        'font-[\'Nunito Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif]',
        'font-[700]',
        'border-0',
        'rounded-[3em]',
        'cursor-pointer',
        'inline-block',
        'leading-none',
        getSizeClass(size),
        getModeClasses(primary),
      ].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
